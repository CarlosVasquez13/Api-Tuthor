import { Schema, model} from 'mongoose'


const TutorTestSchema = new Schema({
    name: {
        type: String,
        required: true
    },
	phone: {
        type: String,
        required: true,
        trim: true
    },
	email: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
	classrooms: [{
		classroom: {
			type: Schema.Types.ObjectId,
        	ref: 'Classroom'
		}       
    }],
	
}, {
    versionKey: false,
    timestamps: true
});


export default model('Tutor', TutorTestSchema)