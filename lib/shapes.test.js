const {Triangle, Circle, Square} = require('./shapes.js');

test('Triangle render', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});


test('Circle render', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="110" r="80" fill="red" />');
});


test('Square render', () => {
    const shape = new Square();
    shape.setColor('#FF0000');
    expect(shape.render()).toEqual('<rect x="60" y="25" width="175" height="175" fill="#FF0000" />');
});


