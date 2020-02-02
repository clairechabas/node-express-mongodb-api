const db = require('../models');

// Create a pair of socks
exports.addSocks = async (req, res) => {
  console.log('req.body', req.body);
  try {
    const newSock = await db.Sock.create(req.body);
    return res.status(200).json({
      message: 'New pair of socks added to stock !',
      newSock
    });
  } catch (err) {
    return res.status(400).json(`Error, couldn't add new socks : ${err}`);
  }
};

// Get all socks
exports.getAllSocks = async (req, res) => {
  try {
    const socks = req.query
      ? await db.Sock.find(req.query)
      : await db.Sock.find();

    return res.status(200).json(socks);
  } catch (err) {
    return res.status(400).json(`Error fetching all socks : ${err}`);
  }
};

// Get one pair of socks
exports.getAPairOfSocks = async (req, res) => {
  try {
    const oneSock = await db.Sock.findById(req.params.id);
    return res.status(200).json({
      message: "Found the sock you're looking for",
      oneSock
    });
  } catch (err) {
    return res.status(400).json(`Error, couldn't add new socks : ${err}`);
  }
};

// Update a pair of socks
exports.updateAPairOfSocks = async (req, res) => {
  try {
    const updatedSock = await db.Sock.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    );
    return res.status(200).json({
      message: 'Socks updated successfully !',
      updatedSock
    });
  } catch (err) {
    return res.status(400).json(`Error, couldn't add new socks : ${err}`);
  }
};

// Delete a pair of socks
exports.deleteAPairOfSocks = async (req, res) => {
  try {
    await db.Sock.findByIdAndRemove(req.params.id);
    return res.status(200).json('Deleted sock successfully');
  } catch (err) {
    return res.status(400).json(`Error, couldn't add new socks : ${err}`);
  }
};
