//let instruments lists
let instruments = document.querySelector(".instruments")
setInterval(async function () {
    let info = instruments.children[0].children;
    let result = [];
    for (let elm of info) {
        tiker = elm.querySelector(".nice-name").innerText;
        sentiment = !elm.querySelector(".change-indicator").classList.contains("icon-chevron-down")
        latestPrice = elm.querySelector(".last-price").innerText
        changePercent = elm.querySelector(".change-percent").innerText
        let marketDom = elm.querySelector(".ohlc");
        marketStatus = marketDom ? elm.querySelector(".ohlc").outerText.split(/\n/) : []
        result.push({ tiker, sentiment, changePercent, latestPrice, marketStatus })
    }
    let data = await fetch("http://localhost:3000/watchTapTwo", {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ tap : 2,result })
    });
    console.log(data)
}, 1000);
