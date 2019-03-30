const data = require('../../data/organizations.json');

module.exports = (req, res) => {
  res.status(200).json(data);
};
