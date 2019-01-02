const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Enquiry = require('./models/enquiry')

mongoose.connect('mongodb://localhost/portfolio')

mongoose.connection.once('open', () => {
  console.log('Successfully connected')
}).on('error', error => {
  console.error('Error connecting.', error)
})

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

app.get('/contact', (req, res) => {
  res.sendFile('./views/contact.html', {
    root: __dirname + '/'
  })
})

app.post('/contact', (req, res) => {
  console.log(req.body)
  const enquiry = new Enquiry({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  })

  enquiry.save().then(() => {
    res.send(`Thank you for your message. 
I will get back to you soon!`)
  }).catch((err) => {
    res.send(`Something went wrong: ${err}`)
  })
})

app.get('/enquiries', (req, res) => {
  Enquiry.find().then(contacts => {
    res.render('enquiries.ejs', {
      contacts: contacts
    })
  }).catch((err) => {
    res.send(`Something went wrong: ${err}`)
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))