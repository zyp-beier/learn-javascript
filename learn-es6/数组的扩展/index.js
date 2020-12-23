console.log(...[1,2,3])
let aa = []
function foo(array,...item) {
 return array.push(...item)
}
foo(aa,1,4,7,2,5,8,3,6,9,)
console.log(aa)


function f(v, w, x, y, z) {
    console.log(v)
    console.log(w)
    console.log(x)
    console.log(y)
    console.log(z)
 }
const args = [0, 1];
f(-1, ...args, 2, ...[3]);



console.log(Math.max(...[4,8,12]))

console.log(new Date(...[2019, 10, 18]))


const a1 = [{foo:1}]
const a2 = [{bar:2}]
 
a1[0] ={haha:8}
const a3 = a1.concat(a2)
const a4 = [...a1,...a2]
console.log(a3)
console.log(a4)



console.log(a3)
console.log(a1)

const arr = [first,...last] = [7,8,9,4,5,6,1,2,3]
console.log(arr)
console.log(first)
console.log(last)


console.log([...'hello'])


var [a,b,c,d,e,f] = "巴啦啦小魔仙啊"

console.log(a)
console.log(d)
console.log(f)

let arrayLike = {
    "0": '赵银萍',
    "1": "18",
    "2":'fontEnd',
    length:3
}

let arr2 = Array.from(arrayLike)
console.log(arr2)

let hello = Array.from('hello')
console.log(hello)

let of = Array.of(3,10,2,8,5,4,3)
console.log(of)


let  num= [1,2,3,4,5,6,7,8,9,10]

let n = num.find((item,index,arr) => {
    return arr.push(item)
})

console.log(num)


const Person = {
    name: '张三',
    hello() {
        console.log(this.name)
    }
}
console.log(Person)


function getPoint() {
    const x= 1;
    const y = 10;
    return{x,y}
}
console.log(getPoint())