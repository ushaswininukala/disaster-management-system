const mongoose = require('mongoose');

// Define the User schema
const VolunSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },

  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  contact: {
    type: Number,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
  address: { 
    type: String, 
    required: true }
=======
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb
});

// Create a model based on the schema
const Volun = mongoose.model('Volun', VolunSchema);

module.exports = Volun;
