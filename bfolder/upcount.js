const jwt = require("jsonwebtoken");
const uuidv4 = require("uuid/v4");
const request = require('request');
const sign = require('jsonwebtoken').sign
const fs = require("fs");



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
