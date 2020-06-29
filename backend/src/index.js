const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// import all routes
const discovery = require('./routes/discovery.router')
const mongoDB = process.env.MONGODB_URI

mongoose.connect(mongoDB, {
  useNewUrlParser : true
})

mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

// baseUrl:  http://localhost:3001/discoverys/
app.use('/discoverys', discovery)

const port = 3001

app.listen(port, () => {
  console.log('Server start on port ' + port)
})
