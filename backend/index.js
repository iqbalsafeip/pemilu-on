const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/penduduk', require('./api/penduduk/penduduk.routes'));
app.use('/api/kandidat', require('./api/kandidat/kandidat.routes'));

app.get('/api', (req, res) => {
	res.json({
		message: 'welcome to the rest api'
	});
});

// admin login
app.post('/api', (req, res) => {
	const data = req.body;
	require('./config/db').query(
		'SELECT * FROM tb_admin WHERE username=?',
		[ data.username ],
		(err, result, fields) => {
			if (err) {
				return res.json({
					success: 0,
					message: 'failed to login'
				});
			}

			if (result.length === 0) {
				return res.json({
					success: 0,
					message: 'user not found'
				});
			}

			if (result[0].password !== data.password) {
				return res.json({
					success: 0,
					message: 'password incorrect'
				});
			}

			return res.json({
				success: 1,
				data: result
			});
		}
	);
});

const APP_PORT = process.env.APP_PORT;
app.listen(APP_PORT, () => {
	console.log('listen on ' + APP_PORT);
});
