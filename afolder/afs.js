var http = require('http'); // 웹구현 모듈
var fs = require('fs'); // 파일 시스템 모듈
var url = require('url'); // // 웹구현 모듈
var path = require('path');
var Url = require('url-parse');

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
<img src = " https://postfiles.pstatic.net/MjAxODA5MjNfMTky/MDAxNTM3NjY5NzY1NjAw.2NTvM2OvrtfG99nEaTsNBRUaifHwoieXIelZp_cEsrIg.ZjBwlDMFiRTGEtkHLESF1Xxi8KAO1lU5R1jIOlTQar4g.PNG.nhj7/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2018-09-23_%EC%98%A4%EC%A0%84_11.29.03.png?type=w9
66" width="130" height="100" alt="Upbit">
UPBIT API 넣어보기.

</body>
</html>
    `;


    }
};
