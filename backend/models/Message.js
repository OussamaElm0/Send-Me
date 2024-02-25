const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    code: { 
        type: Number, 
        unique: true 
    },
    message: String
})

const Message = mongoose.model('messages', messageSchema)

module.exports = Message