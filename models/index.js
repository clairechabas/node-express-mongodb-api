const mongoose = require('mongoose');

// Connecting API to DB
mongoose
  .connect('mongodb://localhost:27017/socksdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to Socks DB...'))
  .catch(err => console.log(`Error connecting to MongoDB : ${err}`));

// Exporting models
module.exports.Sock = require('./sock');
