const route = require('express').Router();
const { getKandidat, voteKandidat, addKandidat, updateKandidat, deleteKandidat } = require('./kandidat.controller');

route.get('/', getKandidat);
route.post('/', addKandidat);
route.post('/vote', voteKandidat);
route.delete('/', deleteKandidat);
route.put('/', updateKandidat);

module.exports = route;
