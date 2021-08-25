let a = 0
let b = a
async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => {
    a += 1
    console.log(a, '第一个');
    resolve(a)
  }, 1000))
  const p2 = new Promise((resolve,reject) => setTimeout(() => {
    a += 2
    resolve(a)
  }, 2000))
  const p3 = new Promise((resolve,reject) => setTimeout(() => {
    a -= 1
    console.log(a, '第三个');
    resolve(a)
  }, 1000))
 Promise.all([p1,p2,p3]).then(resolve => {
   console.log('resolve', resolve);
 }).catch(reject => {
   console.log('error', reject);
   a = b
 })
}

foo().then(() => {
  console.log('a result', a);
})