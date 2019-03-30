const entities = require('express').Router();
const all = require('./all');


entities.get('/', all);



module.exports = entities;
