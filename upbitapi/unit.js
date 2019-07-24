var request = require("request");

var options = { method: 'GET',
  url:
   'https://api.upbit.com/v1/candles/minutes/1',
  qs: { market: 'KRW-BTC' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
