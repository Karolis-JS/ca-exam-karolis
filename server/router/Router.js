const express = require('express')

const router = express.Router()

const middle = require('../middle/middle')
const controller = require('../controllers/main')


router.post('/upload', middle.checkItem, controller.uploadItem)
router.get('/allitems', controller.showAllItems)
router.get('/minus/:id', middle.checkQuantity, controller.minusQuantity)
router.get('/add/:id', controller.add)
router.get('/delete/:id', controller.delete)



module.exports = router