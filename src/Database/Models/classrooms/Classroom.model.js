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
    tag: {
        type: String,
        required: true
    },
	tutor: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'Tutor',
        required: true
    },
	users: [{
			type: mongoose.Schema.Types.ObjectId,
        	ref: 'User' 
    }],
	class_time: {
        type: String,
        required: true,
    },
	hours: {
        type: Number,
        required: true,
    },
    zoom_class: {
        type: String
    }
	
}, {
    versionKey: false,
    timestamps: true
});


module.exports =  mongoose.model('Classroom', ClassroomSchema)