const assert = require('assert')
const Enquiry = require('../models/enquiry')

describe('Finding Records', function () {

    var enquiry
    beforeEach(function (done) {
        enquiry = new Enquiry({
            name: 'Mocha Test',
            email: 'mocha@test.com',
            phone: '0400 987 654',
            message: 'This is a mocha test.'
        })

        enquiry.save().then(() => {
            done()
        })
    })

    it('Finds one record from the database', function (done) {
        Enquiry.findOne({
            name: 'Mocha Test'
        }).then(function (result) {
            assert(result.name === 'Mocha Test')
        })
        done()
    })

    it('Finds one record by ID from the database', function (done) {
        Enquiry.findOne({
            _id: enquiry._id
        }).then(function (result) {
            assert(result._id.toString() === enquiry._id.toString())
        })
        done()
    })
})