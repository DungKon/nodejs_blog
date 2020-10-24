const express = require('express')
const router = express.Router()
const NewsController = require('../app/controllers/SiteController')

router.use('/search', NewsController.search)
router.use('/', NewsController.index)

module.exports = router