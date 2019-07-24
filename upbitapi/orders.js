const request = require('request')
const uuidv4 = require("uuid/v4")
const crypto = require('crypto')
const sign = require('jsonwebtoken').sign
const queryEncode = require("querystring").encode

const access_key = process.env.UPBIT_OPEN_API_ACCESS_KEY
const secret_key = process.env.UPBIT_OPEN_API_SECRET_KEY
const server_url = process.env.UPBIT_OPEN_API_SERVER_URL

const state = 'done'
const uuids = [
    '9ca023a5-851b-4fec-9f0a-48cd83c2eaae',
    //...
]

const non_array_body = {
    state: state,
}
const array_body = {
    uuids: uuids,
}
const body = {
    ...non_array_body,
    ...array_body
}

const uuid_query = uuids.map(uuid => `uuids[]=${uuid}`).join('&')
const query = queryEncode(non_array_body) + '&' + uuid_query

const hash = crypto.createHash('sha512')
const queryHash = hash.update(query, 'utf-8').digest('hex')

const payload = {
    access_key: "VHLJxxxiVxhHQAfaCDxSZ9AaToDzHMS6aPB3kBla",
    nonce: uuidv4(),
    query_hash: queryHash,
    query_hash_alg: 'SHA512',
}

const token = sign(payload, "AeYWR4VkeeD40DrkaVqWtdmJcgDoHvZeMF98CvJP")

const options = {
    method: "GET",
    url: "https://api.upbit.com/v1/orders?" + query,
    headers: {Authorization: `Bearer ${token}`},
    json: body
}
request(options, (error, response, body) => {
  console.log(body)
});
