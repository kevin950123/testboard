const jwt = require("jsonwebtoken");
const uuidv4 = require("uuid/v4");

const payload = {
  access_key: "VHLJxxxiVxhHQAfaCDxSZ9AaToDzHMS6aPB3kBla",
  nonce: uuidv4(),
};

const jwtToken = jwt.sign(payload, "AeYWR4VkeeD40DrkaVqWtdmJcgDoHvZeMF98CvJP");
const authorizationToken = `Bearer ${jwtToken}`;




  module.exports = {
    HTML:function(hello){
      return `${jwtToKen}`
    }
  }
