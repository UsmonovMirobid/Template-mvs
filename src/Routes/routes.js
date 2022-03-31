const express = require('express')
const router = express.Router()

const Controller = require('../Controllers/Controller')

router
    .get('/', Controller.info)

module.exports = router
