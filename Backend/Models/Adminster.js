const mongoose = require('mongoose');

// Define the User schema
const AdminsterSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a model based on the schema
const Adminster = mongoose.model('Adminster', AdminsterSchema);

module.exports = Adminster;
