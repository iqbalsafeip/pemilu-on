const pool = require('../../config/db');

module.exports = {
	get: (cb) => {
		pool.query(
			'SELECT tb_kandidat.nama AS nama_kandidat, tb_kandidat.alamat AS alamat_kandidat, tb_kandidat.usia AS usia_kandidat, tb_kandidat.gambar AS gambar_kandidat, tb_kandidat.visi, tb_kandidat.misi, tb_wakil.nama AS wakil_nama, tb_wakil.usia AS usia_wakil, tb_wakil.alamat AS wakil_alamat, tb_wakil.gambar AS wakil_gambar, tb_partai.nama AS nama_partai, tb_partai.gambar AS gambar_partai, (SELECT COUNT(*) FROM tb_data_voting WHERE tb_data_voting.id_kandidat=tb_kandidat.id_kandidat) AS voted FROM tb_kandidat INNER JOIN tb_wakil ON tb_kandidat.id_wakil = tb_wakil.id_wakil INNER JOIN tb_partai ON tb_kandidat.id_partai=tb_partai.id_partai GROUP BY tb_kandidat.id_kandidat',
			[],
			(err, result, fields) => {
				if (err) {
					cb(true);
				}

				return cb(null, result);
			}
		);
	},

	vote: (data, cb) => {
		pool.query('SELECT * FROM tb_data_voting WHERE id_penduduk=?', [ data.id_penduduk ], (err, result, fields) => {
			if (err) {
				return cb(true);
			}
			if (result.length > 0) {
				return cb(true);
			}
			pool.query(
				"INSERT INTO tb_data_voting VALUES('', ?,?,?,?,?)",
				[ data.id_penduduk, data.id_kandidat, data.longitude, data.latitude, data.date ],
				(err, result, fields) => {
					if (err) {
						return cb(true);
					}

					return cb(null, result);
				}
			);
		});
	},

	_delete: (data, cb) => {
		pool.query('DELETE FROM tb_kandidat WHERE id_kandidat=?', [ data.id_kandidat ], (err, result, fields) => {
			if (err) {
				return cb(true);
			}
			pool.query(
				'DELETE FROM tb_data_voting WHERE id_kandidat=?',
				[ data.id_kandidat ],
				(err, result, fields) => {
					if (err) {
						return cb(true);
					}
					return cb(null, result);
				}
			);
		});
	},

	add: (data, cb) => {
		pool.query(
			"INSERT INTO tb_kandidat VALUES('',?,?,?,?,?,?,?,?)",
			[ data.nama, data.id_partai, data.id_wakil, data.usia, data.alamat, data.gambar, data.visi, data.misi ],
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
			'UPDATE tb_kandidat SET nama=?, id_partai=?, id_wakil=?, usia=?, alamat=?,gambar=?, visi=?, misi=? WHERE id_kandidat=?',
			[
				data.nama,
				data.id_partai,
				data.id_wakil,
				data.usia,
				data.alamat,
				data.gambar,
				data.visi,
				data.misi,
				data.id_kandidat
			],
			(err, result, fields) => {
				if (err) {
					return cb(true);
				}

				return cb(null, result);
			}
		);
	}
};
