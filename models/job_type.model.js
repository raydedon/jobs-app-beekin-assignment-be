var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var JobTypeSchema = new Schema({
	name: {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.model("JobType", JobTypeSchema);
