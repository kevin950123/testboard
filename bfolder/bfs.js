const jwt = require("jsonwebtoken");
const uuidv4 = require("uuid/v4");
const request = require('request');
const sign = require('jsonwebtoken').sign
const fs = require("fs");
const http = require('http'); // 웹구현 모듈 // 파일 시스템 모듈
const url = require('url'); // // 웹구현 모듈
const qs = require('querystring');
const path = require('path');


const payload = {
access_key: "VHLJxxxiVxhHQAfaCDxSZ9AaToDzHMS6aPB3kBla",
nonce: uuidv4(),
};

const jwtToken = jwt.sign(payload, "AeYWR4VkeeD40DrkaVqWtdmJcgDoHvZeMF98CvJP");
//const authorizationToken = `Bearer ${jwtToken}`;



  const access_key = process.env.UPBIT_OPEN_API_ACCESS_KEY;
  const secret_key = process.env.UPBIT_OPEN_API_SECRET_KEY;
  const server_url = process.env.UPBIT_OPEN_API_SERVER_URL;

  const token = sign(payload, "AeYWR4VkeeD40DrkaVqWtdmJcgDoHvZeMF98CvJP")


  const options = {
      method: "GET",
      url: "https://api.upbit.com/v1/accounts",
      headers: {Authorization: `Bearer ${token}`},
  }


  request(options, (error, response, body) => {
    if (error) throw new Error(error)
    console.log(body)
})



    module.exports = {
      HTML:function(hello){
        return `

        <!doctype html>
        <html>
        <head>
          <title>WEB1 - </title>
<meta charset="utf-8">

<script src = "/bfolder/upcount.js"></script>
</head>

<body>
<input type ="button" value="btn" id="btn />
<script type="text/javascript">
<p><br>

리퀘스트 바디 :
${request.body};

<br>
리퀘스트 옵션스
${request.options};

<br>
리퀘스트 리스폰스
${request.response};

<br>
리퀘스트
${request};

</p>




</body>
</html>


           `;
      }
    }


/*
  request(options, (error, response, body) => {
      if (error) throw new Error(error)
      console.log(body)
  })
*/


/*
  const jwt = require("jsonwebtoken");
  const uuidv4 = require("uuid/v4");
  const crypto = require('crypto');
  const querystring = require("querystring");

  const query = querystring.queryEncode({파라미터});

  const hash = crypto.createHash('sha512');
  const queryHash = hash.update(query, 'utf-8').digest('hex');

  const payload = {
    access_key: "VHLJxxxiVxhHQAfaCDxSZ9AaToDzHMS6aPB3kBla",
    nonce: uuidv4(),
    query_hash: queryHash,
    query_hash_alg: 'SHA512',
  };

  const jwtToken = jwt.sign(payload, "AeYWR4VkeeD40DrkaVqWtdmJcgDoHvZeMF98CvJP");
  const authorizationToken = `Bearer ${jwtToken}`;
  */
