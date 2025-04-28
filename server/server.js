const express = require('express');
const connectDB = require('./config/db');
const moodRoutes = require('./routes/MoodRoutes');
const cors = require('cors'); // For handling CORS if frontend and backend are separate

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Use routes
app.use('/api', moodRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});