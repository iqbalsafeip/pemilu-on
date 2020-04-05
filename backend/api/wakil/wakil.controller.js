const { get, create, _delete, update } = require('./wakil.services');

const success = (data) => ({
	success: 1,
	data
});

const error = (message) => ({
	success: 0,
	message
});

module.exports = {
	getWakil: (req, res) => {
		get((err, result) => {
			if (err) {
				return res.json(error('there is no data'));
			}

			return res.json(success(result));
		});
	},
	insertWakil: (req, res) => {
		const data = req.body;
		create(data, (err, result) => {
			if (err) {
				return res.json(error('failed to insert'));
			}

			return res.json(success(result));
		});
	},
	deleteWakil: (req, res) => {
		const data = req.body;
		_delete(data, (err, result) => {
			if (err) {
				return res.json(error('failed to delete'));
			}

			return res.json(success(result));
		});
	},
	updateWakil: (req, res) => {
		const data = req.body;
		update(data, (err, result) => {
			if (err) {
				return res.json(error('failed to update'));
			}

			return res.json(success(result));
		});
	}
};
