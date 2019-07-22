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
    <a href="/" > <img src ="http://blogattach.naver.net/a83db40514232294bc593c0c32d7aed47128d7e3/20190722_70_blogfile/sosoie_1563763852799_nyssx3_jpg/145064.jpg"> </a>
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

</body>
</html>
    `;


    }
};
