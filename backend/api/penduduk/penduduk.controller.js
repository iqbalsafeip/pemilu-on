const { get, login, once, bulk, _delete, update } = require('./penduduk.services');

const success = (data) => ({
	success: 1,
	data
});

const error = (message) => ({
	success: 0,
	message
});

module.exports = {
	getPenduduk: (req, res) => {
		get((err, result) => {
			if (err) {
				return res.json(error('there is no data'));
			}

			return res.json(success(result));
		});
	},
	pendudukLogin: (req, res) => {
		const data = req.body;
		login(data, (err, result) => {
			if (err) {
				return res.json(error('failed to login'));
			}

			return res.json(success(result));
		});
	},
	insertOnce: (req, res) => {
		const data = req.body;
		once(data, (err, result) => {
			if (err) {
				return res.json(error('failed to insert'));
			}

			return res.json(success(result));
		});
	},
	bulkInsert: (req, res) => {
		const data = req.body;
		bulk(data, (err, result) => {
			if (err) {
				return res.json(error('failed to insert'));
			}

			return res.json(success(result));
		});
	},
	deletePenduduk: (req, res) => {
		const data = req.body;
		_delete(data, (err, result) => {
			if (err) {
				return res.json(error('failed to delete'));
			}

			return res.json(success(result));
		});
	},
	updatePenduduk: (req, res) => {
		const data = req.body;
		update(data, (err, result) => {
			if (err) {
				return res.json(error('failed to update'));
			}

			return res.json(success(result));
		});
	}
};
