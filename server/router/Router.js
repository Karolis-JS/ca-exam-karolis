const express = require('express')

const router = express.Router()

const middle = require('../middle/middle')
const controller = require('../controllers/main')

router.get('/allUsers', controller.showAllUsers)
router.post('/upload', middle.checkUser, controller.uploadUser)
router.get('/find/:id', controller.find)
router.post('/edit', controller.edit)
router.get('/delete/:id', controller.delete)


module.exports = router