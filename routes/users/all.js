const data = require('../../data/users.json');

module.exports = (req, res) => {
  res.status(200).json(data);
};
