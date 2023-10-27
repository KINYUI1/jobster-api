const express = require('express')
const Authentication = require('../middleware/authentication')
const router = express.Router()
const { register, login, updateuser } = require('../controllers/auth')
router.post('/register', register)
router.post('/login', login)
router.patch('/updateUser', Authentication,updateuser)

module.exports = router
