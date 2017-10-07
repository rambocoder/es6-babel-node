class Circle {
    constructor(radius){
        this.radius = radius;
        Circle.circlesMade++;
    }
    static draw(circle, canvas){
        var x, y;
        x = circle;
        y = canvas;

    }
    static get circlesMade(){
        return !this._count ? 0 : this._count;
    }
    static set circlesMade(value){
        this._count = value;
    }
    area(){
        return Math.pow(this.radius, 2) * Math.PI;
    }
    get radius(){
        return this._radius;
    }
    set radius(value){
        if(!Number.isInteger(value)){
            throw new Error('Radius must be a number');
        }
        this._radius = value;
    }
}

export { Circle }