var mongoose = require('mongoose')


const TutorTestSchema = new mongoose.Schema({
	user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        autopopulate: true,
    },
    title: {
        type: String,
        trim: true
    },
	classrooms: [{
		classroom: {
			type: mongoose.Schema.Types.ObjectId,
        	ref: 'Classroom',
            autopopulate: true,
		}       
    }],
	
}, {
    versionKey: false,
    timestamps: true
});


module.exports =  mongoose.model('Tutor', TutorTestSchema)