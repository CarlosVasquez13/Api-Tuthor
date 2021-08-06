import { Schema, model} from 'mongoose'


const ClassroomSchema = new Schema({
	
    name: {
        type: String,
        required: true
    },
	tutor: {
        type: Schema.Types.ObjectId,
		ref: 'Tutor',
        required: true
    },
	users: [{
		user: {
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


export default model('Classroom', ClassroomSchema)