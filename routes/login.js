const express = require('express')
const {getLoginControll} = require('../controller/loginController')

const router = express.Router()

router.get('/', getLoginControll)



module.exports = router