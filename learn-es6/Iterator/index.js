
var log = "console.log"
var it = makeIterator(['a','b']);


console.log(it.next())
console.log(it.next())
console.log(it.next())



function makeIterator(array) {
    var nextIndex = 0;
    return {
        next:function() {
            return  nextIndex < array.length ? 
                {value:array[nextIndex++],done:false} : 
                {value:undefined,done:true};
    } 
}
}

let arr =['a','b','c'];
let iter = arr[Symbol.iterator]();
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())



class RangeTterator {
    constructor(start,stop) {
        this.value = start;
        this.stop = stop;
    }
    [Symbol.iterator](){ return this}

    next() {
        var value = this.value;
        if(value <this.stop) {
            this.value++;
            return {done:false,value: value};
        }
        return {done:true,value:undefined}
    }
}
function range(start,stop) {
    return new RangeTterator(start,stop);
}
for(var value of range(0,3)){
    console.log(value)
}



//遍历对象

let someObject = {
    name:'zhao',
    age:21
}
for (var key of Object.keys(someObject)) {
    console.log(key + ':' + someObject[key])
}