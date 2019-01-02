const assert = require('assert')
const Enquiry = require('../models/enquiry')

describe('Updating Records', function () {

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

    it('Updates one record in the database', function (done) {
        Enquiry.findOneAndUpdate({
            name: 'Mocha Test'
        }, {
            name: 'Luigi'
        }).then(function () {
            Enquiry.findOne({
                _id: enquiry._id
            }).then(function (result) {
                assert(result.name === 'Luigi')
                done()
            }).catch((error) => console.error("Updates One Failed", error))
        })

    })
})