const customers = require('express').Router();
const all = require('./all');
const search = require('./search');


customers.get('/', all);
customers.get('/search', search);



module.exports = customers;
