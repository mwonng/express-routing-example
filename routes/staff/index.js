const staff = require('express').Router();
const all = require('./all');
const search = require('./search');


staff.get('/', all);
staff.get('/search', search);



module.exports = staff;
