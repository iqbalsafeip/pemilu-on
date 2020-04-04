const route = require('express').Router();
const { getPenduduk, pendudukLogin, insertOnce } = require('./penduduk.controller');

route.get('/', getPenduduk);
route.post('/once', insertOnce);
route.post('/login', pendudukLogin);

module.exports = route;
