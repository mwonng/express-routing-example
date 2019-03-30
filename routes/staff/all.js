const data = require('../../data/staff.json');

module.exports = (req, res) => {
  res.status(200).json(data);
};
