let [a,b,c] = [1,2,3]
console.log(c)

let [e,[f,g],t] = [4,[5],6]
console.log(f)

let [x=1,y=x] = [2]
console.log(x,y) 

const {log} =console;
log(789)


let {foo:baz} = {foo: 'aaa',bar: 'bbb'}
console.log(baz)


const node = {loc:{start:{line:4,column:5}}}




