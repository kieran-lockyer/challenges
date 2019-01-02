const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EnquirySchema = new Schema({
    name: String,
    email: String,
    phone: String,
    message: String
})

const Enquiry = mongoose.model('Enquiry', EnquirySchema)

module.exports = Enquiry