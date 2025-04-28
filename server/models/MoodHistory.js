const mongoose = require('mongoose');

const MoodHistorySchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    date: { type: Date, required: true },
    mood: { type: String, required: true },
    playlist: { type: String, required: true },
    note: { type: String, required: true },
  },
  { timestamps: true }
);

const MoodHistory = mongoose.model('MoodHistory', MoodHistorySchema);

module.exports = MoodHistory;
