const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');

// Routes
router.get('/', activityController.view);
//router.post('/', activityController.find);
router.get('/addactivity/:user_id', activityController.form);
router.post('/addactivity/:user_id', activityController.create);
//router.get('/editactivity/:id', activityController.edit);
router.post('/editactivity/:id', activityController.update);
router.get('/viewactivity/:id', activityController.viewall);
router.get('/deleteactivity/:id',activityController.delete);
  
module.exports = router;