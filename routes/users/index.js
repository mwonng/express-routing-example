const users = require('express').Router();
const all = require('./all');
const search = require('./search');


users.get('/', all);
users.get('/search', search);



module.exports = users;
