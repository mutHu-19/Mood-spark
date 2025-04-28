const MoodHistory = require('../models/MoodHistory');

// Get mood history for a specific user
const getMoodHistory = async (req, res) => {
  const { userId } = req.query; // User ID from query parameters
  
  try {
    const moodHistory = await MoodHistory.find({ userId });
    if (!moodHistory) {
      return res.status(404).json({ message: 'Mood history not found' });
    }
    res.status(200).json(moodHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getMoodHistory };
