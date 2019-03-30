const routes = require('express').Router();
const models = require('./models');
const cars = require('./cars');
const staff = require('./staff');
const users = require('./users');
const tickets = require('./tickets');
const organizations = require('./organizations');
const customers = require('./customers');
const entities = require('./entites');

routes.use('/models', models);
routes.use('/cars', cars);
routes.use('/staff', staff);
routes.use('/users', users);
routes.use('/tickets', tickets);
routes.use('/organizations', organizations);
routes.use('/customers', customers);
routes.use('/entities', entities);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
