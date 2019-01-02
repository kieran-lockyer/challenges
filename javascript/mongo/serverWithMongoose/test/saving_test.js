const assert = require('assert')
const Enquiry = require('../models/enquiry')

describe('Saving data to the database', function () {
    it('Should save an enquiry to the database', function (done) {
        var enquiry = new Enquiry({
            name: 'Mocha Test',
            email: 'mocha@test.com',
            phone: '0400 987 654',
            message: 'This is a mocha test.'
        })

        enquiry.save().then(() => {
            assert(enquiry.isNew === false)
            done()
        })
    })
})