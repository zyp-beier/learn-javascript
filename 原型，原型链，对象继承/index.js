// 1.所有引用类型都有一个 _proto_(隐式原型), 属性值是一个普通的对象
// 2.所有函数都有一个prototype(原型)属性,属性值是一个普通的对象
// 3.所有引用类型的_proto_属性指向它构造函数prototype

// const a = [1,2,3]
// console.log(a.__proto__=== Array.prototype);  //true

// // 当访问一个对象的某个属性时，会先在这个对象本身属性上查找，如果没有找到，则会去它的__proto__隐式原型上查找，即它的构造函数的prototype，如果还没有找到就会再在构造函数的prototype的__proto__中查找，这样一层一层向上查找就会形成一个链式结构，我们称为原型链。
//  function Person(name, age) {
//    this.name = name,
//    this.age = age
//  }

// Person.prototype.eat = function() {
//   console.log('今晚吃什么呢');
// }

// let person = new Person('zhao', 23)
// console.log(person.prototype);  //undefined 这是一个对象不是函数
// console.log(person.__proto__);
// console.log(person.__proto__ === Person.prototype);  //true
// console.log(Person.prototype);


// function Foo() {}  // 构造函数（一般首字母大写）
// let foo = new Foo() // 实例化
// let proto1 = Object.getPrototypeOf(obj) // 应用原型
// console.log(proto1);

// function Person() {}
// Person.prototype.name = 'zhao'
// Person.prototype.age = 23
// Person.prototype.job = 'frontend'

// //hasOwnProperty()方法用于确定某个属性是否在实例上
// let person = new Person()
// let person2 = new Person
// console.log(person.name);  //zhao
// console.log(person.hasOwnProperty('name'));  //false  来自原型
// person2.name = 'yinping'
// console.log(person2.name)  //yinping
// console.log(person2.hasOwnProperty('name')); //  true 来自实例

// delete person2.name
// console.log(person2.name) //zhao
// console.log(person2.hasOwnProperty('name')); //false 来自原型

// 盗用构造函数（对象伪装，经典继承）
// function SuperType(name) {
//   //  传参
//   this.name = name
//   this.colors = ['red', 'pink', 'green']
// }
// function SubType() {
//   // 继承SuperType
//   SuperType.call(this, 'zhaoyinping')
// }
// let subType = new SubType()
// subType.colors.push('black')
// console.log(subType.colors); //["red", "pink", "green", "black"]
// console.log(subType.name);  //zhaoyinping
// let subType2 = new SubType()
// console.log(subType2.colors);// ["red", "pink", "green"]
// console.log(subType2.name); // zhaoyinping


// 对象的继承方式 1.原型链继承 2.盗用构造函数 3.组合继承 4.原型式继承 5.寄生式继承 6.寄生式组合继承
// 组合继承
// function SuperType(name) {
//   this.name = name
//   this.colors = ['red', 'green', 'pink']
// }
// SuperType.prototype.sayName = function() {
//   console.log(this.name);
// }

// function SubType(name,age) {
//   // 继承属性
//   SuperType.call(this, name)
//   this.age = age
// }
// // 继承方法
// SubType.prototype = new SuperType()
// SubType.prototype.sayAge = function() {
//   console.log(this.age); 
// }
// let instancel = new SubType('zhaoyinping', 23)
// instancel.colors.push('black')
// console.log(instancel.colors);  //['red', 'green', 'pink', 'black']
// instancel.sayAge() //23
// instancel.sayName() // zhaoyinping
// let instancel2 = new SubType('wangbin', 27)
// console.log(instancel2.colors); //["red", "green", "pink"]
// instancel2.sayAge()  //27
// instancel2.sayName() //wangbin

