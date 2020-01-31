const express = require('express');
const router = express.Router();
const socksHandlers = require('./handlers/socks');

router
  .route('/')
  .get(socksHandlers.getAllSocks)
  .post(socksHandlers.addSocks);

router
  .route('/:id')
  .get(socksHandlers.getAPairOfSocks)
  .put(socksHandlers.updateAPairOfSocks)
  .delete(socksHandlers.deleteAPairOfSocks);

module.exports = router;
