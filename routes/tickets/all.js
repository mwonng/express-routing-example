const data = require('../../data/tickets.json');

module.exports = (req, res) => {
  res.status(200).json(data);
};
