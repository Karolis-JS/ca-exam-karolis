const express = require('express')

const router = express.Router()

const middle = require('../middle/middle')
const controller = require('../controllers/main')

router.get('/allUsers', controller.showAllUsers)
router.post('/upload', middle.checkUser, controller.uploadUser)
router.get('/find/:id', controller.find)
router.get('/delete/:id', controller.delete)

// router.get('/minus/:id', middle.checkQuantity, controller.minusQuantity)
// router.get('/add/:id', controller.add)
// router.get('/delete/:id', controller.delete)



module.exports = router