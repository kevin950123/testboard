var http = require('http'); // 웹구현 모듈
var fs = require('fs'); // 파일 시스템 모듈
var url = require('url'); // // 웹구현 모듈
var path = require('path');





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
<h1 style="text-align:center" background: white;>  <a href="/" > <img src ="1.png"> </a> </h1>
      <li><a href="/">홈</a></li>
      <li><a href="/afolder">메뉴A</a></li>
      <li><a href="/bfolder">메뉴B</a></li>

    </ul>

<table>

</table>
<table>
<body>
<img src="_1.png"> </img>
<img src="_/1.png"> </img>
<img src="afolder/1.png"> </img>
<img src="_afolder"> </img>
<img src="_1.png"> </img>
<img src="/afolder/1.png?ver=1"></img>
<img src="./afolder/1.png?ver=1">
<img src="abc/afolder/1.png?ver=1">
<img src="c:/abc/afolder/1.png?ver=1">
<img src="C:/Users/admin/Desktop/abc/afolder/1.png?ver=1"
<img src= "imgs/1.png?ver=1">
<img src="1.png?ver=1" />
<img src="./1.png?ver=1" />
<br>
<br>
<br>
<br>
<br>
<img src ="https://www.everdevel.com/material/images/HTML/asimo.png">
</body>
</html>
    `;


    }
};
