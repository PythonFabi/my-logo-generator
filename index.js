const inquirer = require('inquirer');
const fs = require('fs');

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
        name: 'shapes',
        choices: ['circle', 'triangle', 'square']
    }, {
        type: 'input',
        message: 'What color should the shape be in (color keyword or hexademical number)?',
        name: 'scolor'
    }
];


function writeToFile(fileName, { text, tcolor, }) {
const svgTemplate = `<svg version="1.1" 
width="300" height="200" 

xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="red" />

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill=${tcolor}>${text}</text>

</svg>;`

}