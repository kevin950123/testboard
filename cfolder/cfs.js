const jwt = require("jsonwebtoken");
const uuidv4 = require("uuid/v4");

const payload = {
  access_key: "VHLJxxxiVxhHQAfaCDxSZ9AaToDzHMS6aPB3kBla",
  nonce: uuidv4(),
};

const jwtToken = jwt.sign(payload, "AeYWR4VkeeD40DrkaVqWtdmJcgDoHvZeMF98CvJP");
const authorizationToken = `Bearer ${jwtToken}`;


//Binance API
/*
const binance = require('node-binance-api')().options({
  APIKEY: 'SQbrHWUzkqNgi2qU9T8jEt1xk5dckqri5lAYE2TzAK6IQnmwix4HCP2wtrWVNPFM',
  APISECRET: '1sdMpKokijlnG0RPD6gvySiY7NSsV137KGf6xDUe6hWTSZY4lLp4D9iLuWECKdvp',
  useServerTime: true // If you get timestamp errors, synchronize to server time at startup
});




binance.prices((error, ticker) => {
  console.log("prices()", ticker);
  console.log("Price of BTC: ", ticker.BTCUSDT);
});
*/

//const BTCUSDTPRICE = binance.price((error, ticker) => {
//  console.log("prices()", ticker.BTCUSDT);
//});




//Binance API 여기까지



module.exports = {
  HTML:function(){
    return `<!doctype html>
    <html>

    <head>








      <title>WEB1 - </title>
      <meta charset="utf-8">









          <style media="screen">
                  div{
                    text-align: center;
                  }




    <link rel="stylesheet" type=="text/css" href="style.css?ver=1">
    table {
        width: 100%;
      }
      table, th, td {
        border: 1px solid #bcbcbc;
      }
    html {
      height: 150%;
    }
    body { margin: 0; }
    .navbar {
      background: black;
      margin: 0; padding: 0;
      list-style: none;
      position: fixed;
      width: 100%;
    }
    .navbar>li {
      display: inline-block;
    }
    .navbar>li>a {
      display: block;
      text-decoration: none;
      padding: 10px 20px;
      color: white;
    }
    .navbar>li>a:hover {
      background: gray;
    }














    </style>
</head>






    <ul class="navbar">
    <a href="/" > <img src ="https://imgur.com/download/uEtxOPp/"> </a>
      <li><a href="/">홈</a></li>
      <li><a href="/afolder">메뉴A</a></li>
      <li><a href="/bfolder">메뉴B</a></li>
      <li><a href="/cfolder">API메뉴</a></li>
    </ul>







<table>


</table>


<table>












<body>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<p>업비트 API 노드js 스크립트</p>
<img src = " https://postfiles.pstatic.net/MjAxODA5MjNfMTky/MDAxNTM3NjY5NzY1NjAw.2NTvM2OvrtfG99nEaTsNBRUaifHwoieXIelZp_cEsrIg.ZjBwlDMFiRTGEtkHLESF1Xxi8KAO1lU5R1jIOlTQar4g.PNG.nhj7/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2018-09-23_%EC%98%A4%EC%A0%84_11.29.03.png?type=w9
66" width="130" height="100" alt="Upbit">

<h1> JWT </H1>
<p> ${jwtToken} </p>



</body>
</html>
    `;


    }
};
