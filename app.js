var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))

app.get('/', getHandler)

function getHandler(req, res) {
  res.send('Hello World')
}

app.listen(app.get('port'), function() {
  console.log(`listening on port ${app.get('port')}`)
})
