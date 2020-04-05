const route = require('express').Router();
const { getWakil, deleteWakil, updateWakil, insertWakil } = require('./wakil.controller');

route.get('/', getWakil);
route.post('/', insertWakil);
route.delete('/', deleteWakil);
route.put('/', updateWakil);

module.exports = route;
