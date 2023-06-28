class Shapes {
    constructor(template) {
    this.template = template;
}

render() {
    return this.template;
}
};

class Triangle extends Shapes {
    constructor(scolor){
        const triangleTemplate = `<polygon points="150, 20 18 244, 182 56, 182" fill="${scolor}" />`;
        super(triangleTemplate);
    }
};


class Circle extends Shapes {
    constructor(scolor) {
        const circleTemplate = `<circle cx="150" cy="100" r="80" fill="${scolor}" />`
        super(circleTemplate);
    }
};

class Square extends Shapes {
    constructor(scolor){
        const squareTemplate = `<rect x="50" y="50" width="200" height="100" fill="${scolor}" />`;
        super(squareTemplate);
    }
};

module.exports = Shapes, Triangle, Circle, Square;

