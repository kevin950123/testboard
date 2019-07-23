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
const authorizationToken = `Bearer ${jwtToken}`;
const access_key = process.env.UPBIT_OPEN_API_ACCESS_KEY;
const secret_key = process.env.UPBIT_OPEN_API_SECRET_KEY;
const server_url = process.env.UPBIT_OPEN_API_SERVER_URL;
const token = sign(payload, "AeYWR4VkeeD40DrkaVqWtdmJcgDoHvZeMF98CvJP")
const options = {
    method: "GET",
    url: "https://api.upbit.com/v1/accounts",
    headers: {Authorization: `Bearer ${token}`},
}

//url: server_url + "/v1/accounts",


/*
let upbitall = request(options, (error, response, body) => {
    if (error) throw new Error(error)
    console.log(body)
})
const upbitallq = request(options, (error, response, body) => {
    if (error) throw new Error(error)
    console.log(body)
})

request(options, (error, response, body) => {
    if (error) throw new Error(error)
    console.log(body)
})
*/


    module.exports = {
      HTML:function(request, body){
        return `
        <!doctype html>
        <html>
        <meta charset="utf-8">
        <head>
        <meta charset="utf-8">
          <title>WEB1 - API부르기</title>


<script>

          request(options, (error, response, body) => {
            if (error) throw new Error(error)
            console.log(body);
        })

</script>

<script src = "upbitapi/unit.js">
</script>

</head>

<body>

<p><br>





<br>
<br>
<br>
<br>
<br>
<br>
<br>


나온값 :






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
