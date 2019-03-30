const data = require('../../data/customers.json');

module.exports = (req, res) => {
  res.status(200).json(data);
};
