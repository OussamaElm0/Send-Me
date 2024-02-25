const express = require('express')

const app = express()
const port = process.env.B_PORT || 4000
const homeRouter = require('./routes/homeRouter')
require('./config/database')

app.use('/', homeRouter)


app.listen(port, () => console.log(`Server is running on port: ${port}`))