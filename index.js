const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        message: 'Enter up to three characters for your logo!',
        name: 'text'
    }, {
        type: 'input',
        message: 'What color should the text be in (color keyword or hexademical number)?',
        name: 'tcolor'
    }, {
        type: 'list',
        message: 'Which of the following three shapes(circle, triangle, and square) should your logo have?',
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
    }, {
        type: 'input',
        message: 'What color should the shape be in (color keyword or hexademical number)?',
        name: 'scolor'
    }
];


function writeToFile(fileName, { text, tcolor, shape, scolor}) {
    let createShape;
    switch (shape) {
        case 'circle':
            createShape = new Circle(scolor);
            break;
        case 'triangle':
            createShape = new Triangle(scolor);
            break;
        case 'square':
            createShape = new Square(scolor);
            break;
            default:
                throw new Error('Invalid shape choice'); 
    }


    const svgTemplate = `<svg version="1.1" 
    width="300" height="200" 

    xmlns="http://www.w3.org/2000/svg">

    ${createShape.render()}

    <text x="150" y="125" font-size="40" text-anchor="middle" fill="${tcolor}">${text}</text>

    </svg>`;

    fs.writeFileSync(fileName, svgTemplate);

}

inquirer.prompt(questions).then((answers) => {
    writeToFile('./examples/logo.svg', answers);
}) 