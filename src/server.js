const express = require('express')
const app = express()
const ejs = require('ejs')
const router = require('./Routes/routes')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))
app.use(router)

const PORT = 9000

app.listen(PORT, console.log(PORT))