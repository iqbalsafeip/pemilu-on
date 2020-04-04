const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.json({
		message: 'welcome to the rest api'
	});
});

// routes
app.use('/api/penduduk', require('./api/penduduk/penduduk.routes'));

const APP_PORT = process.env.APP_PORT;
app.listen(APP_PORT, () => {
	console.log('listen on ' + APP_PORT);
});
