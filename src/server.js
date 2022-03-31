const express = require('express')
const app = express()
const ejs = require('ejs')
const router = require('./Routes/routes')
const PORT = 9000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))
app.use(router)


app.listen(PORT, console.log(PORT))