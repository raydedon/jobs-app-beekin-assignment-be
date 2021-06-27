const Job = require("../models/job.model");

exports.findAll = (req, res) => {
	Job.aggregate()
		.lookup({ from: 'companies', localField: 'company_id', foreignField: '_id', as: 'company' })
		.lookup({ from: 'skills', localField: 'skills', foreignField: '_id', as: 'skills' })
		.lookup({ from: 'job_types', localField: 'type', foreignField: '_id', as: 'job_types' })
		.then(jobs => {
			res.send(jobs);
		}).catch(err => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving jobs."
			});
		});
};
