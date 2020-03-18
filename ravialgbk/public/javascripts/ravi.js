export const root = (tap,url)=>{
//let instruments lists
let instruments = document.querySelector(".instruments")
setInterval(async function () {
  let info = instruments.children[0].children;
  let result = [];
  for (let elm of info) {
    console.log(elm)
    console.log(elm.querySelector(".ohlc"));
    tiker = elm.querySelector(".nice-name").innerText;
    sentiment = !elm.querySelector(".change-indicator").classList.contains("icon-chevron-down")
    latestPrice = elm.querySelector(".last-price").innerText
    changePercent = elm.querySelector(".change-percent").innerText
    let marketDom = elm.querySelector(".ohlc");
    console.log("****");
    console.log(marketDom);
    marketStatus = marketDom ? elm.querySelector(".ohlc").outerText.split(/\n/) : []
    result.push({ tiker, sentiment, changePercent, latestPrice, marketStatus })
  }
  let data = await fetch(url, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json"
    },
    body: {tap,result : JSON.stringify(result)}
  });
  console.log(data);

}, 1000);
}
