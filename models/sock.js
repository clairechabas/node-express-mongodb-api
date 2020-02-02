const mongoose = require('mongoose');

// Sock schema
const sockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxlength: 250
  },
  brand: {
    type: String,
    required: true
  },
  colors: {
    type: [String],
    enum: ['blue', 'green', 'red', 'pink', 'yellow', 'black', 'rainbow'],
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  isMadeInFrance: Boolean,
  price: {
    type: Number,
    required: true
  }
});

// Sock model
const Sock = mongoose.model('Sock', sockSchema);

module.exports = Sock;
