var mongoose = require('mongoose')


const ClassroomSchema = new mongoose.Schema({
	
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
	tutor: {
        type: Schema.Types.ObjectId,
		ref: 'Tutor',
        required: true
    },
	users: [{
		user_id: {
			type: Schema.Types.ObjectId,
        	ref: 'User'
		} 
    }],
	class_time: {
        type: String,
        required: true,
    },
	hours: {
        type: Number,
        required: true,
    },
	
}, {
    versionKey: false,
    timestamps: true
});


module.exports =  mongoose.model('Classroom', ClassroomSchema)