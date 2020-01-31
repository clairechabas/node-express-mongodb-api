const mongoose = require('mongoose');
mongoose.Promise = Promise;

// Connecting API to DB
mongoose
  .connect('mongodb://localhost/socksdb', { useNewUrlParser: true })
  .then(() => console.log('Connected to Socks DB...'))
  .catch(err => console.log(`Error connecting to MongoDB : ${err}`));

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
    enum: ['blue', 'green', 'red', 'pink', 'yellow', 'rainbow']
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
