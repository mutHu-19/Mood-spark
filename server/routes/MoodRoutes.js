const express = require('express');
const { getMoodHistory } = require('../controllers/MoodController');

const router = express.Router();

// Route to fetch mood history for a user
router.get('/moodHistory', getMoodHistory);

module.exports = router;
