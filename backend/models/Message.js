const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    code: Number,
    message: String
})

const Message = mongoose.model('messages', messageSchema)

module.exports = Message