const express = require('express');
const router = express.Router();
const infoController = require('../controllers/infoController');

// Routes
router.get('/', infoController.viewall);
//router.post('/', dietController.find);
  
module.exports = router;