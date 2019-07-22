import request from 'request'
const my_coin = "ALL";

request({
  method:'GET',
  uri:'https://api.bithumb.com/public/ticker'+my_coin
},(err, res, result)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(result);
})
