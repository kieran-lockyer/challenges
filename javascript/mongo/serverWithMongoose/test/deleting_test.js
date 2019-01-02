const assert = require('assert')
const Enquiry = require('../models/enquiry')

describe('Deleting Records', function () {

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

    it('Deletes one record from the database', function (done) {
        Enquiry.findOneAndDelete({
            name: 'Mocha Test'
        }).then(function () {
            Enquiry.findOne({
                name: 'Mocha Test'
            }).then(function (result) {
                assert(result === null)
            })
        })
        done()
    })
})