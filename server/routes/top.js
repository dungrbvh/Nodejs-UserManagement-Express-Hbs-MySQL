const express = require('express');
const router = express.Router();
const topController = require('../controllers/topController');

// Routes
router.get('/:id', topController.viewall);
//router.post('/', dietController.find);
  
module.exports = router;