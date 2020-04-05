const pool = require('../../config/db');

module.exports = {
	get: (cb) => {
		pool.query('SELECT * FROM tb_partai', [], (err, result, fields) => {
			if (err) {
				return cb(true);
			}

			return cb(null, result);
		});
	},
	create: (data, cb) => {
		pool.query("INSERT INTO tb_partai VALUES('',?,?)", [ data.nama, data.gambar ], (err, result, fields) => {
			if (err) {
				return cb(true);
			}

			return cb(null, result);
		});
	},
	update: (data, cb) => {
		pool.query(
			'UPDATE tb_partai SET nama=?, gambar=? WHERE id_partai=?',
			[ data.nama, data.gambar, data.id_partai ],
			(err, result, fields) => {
				if (err) {
					return cb(true);
				}

				return cb(null, result);
			}
		);
	},
	_delete: (data, cb) => {
		pool.query('DELETE FROM tb_partai WHERE id_partai=?', [ data.id_partai ], (err, result, fields) => {
			if (err) {
				return cb(true);
			}

			return cb(null, result);
		});
	}
};
