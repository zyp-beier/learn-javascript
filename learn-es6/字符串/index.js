//模板字符串
function fn() {
    return "hello,word"
}

//  `foo ${fn()} bar`

console.log( `foo ${fn()} bar`)
//标签模板
alert`789`



console.log( `hello ${1+3} word ${2*5}`)

let nn = 'nana'.repeat(4)
console.log(nn)
//字符串的实例方法
let str = "这是一个字符串"

console.log(str.includes('符'))
console.log(str.startsWith('这'))
console.log(str.endsWith('串'))


console.log(str.repeat(3))
console.log(str.padStart(15,'ab'))
console.log(str.padEnd(15,"abnb"))
let stra = ` kongge `
console.log(stra.trim())
console.log(stra.trimStart())
console.log(stra.trimEnd())