const express = require('express');
const router = express.Router();
const dietController = require('../controllers/dietController');

// Routes
router.get('/', dietController.view);
//router.post('/', dietController.find);
router.get('/adddiet/:user_id', dietController.form);
router.post('/adddiet/:user_id', dietController.create);
//router.get('/editdiet/:id', dietController.edit);
router.post('/editdiet/:id', dietController.update);
router.get('/viewdiet/:id', dietController.viewall);
router.get('/deletediet/:id',dietController.delete);
  
module.exports = router;
