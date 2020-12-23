function log(x,y= 'word') {
    console.log(x,y)
}

log('hello','')

function foo({x,y=4}) {
    console.log(x,y)
}
foo({})
foo({x:6})
function aa ({x,y=5} = {}) {
    console.log(x,y)
}
aa()
// function fetch(url, { body = '', method = 'GET', headers = {} }) {
//     console.log(method);
//   }
  
//   fetch('http://example.com', {})
//   // "GET"
  
//   fetch('http://example.com')
  //报错


  console.log((function (b,c,a = 5) {}).length)

  function push(array,...items) {
      items.forEach((item) => {
          array.push(item)
      })
  }
  let a = [];
  push(a,1,2,3)
  console.log(a)



  var f = function() {}
  console.log(f.name)

  function Timer() {
      this.ff = 0;
      this.b = 0;
      setInterval(function() {
            this.ff++
      },1000)
      setInterval(()=> this.b++,1000)
  }
  var timer = new Timer();

//   setTimeout(() => console.log('ff',timer.ff),3000)
//   setTimeout(() => console.log('b',timer.b),3000)


  var handler = {
    id: '123456',
  
    init: function() {
        () => this.id
    //   document.addEventListener('click',
    //     event => this.doSomething(event.type), false);
        
    },
  
    doSomething: function(type) {
      console.log('Handling ' + type  + ' for ' + this.id);
    }
  };

  handler.init()
  handler.doSomething(1)
  function wei(param1,param2,) {
    return param1 + param2
  }
 console.log( wei(10,20))


//toString() 返回函数本身（包括注释和空格）
 function comment() {
    //  return jkl
    return 456
 }
console.log( comment.toString())