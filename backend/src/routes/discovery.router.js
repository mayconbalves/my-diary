const express = require('express')
const router = express.Router()

const discovery = require('../controllers/discovery.controller')

router.get('/list', discovery.discovery_list)
router.post('/create', discovery.discovery_create)

module.exports = router
