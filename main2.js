const express = require("express");
const bodyParser = require("body-parser");

const server = express();


const users = (bodyParser.json());

const users = [
  {
    id: "aosefofe",
    name: "awosef",
    email: "awoefk@naver.com"
  },
  {
    id: "awpokge",
    name: "awplef",
    email: "awroejh@naver.com"
  }
];


server.get("/api/user", (req, res) => {
  res.json(users);
});

server.post('/api/user", (req,res)=>{
  console.log(req.body);
  res.json(users);
});

server.listen(3000, () => {
  console.log("서버시작");
});
