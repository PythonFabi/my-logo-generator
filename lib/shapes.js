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
        const triangleTemplate = `<polygon points="150, 18 244, 182 56, 182" fill="${scolor}" />`;
        super(triangleTemplate);
        this.color = scolor;
    }

    setColor(color) {
        this.color = color;
        const updatedTemplate = this.template.replace(/fill=".*?"/, `fill="${color}"`);
        this.template = updatedTemplate;
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

module.exports = {Triangle, Circle, Square};

