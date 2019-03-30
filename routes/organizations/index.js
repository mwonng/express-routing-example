const organizations = require('express').Router();
const all = require('./all');
const search = require('./search');


organizations.get('/', all);
organizations.get('/search', search);



module.exports = organizations;
