var express = require('express')
var mongoose = require('mongoose')
var app = express()

app.set('port', (process.env.PORT || 5000))

if (!process.env.MONGODB_URI) {
  var mongoUri = 'mongodb://heroku_c2dfqxlh:70jqvl63n9ehp5b55pjcqhq166@ds011902.mlab.com:11902/heroku_c2dfqxlh'
} else {
  var mongoUri = process.env.MONGODB_URI
}

mongoose.connect(mongoUri)

var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', dbCallback)

function dbCallback() {
  console.log('db callback called')
}

var testSchema = mongoose.Schema({
  first: String,
  last: String,
  age: Number
})

var Test = mongoose.model('test', testSchema)

app.use(express.static(__dirname + "/app"))
app.get('/api', apiGetHandler)

function apiGetHandler(req, res) {
  Test.find({}).exec(findCallback)
  function findCallback(err, data) {
    if (err) {
      res.send("Crap!")
    } else {
      res.status(200).json(data)
    }
  }
}

app.listen(app.get('port'), function() {
  console.log(`listening on port ${app.get('port')}`)
})
