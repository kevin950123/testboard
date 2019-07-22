var http = require('http'); // 웹구현 모듈
var fs = require('fs'); // 파일 시스템 모듈
var url = require('url'); // // 웹구현 모듈
var qs = require('querystring'); // 쿼리 모듈
var template = require('./lib/template.js'); // index.html 대체
var afolder = require('./afolder/afs.js'); // 네비게이션바 2번째 메뉴
var bfolder = require('./bfolder/bfs.js'); // 네비게이션바 3번째 메뉴
var path = require('path'); // 경로 모듈
var sanitizeHtml = require('sanitize-html'); // HTML 잘못된 구문 정리
var mysql = require('mysql');
var server = http.createServer();



/////////////////////////////////////////////////////////////////
var db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'opentutorials'
});
db.connect();
/////////////////////쿼리DB 커넥트///////////////////////////

//여기부터


//여기까지 마음대로 수정가능

//////////////////////////////////////////////////////////////////////
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
        var title = `웹제목타이틀`;
        db.query(`SELECT * FROM topic`, function(error,topics){
          var description = '';
          var list = template.list(topics);
          var html = template.HTML(title, list,
                        `<a href="/create", style="text-align:right;" ><ul>게시글 작성하기</a>`,
            `<p></p>${description}`

          );
          response.writeHead(200);
          response.end(html);
        });
      } else {
        db.query(`SELECT * FROM topic`, function(error,topics){
         if(error){
           throw error;
         }
         db.query(`SELECT * FROM topic LEFT JOIN author ON topic.author_id=author.id WHERE topic.id=?`,[queryData.id], function(error2, topic){
           if(error2){
             throw error2;
           }
           console.log(topic);
          var title = topic[0].title;
          var description = topic[0].description;
          var list = template.list(topics);
          var html = template.HTML(title, list,
            `

            <html>
            <style>
            table {
              width: 100%;
            }
            table, th, td{
              border: 1px solid #bcbcbc;
            }
            </style>
<body>
<ul><h3> 게시글 </h3>
<table>
<caption><td>  <h4>제목 : ${title}</h4></td>  </catption>
<thead>
</table>
</thead>
<div>
</div>
</body>
<table>
<thead>

            <td><p>내용 : ${description} </p></td>
            </table>
            </thead>
            <a href="/create"><br>게시글 작성하기</a>
                <a href="/update?id=${queryData.id}">수정하기</a>
                <form action="delete_process" method="post">
                  <input type="hidden" name="id" value="${queryData.id}">
                  <input type="submit" value="삭제하기">
                </form>
</html>
            `,
            `
                `
          );
          response.writeHead(200);
          response.end(html);
        });
      });
      }
    } else if(pathname === '/create'){
      db.query(`SELECT * FROM topic`, function(error,topics){
        var title = 'Create';
        db.query('SELECT * FROM author', function(error2, authors){
          var title = 'Create';
          var list = template.list(topics);
          var html = template.HTML(title, list,
            `
            <form action="/create_process" method="post">
            <h2><ul>게시글 작성하기</h2><p><ul><input type="text" style="width:600px; height:21px;" name="title" placeholder="제목"></p>
            <p>
              <textarea name="description" style="width:600px; height:210px;" placeholder="내용"></textarea>

              </p>
              <p>
              <input type="submit">
              </p>

            </form>
            `,
            ``
          );
          response.writeHead(200);
          response.end(html);
        });
      });

      //여기부터
    } else if(pathname === '/bfolder'){
      var html = bfolder.HTML(`
        `);
        response.end(html);


    } else if(pathname === '/afolder'){

var html = afolder.HTML(`
  `);
  response.end(html);




//위에건 웹주소이름,아래건 웹주소이름+엑세스

} else if(pathname === '/afolder_process'){






      //여기까지

    } else if(pathname === '/create_process'){
      var body = '';
      request.on('data', function(data){
          body = body + data; //body + data
      });
      request.on('end', function(){
          var post = qs.parse(body);
          db.query(`
            INSERT INTO topic (title, description, created, author_id)
              VALUES(?, ?, NOW(), ?)`,
            [post.title, post.description, post.author],
            function(error, result){
              if(error){
                throw error;
              }
              response.writeHead(302, {Location: `/?id=${result.insertId}`});
              response.end();
            }
          );
      });
    } else if(pathname === '/update'){
      db.query('SELECT * FROM topic', function(error, topics){
        if(error){
          throw error;
        }
        db.query(`SELECT * FROM topic WHERE id=?`,[queryData.id], function(error2, topic){
          if(error2){
            throw error2;
          }
          db.query('SELECT * FROM author', function(error2, authors){
            var list = template.list(topics);
            var html = template.HTML(topic[0].title, list,
              `
              <form action="/update_process" method="post">
                <input type="hidden" name="id" value="${topic[0].id}">
              <h3><ul>글수정 하기 <h3>
              <p><input type="text" name="title" style="width:600px; height:21px;" placeholder="제목" value="${topic[0].title}"></p>
                <p>
                  <textarea name="description" style="width:600px; height:210px;" placeholder="내용">${topic[0].description}</textarea>
                </p>
                <p>
                </p>
                <p>
                  <input type="submit">
                </p>
              </form>
              `,
              `<a href="/create">게시글 작성하기</a> <a href="/update?id=${topic[0].id}">수정하기</a>
              `
            );
            response.writeHead(200);
            response.end(html);
          });

        });
      });
    } else if(pathname === '/update_process'){
      var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          db.query('UPDATE topic SET title=?, description=?, author_id=? WHERE id=?', [post.title, post.description, post.author, post.id], function(error, result){
            response.writeHead(302, {Location: `/?id=${post.id}`});
            response.end();
          });
      });
    } else if(pathname === '/delete_process'){
      var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          db.query('DELETE FROM topic WHERE id = ?', [post.id], function(error, result){
            if(error){
              throw error;
            }
            response.writeHead(302, {Location: `/`});
            response.end();
          });
      });
    } else {
      response.writeHead(404);
      response.end('not foundss');
    }
});
//////////////////////////////////////////////////////////////////////
app.listen(3000, function(){
  console.log('서버온라인');
});
//////////////////서버포트연결////////////////////////////////////////
