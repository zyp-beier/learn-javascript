let s = Symbol();
console.log(typeof s)

let s1 = Symbol('foo')
let s2 = Symbol(5)
console.log(s1,s2)


const sym = Symbol('aa')
console.log(sym.description)


let mySymbol = Symbol();
let mySymbol2 = Symbol();
let c = {
    [mySymbol]:'hello',
    [mySymbol2]: 'world',
    mySymbol:'haha'
}


console.log(c.mySymbol,c[mySymbol])
//haha,hello

const mySymbol3 = Symbol();
const a = {};

a.mySymbol3 = 'Hello!';
console.log(a[mySymbol3]) // undefined
console.log(a['mySymbol3']) // "Hell


const log= {};
log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info')
}

console.log(log.levels.DEBUG.description)

function getArea(shape,options) {
    let area = 0;
    switch(shape) {
        case 'Triangle':
            area = .5 * options.width * options.height
        break
        }
        return area;
}


console.log(getArea('Triangle',{width:100,height:100}))


const obj = {};
let y = Symbol('a');
let u = Symbol('b');

obj[y] = 'hello';
obj[u] = 'world';

const ttt = Object.getOwnPropertySymbols(obj)
console.log(ttt)