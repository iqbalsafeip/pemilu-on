const { get, create, _delete, update } = require('./partai.services');

const success = (data) => ({
	success: 1,
	data
});

const error = (message) => ({
	success: 0,
	message
});

module.exports = {
	getPartai: (req, res) => {
		get((err, result) => {
			if (err) {
				return res.json(error('there is no data'));
			}

			return res.json(success(result));
		});
	},
	insertPartai: (req, res) => {
		const data = req.body;
		create(data, (err, result) => {
			if (err) {
				return res.json(error('failed to insert'));
			}

			return res.json(success(result));
		});
	},
	deletePartai: (req, res) => {
		const data = req.body;
		_delete(data, (err, result) => {
			if (err) {
				return res.json(error('failed to delete'));
			}

			return res.json(success(result));
		});
	},
	updatePartai: (req, res) => {
		const data = req.body;
		update(data, (err, result) => {
			if (err) {
				return res.json(error('failed to update'));
			}

			return res.json(success(result));
		});
	}
};
