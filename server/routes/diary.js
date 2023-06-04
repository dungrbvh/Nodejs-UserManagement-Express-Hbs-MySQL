const express = require('express');
const router = express.Router();
const diaryController = require('../controllers/diaryController');

router.get('/viewdiary/:id', diaryController.viewall);
router.get('/adddiary/:user_id', diaryController.form);
router.post('/adddiary/:user_id', diaryController.create);
module.exports = router;
