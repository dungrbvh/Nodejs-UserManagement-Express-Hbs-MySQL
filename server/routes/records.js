const express = require('express');
const router = express.Router();
const recordController = require('../controllers/recordController');

//router.get('/viewrecord/:id', recordController.viewall);
router.get('/addrecord/:user_id', recordController.form);
router.post('/addrecord/:user_id', recordController.create);
module.exports = router;