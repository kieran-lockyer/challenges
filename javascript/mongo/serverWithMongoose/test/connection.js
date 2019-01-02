const mongoose = require('mongoose')

// Connect to the database before tests run
before(function (done) {
    // Connect to MongoDB
    mongoose.connect("mongodb://localhost/portfolio", {
        useNewUrlParser: true
    })

    mongoose.connection.once('open', function () {
        console.log('Connection has been made, now make fireworks...')
        done()
    }).on('error', function (error) {
        console.error('Connection Error:', error)
    })
})

// Drop the characters collection before each test
beforeEach(function (done) {
    // Drop the collection
    mongoose.connection.collections.enquiries.drop(function () {
        done()
    })
})