let express = require('express')
let goodiesRouter = require('./goodies/router')

let router = new express.Router()
router.use('/peoples', goodiesRouter)

module.exports = router