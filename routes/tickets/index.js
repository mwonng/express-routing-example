const tickets = require('express').Router();
const all = require('./all');
const search = require('./search');


tickets.get('/', all);
tickets.get('/search', search);



module.exports = tickets;
