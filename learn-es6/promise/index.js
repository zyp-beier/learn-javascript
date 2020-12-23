/*var log = 'console.log'


let promise = new Promise((resolve,reject) => {
    resolve('147258')
})


console.log('jajaj')
promise.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
console.log(1111111)


const p1 = new Promise((resolve,reject) => {
     setTimeout(() => {
            reject('error,error')
        },4000)
})

const p2 = new Promise((resolve,reject) => {
     setTimeout(()=>{
        resolve(p1)
    },1000)
})

p2.then(res => {
    console.log(res)
}).catch(err => {
    console.log('catch',err)
})*/

////////////////////////////////////
////爱情诚可贵，梦想价更高，若为生命故，两者皆可抛
//感觉很心寒呀
// 2020-07-03 原来我浪费了这么多的时间

var getNumbers = () => {
    return Promise.resolve([1,2,3,5,4])
};

var multi = num => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            if(num){
                res(num * num)
            }else{
                rej('num is undefined')
            }
        },1000)
    })
};
// getNumbers().then(res => {
//     return res
// }).then(res => {
//     multi(res).then(res => {
//         console.log(res)
//     });
// })
async function test () {
    var nums = await getNumbers()
    nums.forEach(async x => {
        var res = await multi(x)
        console.log(res)
    })
}

test()
