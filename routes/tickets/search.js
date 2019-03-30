const data = require('../../data/tickets.json');

module.exports = (req, res) => {
  if (!req.query.field) {
    res.status(200).json({"success": false, "message": "Field is empty"});
  }
  let result = data.filter( record => {
    const field = req.query.field;
    const value = req.query.value;
    if (Array.isArray(record[field])) {
      var set = new Set(record[field]);
      return set.has(value);
    }

    if (record[field] !== undefined) {
      return record[field].toString() === value
    }
  });
  res.status(200).json(result);
};
