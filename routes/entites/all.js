
data = [
  'Organizations',
  'Users',
  'Ticets'
]

module.exports = (req, res) => {
  res.status(200).json(data);
};
