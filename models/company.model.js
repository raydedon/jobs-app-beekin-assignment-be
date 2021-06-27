var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CompanySchema = new Schema({
	name: {type: String, required: true},
	location: {type: String, required: false}
}, {timestamps: true});

module.exports = mongoose.model("Company", CompanySchema);
