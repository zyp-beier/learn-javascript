
var l = console.log
var target = {};
var handler = {};
var proxy = new Proxy(target, handler);
proxy.a = 'b';
console.log(proxy.a)


var aa = new Proxy({},{
    get: function(target,property) {
        return 35
    }
})

let obj = Object.create(aa);
console.log(obj.nothing)

//proxy 实例方法
//get  查询拦截  目标对象 属性名 proxy实例本身
var person = {
    name: '张三'
}

var proxy = new Proxy(person,{
    get: function(target,property) {
        if(property in target) {
            return target[property];
        }else{
            throw new ReferenceError("Property \"" + property + "\" does not exist.");
        }
    }
})
l(proxy.name)
// l(proxy.age)

//实现数组读取负数的索引

function createArray(...elements) {
    let handler = {
        get(target,propKey,receiver) {
            let index = Number(propKey);
            if(index < 0) {
                propKey = String(target.length + index);
            }
            return Reflect.get(target,propKey,receiver);
        }
    };
    let target = [];
    target.push(...elements);
    return new Proxy(target,handler)
}
let arr = createArray('a','b','c')
l(arr[-1])

//set 设置拦截  目标对象 属性名 属性值 实例本身
let validator = {
    set: function(obj,prop,value) {
        if(prop === 'age') {
            if(!Number.isInteger(value)) {
                throw new TypeError('The age is not an inteager')
            }
            if(value>200) {
                throw new RangeError('年龄太大了');
            }
        }
        obj[prop] = value;
    }
};
let ee = new Proxy({},validator);
ee.age = 100;
l(ee.age)
ee.age = 99
l(ee.age)


//has 判断对象是否具有某个属性 目标对象 查询的属性名

//has拦截只对in运算符生效
var handler = {
    has(target,key) {
        if(key[0]==='_') {
            l('有的有的')
            return false
        }
        return key in target;
    }
};
var target = {_prop:'foo',prop:'foo'};
var proxy = new Proxy(target,handler);

l('_' in proxy)


// var obj = {a:10};
// Object.preventExtensions(obj);
// var p = new Proxy(obj,{
//     has:function(target,prop){
//         return false;
//     }
// })

//construct

var handler = {
    construct(target,args,newTarget) {
        return new target(...args)
    }
}

var p = new Proxy(function() {},{
    construct:function(target,args) {
        l('called:' + args.join(','));
        return {value: args[0]*10};
    }
});
(new p(1)).value

   