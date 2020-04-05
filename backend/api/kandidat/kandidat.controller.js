const { get, vote, _delete, add, update } = require('./kandidat.services');

module.exports = {
	getKandidat: (req, res) => {
		get((err, result) => {
			if (err) {
				return res.json({
					success: 0,
					message: 'fail to get'
				});
			}

			if (result.length === 0) {
				return res.json({
					success: 0,
					message: 'data not found'
				});
			}

			return res.json({
				success: 1,
				data: result
			});
		});
	},
	voteKandidat: (req, res) => {
		const data = req.body;
		vote(data, (err, result) => {
			if (err) {
				return res.json({
					success: 0,
					message: 'failed to vote'
				});
			}
			if (result.affectedRows > 0) {
				return res.json({
					success: 1,
					data: result
				});
			}

			return res.json({
				success: 0,
				message: 'failed to vote'
			});
		});
	},
	deleteKandidat: (req, res) => {
		const data = req.body;
		_delete(data, (err, result) => {
			if (err) {
				return res.json({
					success: 0,
					message: 'failed to delete'
				});
			}
			if (result.affectedRows > 0) {
				return res.json({
					success: 1,
					data: result
				});
			}

			return res.json({
				success: 0,
				message: 'failed to delete'
			});
		});
	},
	addKandidat: (req, res) => {
		const data = req.body;
		add(data, (err, result) => {
			if (result.affectedRows > 0) {
				return res.json({
					success: 1,
					data: result
				});
			}

			return res.json({
				success: 0,
				message: 'failed to add'
			});
		});
	},
	updateKandidat: (req, res) => {
		const data = req.body;
		update(data, (err, result) => {
			if (err) {
				return res.json({
					success: 0,
					message: 'failed to update'
				});
			}

			if (result.affectedRows > 0) {
				return res.json({
					success: 1,
					data: result
				});
			}

			return res.json({
				success: 0,
				message: 'failed to update'
			});
		});
	}
};
