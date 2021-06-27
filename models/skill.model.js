var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SkillSchema = new Schema({
	name: {type: String, required: true},
	level: {type: Number, required: false}
}, {timestamps: true});

module.exports = mongoose.model("Skill", SkillSchema);
