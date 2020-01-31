const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Adding middlewares
app.use(express.json());

// Route to server root
app.get('/', (req, res) => {
  res.send('Welcome to a happy socks world !');
});

// Socks routes entry
const socksRoutes = require('./routes/socks');
app.use('/api/socks', socksRoutes);

app.listen(port, console.log(`Listening on port ${port}`));
