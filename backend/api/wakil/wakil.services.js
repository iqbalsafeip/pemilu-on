const pool = require('../../config/db');

module.exports = {
	get: (cb) => {
		pool.query('SELECT * FROM tb_wakil', [], (err, result, fields) => {
			if (err) {
				return cb(true);
			}

			return cb(null, result);
		});
	},
	create: (data, cb) => {
		pool.query(
			"INSERT INTO tb_wakil VALUES('', ?,?,?,?)",
			[ data.nama, data.usia, data.alamat, data.gambar ],
			(err, result, fields) => {
				if (err) {
					return cb(true);
				}

				return cb(null, result);
			}
		);
	},
	update: (data, cb) => {
		pool.query(
			'UPDATE tb_wakil SET nama=?, usia=?,alamat=?, gambar=? WHERE id_wakil=?',
			[ data.nama, data.usia, data.alamat, data.gambar, data.id_wakil ],
			(err, result, fields) => {
				if (err) {
					return cb(true);
				}

				return cb(null, result);
			}
		);
	},
	_delete: (data, cb) => {
		pool.query('DELETE FROM tb_wakil WHERE id_wakil=?', [ data.id_wakil ], (err, result, fields) => {
			if (err) {
				return cb(true);
			}

			return cb(null, result);
		});
	}
};
