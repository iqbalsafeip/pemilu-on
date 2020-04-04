const pool = require('../../config/db');

module.exports = {
	get: (cb) => {
		pool.query('SELECT * FROM tb_penduduk', [], (err, result, w) => {
			if (err) {
				return cb(true);
			}

			if (result.length === 0) {
				return cb(true);
			}
			return cb(null, result);
		});
	},
	login: (data, cb) => {
		pool.query('SELECT * FROM tb_penduduk WHERE no_ktp=?', [ data.no_ktp ], (err, result, fields) => {
			if (err) {
				return cb(true);
			}
			if (result.length > 0) {
				return cb(null, result);
			}

			return cb(true);
		});
	},
	once: (data, cb) => {
		pool.query('SELECT * FROM tb_penduduk WHERE no_ktp=?', [ data.no_ktp ], (err, result, fields) => {
			if (err) {
				return cb(true);
			}
			if (result.length > 0) {
				return cb(true);
			}
			pool.query(
				"INSERT INTO tb_penduduk VALUES('',?,?,?,?,?)",
				[ data.nama, data.alamat, data.usia, data.gender, data.no_ktp ],
				(err, result, fields) => {
					if (err) {
						return cb(true);
					}

					return cb(null, result);
				}
			);
		});
	},
	bulk: (data, cb) => {
		pool.query(
			'INSERT INTO tb_penduduk(nama,alamat,usia,gender,no_ktp) VALUES ?',
			[ data.raw ],
			(err, result, fields) => {
				if (err) {
					return cb(true);
				}

				if (result.affectedRows > 0) {
					return cb(result);
				}

				return cb(true);
			}
		);
	},
	_delete: (data, cb) => {
		pool.query('DELETE FROM tb_penduduk WHERE id_penduduk=?', [ data.id_penduduk ], (err, result, fields) => {
			if (err) {
				return cb(true);
			}

			if (result.affectedRows > 0) {
				return cb(null, result);
			}
			return cb(true);
		});
	},
	update: (data, cb) => {
		pool.query(
			'UPDATE tb_penduduk SET nama=?, alamat=?, usia=?, gender=?,no_ktp=? WHERE id_penduduk=?',
			[ data.nama, data.alamat, data.usia, data.gender, data.no_ktp, data.id_penduduk ],
			(err, result, fields) => {
				if (err) {
					return cb(true);
				}

				if (result.affectedRows > 0) {
					return cb(null, result);
				}

				return cb(true);
			}
		);
	}
};
