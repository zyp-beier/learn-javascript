var l = console.log

const s = new Set();
let arr = [2,3,4,5,4,2,9,8,6,1,4,]
arr.forEach(x => s.add(x))

console.log(arr,s)

// for(let i of s) {
//     console.log(i)
// }

//数组去重
const set = new Set(arr)
console.log([...new Set(arr)])
console.log(set,set.size)
//字符串去重

console.log([...new Set('abbccddee')].join('-'))


//set操作方法
let q = new Set()
//添加
q.add(1).add("a").add(NaN)
console.log(q)
//删除
console.log(q.delete(NaN))
//是否存在
console.log(q.has("a"))
//清除所有成员
q.clear()
console.log(q)
//set遍历方法
let e = new Set(['red','green','pink','blue']);

for(let item of e.keys()) {
    console.log(item)
}
/////////////////////////////////////
for(let item of e.values()) {
    console.log(item)
}
//等于
for(let item of e) {
    console.log(item)
}
////////////////////////////////////
for(let item of e.entries()) {
    console.log(item)
}
e.forEach((val,key) => {
    console.log(key + '-' + val)
})

let a = new Set([4,5,6,7])
a = new Set([...a].map(i => i*2))
console.log(a)

//filter过滤器
let y = new Set([1, 2, 3, 4, 5]);
y = new Set([...y].filter(x => (x % 2) == 0));

let haha = new Set([1,4,7])
let heihei = new Set([7,5,3])
//并集
let union = new Set([...haha,...heihei])
console.log(union)
//交集
let intersect = new Set([...haha].filter(x => heihei.has(x)))
console.log(intersect)
//差集 //////////
let difference = new Set([...haha].filter( x => !heihei.has(x)))
console.log(difference)




                                            //weakSet
const ws = new WeakSet();
const obj = {};
const foo = {};
ws.add({a:1}).add({b:2})
console.log(ws)
                                            //Map
const m = new Map();
const o = {p:'hello World'};
m.set(o,'content')
l(m.get(o))

const map = new Map([
    ['name','张三'],
    ['age',18]
])

l(map.size)
l(map.get('name'))
l(map.has('age'))

const rr = new Map();
rr.set('foo',true)
rr.set('bar',false);
l(rr.size)

const p = new Map();
p.set('edi',6)
p.set(262,'standard')
p.set(undefined,'nah')
l(p)
//遍历方法
l(p.keys())
l(p.values())
l(p.entries())
const dede = new Map([
    [1,'ONE'],
    [2,'TWO'],
    [3,'THREE']
])
l([...dede.keys()])
l([...dede.values()])
l([...dede.entries()])
l([...dede])
dede.forEach((value,key,map) => {
    l(`key:${key},value:${value}`)
})

