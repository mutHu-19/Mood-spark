const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://arundathimuthukumari:aSm2001@moodchanger.kg32f.mongodb.net/?retryWrites=true&w=majority&appName=Moodchanger', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1); // Stop the server if database connection fails
  }
};

module.exports = connectDB;
