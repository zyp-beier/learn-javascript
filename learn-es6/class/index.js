// function Point(x,y) {
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.toString = function() {
//     return '(' + this.x + ',' + this.y + ')';
// }

// var p = new Point(1,2);

// p.toString()

// class Point {
//     constructor(x,y) {
//         this.x = x;
//         this.y = y;
//     }
//     toString() {
//         return '(' + this.x + ',' + this.y + ')'
//     }
// }

// var point = new Point(1,3)
// console.log(point.toString())
// console.log(point.hasOwnProperty('x'))
// console.log(typeof Point)
// console.log(Point === Point.prototype.constructor)


// var p1 = new Point(2,3);
// var p2 = new Point(3,2);

// console.log(p1._proto_===p2._proto_)
// p1.__proto__.printName = function () { return 'Oops'};
// console.log(p1.printName())
// console.log(p2.printName())


// class MyClass {
//     constructor() {

//     }

//     get prop() {
//         return 'getter';
//     }
//     set prop(value) {
//         console.log('setter:' +value);
//     }
// }

// let inst = new MyClass();

// console.log(inst.prop = 123)
// console.log(inst.prop)



// let methodName = 'getArea';

// class Square {
//     constructor(length) {
//         this.length = length
//     };
//     [methodName]() {
//         return this.length
//     }
// }


// var square = new Square(5)

// console.log(square.getArea())


// class Me {
//     constructor() {

//     };
//     getClassName() {
//       return 123;
//     }
//   };

//   let aa = new Me();
// console.log(aa.getClassName())


// const MyClassOne = class {
//     constructor() {

//     };
//     gg() {
//         return 147852
//     }
// }

// var tt = new MyClassOne()
// console.log(tt.gg())



// class long{
//     constructor(name,age) {
//         this.name = name
//         this.age = age
//     }

//     getname() {
//         return this.name
//     }
// }


// class Ping extends long{
//     constructor(name,job) {
//         super(name)
//         this.job = job
//     }

//     getname() {
//         console.log(this.name)
//         return super.getname
//     }
// }



// var ping = new Ping()
// console.log(ping.getname())

// function concatenateAll(...args) {
//     return args.join('');
// }


// console.log(concatenateAll([1,4,7,2,5,8,3,5,8,7],4,7,4,[7,8,9,4,5,6,1,2,3]))
// class ww {
//     constructor() {
//        this.number=1;
//         this.numberTwo=2
//     }
//     publicMethod() {
//         return this.number + this.numberTwo
//     }
// }

// var bb = new ww()
// console.log(bb.publicMethod())
// var cc = new ww()
// console.log(cc.publicMethod())


// class Qq {
//     constructor(rr) {
//         this.yy = 11,
//         this.rr = rr
//     }
//     static tt() {
//         return `hello ${this.yy},${this.rr}`
//     }
//     tt() {
//         return `hello ${this.yy},${this.rr}223`
//     }
// }

// var qq = new Qq(45)
// console.log(qq.tt())                                                                                                                            v REE---
// console.log(Qq.tt())



class lei{
    constructor() {

    }
    static shiyou() {
        console.log('这是私有的方法')
    }
}

lei.shiyou()


////父类的静态实例会被子类所继承
class Foo {
    static classMethod() {
        console.log('hello')
    }
}

class Bar extends Foo {

}
Bar.classMethod()

//////////使用super
class father {
    static fatherOne() {
        return `这是父类的方法`
    }
}

class sun extends father{
    static classMethod() {
        console.log(super.fatherOne()+`, too`)
    }
}


sun.classMethod()

//////////////////////////////
class Father{
    constructor() {

    }
   static One() {
        return 123
    }
}
// class Sun extends Father{
    // constructor(){
        // super(this)
//     }
//     static Two() {
//         return this.One() + 5
//     }
// }
//
// console.log(Sun.Two())

class Three{
    static name='zhaoyinping'
}

console.log(Three.name)

class Four extends Three{
    static age = 22
    static Five() {
      console.log(super.name + this.age)
    }
}

Four.Five()

/////////////////////////class继承

class Six{
    x=1;
    y=2
    // constructor(x,y){
    //     this.x = x
    //     this.y = y
    // }
    // Five() {
    //     return this.x + this.y
    // }
}

class Seven extends Six{
    constructor(color) {
        super()
        this.color = color
    }
    eight() {
        console.log(super.x,super.y,this.color)
        // return super.Five()
    }
}

var seven = new Seven('red')

console.log(seven.eight())


class A {
    constructor() {
        this.x = 1;
    }
    static print() {
        console.log(this.x)
    }
}

class B extends A {
    constructor() {
        super();
        this.x = 2
    }
    static m() {
        super.print()
    }
}


B.x = 5;
B.m()
