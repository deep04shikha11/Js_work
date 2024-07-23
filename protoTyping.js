/* 

function Person(name){
    this.name = name;
}
Person.prototype.sayHello = function(){
    console.log(`Hello ${this.name} !`);
}
var prsn_obj = new Person("DeepShikha");
prsn_obj.sayHello(); 

*/

function Shape() {
    this.name = "Sqr Shape";
}
Shape.prototype.getName = function () {
    return this.name;
}
function Square(side) {
    Shape.call(this);
    this.side = side;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.getArea = function () {
    return this.side * this.side;
}
var sqr = new Square(5);
console.log(sqr.getName());



