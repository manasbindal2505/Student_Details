const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
	name:{
		type:String
	},
	age:{
		type:Number
	},
	class:{
		type:String
	},
	roll:{
		type:Number
	},
	dob:{
		type:String
	}
})

module.exports = Student = mongoose.model("Student",StudentSchema)