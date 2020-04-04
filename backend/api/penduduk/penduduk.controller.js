const { get, login, once, bulk } = require('./penduduk.services');

module.exports = {
	getPenduduk: (req, res) => {
		get((err, result) => {
			if (err) {
				return res.json(err);
			}

			return res.json({
				success: 1,
				data: result
			});
		});
	},
	pendudukLogin: (req, res) => {
		const data = req.body;
		login(data, (err, result) => {
			if (err) {
				return res.json({
					success: 0,
					message: 'failed to login'
				});
			}

			return res.json({
				success: 1,
				data: result
			});
		});
	},
	insertOnce: (req, res) => {
		const data = req.body;
		once(data, (err, result) => {
			if (err) {
				return res.json({
					message: 'failed to insert',
					success: 0
				});
			}

			return res.json({
				data: result,
				success: 1
			});
		});
	},
	bulkInsert: (req, res) => {
		const data = req.body;
		bulk(data, (err, result) => {
			if (err) {
				return res.json({
					message: 'failed to insert',
					success: 0
				});
			}

			return res.json({
				message: 'success insert bulk of data',
				success: 1
			});
		});
	}
};
