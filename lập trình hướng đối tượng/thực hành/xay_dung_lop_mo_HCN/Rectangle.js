class Rectangle {
    _width;
    _height;

    constructor(width, height) {
        this._widthwidth = width;
        this._heightheight = height;
    }
    getArea(){
        return this._width * this._height;
    }
    getPerimeter(){
        return 2*(this._width+this._height);
    }
}