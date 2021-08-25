
// function* foo(x) {
//   let a = yield x + 1;
//   let b= yield a + 2;
//   return x + 3;
// }
// const result = foo(0)
// console.log(result) // foo {<suspended>}
// console.log(result.next(1)) // {value: 1, done: false}
// console.log(result.next(2)) // {value: 4, done: false}
// console.log(result.next(3))// {value: 3, done: true}
// console.log(result.next(4))  //{value: undefined, done: true}

// 传入的参数，是替代上一次迭代的生成值。


// function* fun(x) {
//   let a = yield x + 2;
//   let b = yield a + 1;
//   let c = yield b + 3;
//   let d = yield a + b;
//   let e = yield d + 1
//   return
// }

// let f = fun(0)
// console.log(f.next(2))  // 2 false
// console.log(f.next(4))  // 5 false
// console.log(f.next(3))  //6 false
// console.log(f.next(7))  //7 false
// console.log(f.next(2)) //3 false
// console.log(f.next(1)) // undefined true




// function* foo(x) {
//   let a = yield x + 0;
//   let b= yield a + 2;
//   yield x;
//   yield a 
//   yield b
//   yield a
// }
// const result = foo(0)
// console.log(result.next()) //  {value:0 , done: false}
// console.log(result.next(2))// {value:4 , done: false}
// console.log(result.next(3)) // {value:0 , done: false}
// console.log(result.next(4))// {value:2 , done: false}
// console.log(result.next(5)) // {value:3 , done: false}
// console.log(result.next(4)) // {2, false}

// async 原理
function getNum (num) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(num + 1)
    }, 2000)
  })
}

function* fun () {
  let f1 = yield getNum(1);
  let f2 = yield getNum(f1)
  console.log(f2)
}

function asyncFun(fun) {
  let gen = fun()
  function next(data) {
    let result = gen.next(data)
    console.log(result)
    if (result.done) return result.value;
    result.value.then(function(data) {
      next(data)
    })
  }
  next()
}

asyncFun(fun)