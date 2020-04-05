const route = require('express').Router();
const {
	getDetailsKandidat,
	voteKandidat,
	addKandidat,
	updateKandidat,
	deleteKandidat,
	getKandidat
} = require('./kandidat.controller');

route.get('/', getKandidat);
route.get('/details', getDetailsKandidat);
route.post('/', addKandidat);
route.post('/vote', voteKandidat);
route.delete('/', deleteKandidat);
route.put('/', updateKandidat);

module.exports = route;
