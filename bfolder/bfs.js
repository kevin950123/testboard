var http = require('http'); // 웹구현 모듈
var fs = require('fs'); // 파일 시스템 모듈
var url = require('url'); // // 웹구현 모듈
var path = require('path');
var Url = require('url-parse');


var text = fs.readFileSync('upbitall.js', 'utf8');
console.log();

module.exports = {
  HTML:function(){
    return `<!doctype html>
    <html>
    <head>
      <title>WEB1 - </title>
      <meta charset="utf-8">

      <link rel="stylesheet" type=="text/css" href="style.css?ver=1">
    </head>
    <body>
<link rel="stylesheet" type=="text/css" href="style.css?ver=1">
    <style>
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
<br>
B폴더입니다.




</body>
</html>
    `;


    }
};
