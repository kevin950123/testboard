var http = require('http');
var fs = require('fs');
var express = ('express');



module.exports = {
  HTML:function(title, list, control, body){
    return `<!doctype html>
    <html>
    <head>
      <title>WEB1 - </title>
      <meta charset="utf-8">
      <link rel="stylesheet" type=="text/css" href="style.css?ver=1">
    </head>
    <body>
    <style>
    table {
        width: 100%;
      }
      table, th, td {
        border: 100px solid #bcbcbc;
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
<a href="/" ><img src= "https://imgur.com/download/uEtxOPp/"></a>
      <li><a href="/">홈</a></li>
      <li><a href="/afolder">구글검색</a></li>
      <li><a href="/bfolder">메뉴B</a></li>
      <li><a href="/cfolder">API메뉴</a></li>
    </ul>

</style>



      ${body}


<h1 style="text-align:center"><br><br><br><br>게시판 </h1>

<p><ul> ___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</p>
<p style="background-color:#00FEFE">　번호　　　　　　제목<span class = "child">시간</span></p>

      ${list}</ul>





</table>

<body>

<div class="container">
  <div class="row">
    <div class="col">
      <ul class="pagination">
      <style="text-align:center">
        <span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><span class="page-item"><a class="page-link" href="/">맨 처음</a></span>
        <span class="page-item"><a class="page-link" href="/">1</a></span>
        <span class="page-item"><a class="page-link" href="/">Next</a></span>
        </style>
      </ul>
    </div>
  </div>
</div>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>


<ul><p><select name="job">
    <option value="">제목+내용</option>
    <option value="">글쓴이</option></select>　<input type="text" width=200 id="myName">　<input type="button" value="전송하기" onclick="sayHello()">

<script language ="javascript">

function sayHello()
{
 var textBox = document.getElementById("myName");
 if (textBox != null)
  {
  alert(textBox.value + " ");
  }

}

</script>


</script></ul></p>



      ${control}











    </html>
    `;
  },list:function(topics){
    var list = ''; // <ul> 여기가 문제임 게시글목록 꾸미는곳임..
    var i = 0;
    while(i < topics.length){ //



      list = list + `
        <style>


        </style>
      <p style="font-size:17px;">No.${topics[i].id}　　　<a href="/?id=${topics[i].id}">${topics[i].title}</a> <p style="text-align:right;"> ${topics[i].created}</p>
      <p>――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――</p>
















  </body>

      `


      ;
      i = i + 1;
    }
    list = list+ '</ul>';
    return list;


  },authorSelect:function(authors, author_id){
    var tag = '';
    var i = 0;
    while(i < authors.length){
      var selected = '';
      if(authors[i].id === author_id) {
        selected = ' selected';
      }
      tag += `<option value="${authors[i].id}"${selected}>${authors[i].name}</option>`;
      i++;
    }
    return `
      <select name="author">
     ${tag}
      </select>
    `;
  }
}
