const route = require('express').Router();
const { getPenduduk, pendudukLogin, insertOnce, deletePenduduk, updatePenduduk } = require('./penduduk.controller');

route.get('/', getPenduduk);
route.post('/', insertOnce);
route.post('/login', pendudukLogin);
route.delete('/', deletePenduduk);
route.put('/', updatePenduduk);

module.exports = route;
