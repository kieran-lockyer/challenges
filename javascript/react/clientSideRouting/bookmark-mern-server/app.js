// dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const {
  initializePassport,
  passportSession
} = require('./middleware/auth')

const app = express()

const dbConn = 'mongodb://localhost/bookmarks'

// parse json
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(cookieParser())


app.use(initializePassport)
app.use(passportSession)
// app.use(aclAuthorize)
app.use(cors())
app.use(session({
  secret: "these are not the droids you're looking for",
}))

// mongoose
mongoose.connect(dbConn, (err) => {
  if (err) {
    console.log('Error connecting to database', err)
  } else {
    console.log('Connected to database!')
  }
})

// Use defined routes
app.use('/auth', require('./routes/auth'))
app.use('/admin', require('./routes/admin'))
app.use('/bookmarks', require('./routes/bookmarks'))

app.get('/', (req, res) => {
  res.status(200).send('Bookmark server')
})

app.listen(process.env.PORT || 3001, () => console.log('Listening on http://localhost:3000'))