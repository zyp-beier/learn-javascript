// async function getStockPriceByName(name) {
//     const symbol = await getStockSymbol(name);
//     const stockPrice = await getStockPrice(symbol);
//     return stockPrice;
//   }

//   getStockPriceByName('goog').then(function (result) {
//     console.log(result);
//   });


/*
  function timeout (ms) {
      return new Promise((resolve) => {
          setTimeout(resolve,ms)
      })
  }


  async function bb(value,ms) {
      await timeout(ms);
      console.log(value)
  }

  bb('heiheihei',2000)

/////////////////////////////////////////

  function sleep(interval) {
      return new Promise(resolve => {
          setTimeout(resolve,interval)
      })
  }

  async function one() {
      for(let i=1;i<=5; i++) {
          console.log(i);
          await sleep(1000)
      }
  }

  one()


  async function f() {
      await Promise.reject('danger,danger,danger')
  }

  f().then(v=> console.log(v)).catch(e => console.log(e))

*/



