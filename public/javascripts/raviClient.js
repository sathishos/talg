//let instruments lists
let instruments = document.querySelector(".instruments")
console.log(instruments);
setInterval(async function () {
  let info =instruments.children[0].children;
  let result = [];
  for(let elm of info){
  // console.log(elm)
  console.log(elm.querySelector(".last-price"))
   tiker = elm.querySelector(".nice-name").innerText;
   sentiment = !elm.querySelector(".change-indicator").classList.contains("icon-chevron-down")
   latestPrice = elm.querySelector(".last-price").innerText
   changePercent = elm.querySelector(".change-percent").innerText
   result.push({tiker,sentiment,changePercent,latestPrice})
  }
       
  let data = await fetch("http://localhost:3000/watchInstruments", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(result)
      });
      console.log(data);
  // instruments.forEach(function(elm) {
  //   let { x, y } = elm.getBoundingClientRect();
  //   // if ((x, y)) {
  //     console.log(x,y);
  //     fetch("http://localhost:3000/watchInstruments", {
  //       method: "POST", // or 'PUT'
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({x,y})
  //     });
  //   // }
  // });
}, 1000);
