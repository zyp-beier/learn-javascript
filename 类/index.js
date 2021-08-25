// // 类声明
// class Person{}
// // 类表达式
// const Animal = class {}
 
// // 函数表达式不能提升，函数声明可提升
// // console.log(ani);   //undefined
// // var ani = function(){}
// // console.log(ani);  //function(){}
// // console.log(b); // function() {}
// // function b() {}
// // console.log(b);// function() {}

// //类都不能提升

// console.log(C); // undefined
// var C = class {}
// console.log(C); //class{}
// // console.log(D); //index.js:19 Uncaught ReferenceError: Cannot access 'D' before initialization
// class D {}
// console.log(D); //class D{}

// 函数受函数作用域限制，类受块作用域限制
// {
//   function FunctionDe() {}
//   class ClassDec {}
// }
// console.log(FunctionDe);  //Function() {}
// console.log(ClassDec);  //Uncaught ReferenceError: ClassDec is not defined

// 立即实例化类
// new class Foo{
//   constructor(name) {
//     console.log(name);
//   }
// }('wangbin')

// 实例
// class Person {
//   constructor() {
//     this.name = new String('jack')
//     this.sayName = () => console.log(this.name);
//     this.nickNames = ['jack','jk']
//   }
// }
// let p1 = new Person()
// let p2 = new Person()
// p1.sayName()  //String {"jack"}
// p2.sayName() //String {"jack"}
// console.log(p1.name === p1.name); //true
// console.log(p2.sayName === p2.sayName); //true
// p1.name = p1.nickNames[0]
// p2.name = p2.nickNames[1]
// p1.sayName()  //jack
// p2.sayName() //jk

//为了在实例间共享方法，类定义语法把在类块中定义的方法作为原型方法。
// class A {
//   constructor() {
//     // 添加到this的所有内容都会存在不同的实例上
//     this.locate = () => console.log('instance');
//   }
//   // 在类块定义的所有内容都会定义在类的原型上
//   locate() {
//     console.log('prototype');
//   }
// }
// let a = new A()
// a.locate() //instance
// A.prototype.locate() //prototype

// //可以把方法定义在类构造函数中或者类块中，但不能在类块中给原型添加原始值或对象作为成员数据：
// class B {
//   name: 'Jack'
// }//Uncaught SyntaxError: Unexpected identifier

//静态成员每个类上只能有一个
// class B {
//   //添加到this的所有内容都会存在不同的实例上
//   constructor() {
//     this.locate = () => console.log('instance', this);
//   }
//   //定义在类的原型对象上
//   locate() {
//    console.log('prototype',this);
//   }
//   //定义在类本身上
//   static locate() {
//    console.log('class',this); 
//   }
// }
// let b = new B()
// b.locate()  // instance ...
// B.prototype.locate() //prototype ...
// B.locate() // class ...

// 类继承
//继承类
// class D {}
// class E extends D {}
// let e = new E()
// console.log(e instanceof E); //true
// console.log(e instanceof D); //true
// //继承普通的构造函数
// function F() {}
// class G extends F {}
// let g = new G()
// console.log(g instanceof G); //true
// console.log(g instanceof F); // true

// class Vehicle {
//   identifyProtoType(id) {
//     console.log(id,this);
//   }
//   static identifyClass(id) {
//     console.log(id,this)
//   }
// }
// class Bus extends Vehicle {}
// let b = new Bus()
// let v = new Vehicle()
// b.identifyProtoType(1)
// v.identifyProtoType(2)
// Bus.identifyClass(3)
// Vehicle.identifyClass(4)

//在类构造函数中使用super可以调用父类构造函数。
// class Vehicle {
//   constructor(){
//     this.name = 'zhaoyinping'
//   }
// }
// class Bus extends Vehicle {
//   constructor() {
//     // 不要在调用super（）之前应用this，否则会抛出错误
//     super() //相当于super.construtor()
//     console.log(this instanceof Vehicle)  //true
//     console.log(this)  // Bus {name: "zhaoyinping"}
//   }
// }
// new Bus()
//在静态方法可以通过super调用继承的类上定义的静态方法
// class Vehicle {
//   static identify() {
//     console.log('vehicle')
//   }
// }
// class Bus extends Vehicle {
//   static identify(){
//     super.identify()
//   }
// }
// Bus.identify()  //vehicle

//利用super给父类构造函数传参
// class Vehicle {
//   constructor(licensePlate) {
//     this.licensePlate = licensePlate
//   }
// }
// class Bus extends Vehicle {
//   constructor(licensePlate) {
//     super(licensePlate)
//   }
// }
// console.log(new Bus(88888888))
// 如果在派生类中显式定义了构造函数，则要么必须在其中调用super()，要么必须在其中返回一个对象。