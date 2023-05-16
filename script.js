var btc = document.getElementById("bitcoin");
var bnb = document.getElementById("binancecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var sol = document.getElementById("solana");
var usdt = document.getElementById("tether");
var ada = document.getElementById("cardano");
var ltc = document.getElementById("litecoin");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cbinancecoin%2Cethereum%2Ccardano%2Csolana%2Ctether%2Cdogecoin%2Clitecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response) {
    btc.innerHTML = response.bitcoin.usd;
    bnb.innerHTML = response.binancecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    sol.innerHTML = response.solana.usd;
    usdt.innerHTML = response.tether.usd;
    ada.innerHTML = response.cardano.usd;
    ltc.innerHTML = response.litecoin.usd;

});