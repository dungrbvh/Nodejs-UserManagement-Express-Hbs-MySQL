const express = require('express');
const router = express.Router();
const personalController = require('../controllers/personalController');

// Routes
router.get('/:id', personalController.viewall);
//router.post('/', dietController.find);
  
module.exports = router;