var log = console.log

function* f() {
   yield console.log('执行了')
   yield console.log(1+2+3+4+5+6+7+8+9)
   return console.log('结束')
}


// f().next()
// setTimeout(() => {
    // f().next()
// },2000)


var arr = [1,[2,3],4,[5,6]];

var flat = function* (a) {
    var length = a.length;
    for(var i = 0; i< length; i++) {
        var item = a[i];
        if(typeof item !== 'number') {
            yield* flat(item);
        }else{
            yield item;
        }
    }
}


// for(var f of flat(arr)){
//     console.log(f)
// }


function* demo() {
    // console.log('Hello' + yield); // SyntaxError
    // console.log('Hello' + yield 123); // SyntaxError
  
    console.log('Hello' + (yield)); // OK
    console.log('Hello' + (yield 123)); // OK
  }


  var myIterable = {};


myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
}


console.log([...myIterable])



function * f() {
    for(var i=0;true;i++) {
        var reset = yield i;
        if(reset) {i = -1}
    }
}
var g = f();

console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next(true))
console.log(g.next())



function* foo(x) {
    var y = 2*(yield(x+1))
    var z = yield(y/3)
    return (x + y + z);
}

var a = foo(5)
console.log(a.next())
console.log(a.next())


var b = foo(7)
console.log(b.next()) //8
console.log(b.next(66)) //132/3=44
console.log(b.next(8)) //7+132+8=147



var c = foo(9)
console.log(c.next())// 10
console.log(c.next(45))//90/3=30
console.log(c.next(32))//131


function* dataConsumer() {
    console.log('Stated');
    console.log(`1.${yield}`);
    console.log(`2.${yield}`);
    return `result`
}


let genObj = dataConsumer();
console.log(genObj.next())



var g = function* () {
    try {
        yield;
    }catch (e) {
        console.log('内部捕获',e)
    }
};


var i = g();
i.next();


try{
    i.throw('a');
    i.throw('b');
} catch (e) {
    console.log('外部捕获',e);
}



function* aa() {
    yield 'a',
    yield 'b'
}


function* bar() {
    yield 'x';
    for(let i of aa()) {
        console.log(i)
    }
    yield 'y'
}

for (let v of bar()){
    console.log(v)
}

////////////////////////////////

function* cc() {
    yield '7';
    yield* aa();
    yield '8'
}

for (let t of cc()){
    console.log(t)
}


function* concat(iter1,iter2) {
    yield iter1;
    yield* iter2
}
var ee = function* () {
    yield 'a'
}

var dd = concat(1,ee())

console.log(dd.next())
console.log(dd.next())
console.log(dd.next())


function* gg() {
    yield* [1,2,3,4,5]
}

console.log(gg().next())

function* rr() {
    yield [1,2,3,4,5]
}

console.log(rr().next())


let read = (function* () {
    yield 'hello';
    yield* 'hello';
  })();
  
  read.next().value // "hello"
  read.next().value // "h"






  const tree = ['a',['b','c'],['d','e']];

  function* iterTree(tree) {
      if(Array.isArray(tree)) {
          for (let i=0; i<tree.length;i++) {
              yield* tree[i]; 
          }
      }else {
          yield tree;
      }
  }

  for (let x of iterTree(tree)) {
      console.log(x)
  }



  function* haha(obj) {
    let keys = Object.keys(obj)
    for(let i=0;i<keys.length;i++) {
            let key = keys[i];
            yield[key, obj[key]]
    }
  }


  var obj = {
      foo:'abc',
      age:21
  }


  for (let [key,value] of haha(obj)) {
    console.log(key,value)
  }



  function* yy(x){
      try{
          var y = yield x + 2
          return y
      }catch(e) {
          console.log('e'+ e)
      }
      return 147
  }
  var g = yy(1)

  console.log(g.next())
  console.log(g.throw('danger,danger,danger'))
  console.log(g.next(4))
  console.log(g.next())
