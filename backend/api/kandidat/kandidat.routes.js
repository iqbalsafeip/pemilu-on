const route = require('express').Router();
const { getKandidat, voteKandidat, addKandidat } = require('./kandidat.controller');

route.get('/', getKandidat);
route.post('/', addKandidat);
route.post('/vote', voteKandidat);

module.exports = route;
