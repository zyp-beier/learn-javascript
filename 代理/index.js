// const target = {
//   id: 'target'
// }

// const handle = {}
// const proxy = new Proxy(target, handle)
// console.log(target.id) //target
// console.log(proxy.id) //target

// target.id = 'foo'
// console.log(target.id) //foo
// console.log(proxy.id) //foo

// proxy.id = 'bar'
// console.log(proxy.id) //bar
// console.log(target.id) //bar

// 捕获器
// const target = {
//   foo: 'bar'
// }
// const handle = {
//   //捕获器在处理程序对象中以方法名为键
//   //get()捕获器会接收到目标对象、要查询的属性和代理对象三个参数。
//   get (trapTarget, property, receiver) {
//     console.log(trapTarget === target)
//     console.log(property)
//     console.log(receiver === proxy)
//     // return 'handle override'
//     return trapTarget[property]  //bar
//   }
// }
// const proxy = new Proxy(target, handle)
// proxy.foo   
// true
// foo
// true
// console.log(proxy.foo) //handle override
// console.log(target.foo)  //bar

// 撤销代理
  // const target = {
  //   foo: 'bar'
  // }
  // const handle = {
  //   get () {
  //     return 'intercepted'
  //   }
  // }
  // const {proxy, revoke} = Proxy.revocable(target, handle)

  // console.log(proxy.foo) //intercepted
  // console.log(target.foo)  //bar
  // revoke()
  // console.log(proxy.foo) //Uncaught TypeError: Cannot perform 'get' on a proxy that has been revoked

  // 跟踪属性访问
  // const user =  {
  //   name: 'Jack'
  // }
  // const proxy = new Proxy(user, {
  //   get(target, property, receiver) {
  //     console.log(`gitting ${property}`)
  //     return Reflect.get(...arguments)
  //   },
  //   set(target, property, value, receiver) {
  //     console.log(`setting ${property} = ${value}`)
  //     return Reflect.get(...arguments)
  //   }
  // })
  // proxy.name   // gitting name
  // proxy.age = 27 // setting age = 27

  // 隐藏属性
// const a = ['age','job']
// const b = {
//   name: 'jack',
//   age: 27,
//   job: 'frontend',
// }

// const proxy = new Proxy(b,{
//   get(target, property) {
//     if (a.includes(property)) {
//       return undefined
//     } else {
//       return Reflect.get(...arguments)
//     }
//   },
//   has(target, property) {
//     if(a.includes(property)) {
//       return false
//     } else {
//       return Reflect.has(...arguments)
//     }
//   }
// })

// console.log(proxy.name) //jack
// console.log(proxy.age) // undefined
// console.log(proxy.job)// undefined
// console.log('name' in proxy) // true
// console.log('age' in proxy) //false
// console.log('job' in proxy) // false

// 属性验证

const a = {
  number: 5
}

const proxy = new Proxy(a, {
  set(target, property, value) {
    if(typeof (value) === 'number'){
      if (value < target[property]) {
        throw Error(`值不能小于${target[property]}`)
      } else {
        target[property] = value
        return Reflect.get(...arguments)
      }
    } else {
      throw Error('赋值类型不被允许')
    }
  }
})
proxy.number = 19
proxy.number = 18 // 值不能小于19