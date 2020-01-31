const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to a happy socks world !');
});

app.listen(port, console.log(`Listening on port ${port}`));
