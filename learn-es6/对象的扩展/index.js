const target = {a: 1};
const sourse1 = {b:2};
const sourse2 = {c: 3};

Object.assign(sourse1,target,sourse2)
console.log(sourse1)
// {
//     b:2,
//     a:1,
//     c:3
// }

// const sourse3 = {aa:11,bb:22}
// const sourse4 = {cc:33,dd:44};
// const sourse5 = {ee:55,ff:66};
// console.log(Object.assign(sourse5,sourse3,sourse4))
//
//
// console.log(Object.assign(5))s
//
// const merge = (...sources) => Object.assign({}, ...sources);
//
//
// const DEFAULTS = {
//     logLevel: 0,
//     outputFormat: 'html'
//   };
//
//   function processContent(options) {
//     options = Object.assign({}, DEFAULTS, options);
//     console.log(options);
//   }
//
//   processContent({a:1})
// 嫌弃
