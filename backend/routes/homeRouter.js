const express = require('express')
const Message = require('../models/Message')

const router = express.Router()

router.get('/:code',async (req, res) => {
    const code = parseInt(req.params.code)
    const message = await Message.findOne({code: code})
    res.status(200).json(message)
})

router.post('/create', async (req, res) => {
    res.send(req.body)
    // try {
    //     await Message.create(req.body)
    //     res.json({
    //         success: "Message created successfully."
    //     })
    // } catch (e) {
    //     res.json({
    //         error: e.message
    //     })
    // }
})

module.exports = router