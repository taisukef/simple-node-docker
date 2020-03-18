const http = require('http')
const fs = require('fs')
const url = require('url')
const simplewebserver = require('./simplewebserver.js')

let data = []
const PATH_DATA = 'data/data.json'
function save() {
  fs.writeFileSync(PATH_DATA, JSON.stringify(data))
}
function load() {
  data = JSON.parse(fs.readFileSync(PATH_DATA))
}
load()

function serveAPI(fn, query) {
  switch (fn.substr(fn.lastIndexOf('/') + 1)) {
    case 'add':
      data.push(query)
      save()
      return data

    case 'list':
      return data

    case 'get':
      return data[query.idx]

    case 'clear':
      data = []
      save()
      return data

    case 'remove':
      data.splice(query.idx, 1)
      save()
      return data

    default:
      return { res: "OK" }
  }
}

const server = http.createServer()
server.on('request', function(req, res) {
  console.log(req.url)
  if (req.url.startsWith('/api/')) {
    const urlp = url.parse(req.url, true)
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
    const resjson = serveAPI(urlp.pathname, urlp.query)
    res.write(JSON.stringify(resjson))
  } else {
    simplewebserver.serve(res, req.url)
  }
  res.end()
})
server.listen(8001)
