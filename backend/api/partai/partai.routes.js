const route = require('express').Router();
const { getPartai, deletePartai, updatePartai, insertPartai } = require('./partai.controller');

route.get('/', getPartai);
route.post('/', insertPartai);
route.delete('/', deletePartai);
route.put('/', updatePartai);

module.exports = route;
