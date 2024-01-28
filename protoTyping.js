function Person(name){
    this.name = name;
}

Person.prototype.sayHello = function(){
    console.log(`Hello ${this.name} !`);
}

var prsn_obj = new Person("DeepShikha");
prsn_obj.sayHello();