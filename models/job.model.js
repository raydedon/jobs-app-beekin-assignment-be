var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var JobSchema = new Schema({
	type: { type: Schema.ObjectId, ref: "JobType", required: true },
	desc: {type: String, required: true},
	location: {type: Array, required: false, default : []},
	active: { type: Boolean, required: false },
	designation: {type: String, required: true},
	years_of_exp: {type: Number, required: true},
	company_id: { type: Schema.ObjectId, ref: "Company", required: true },
	skills: {type: Array, required: false, default : []}
}, {timestamps: true});

module.exports = mongoose.model("Job", JobSchema);
