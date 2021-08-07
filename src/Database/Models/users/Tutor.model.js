import { Schema, model} from 'mongoose'


const TutorTestSchema = new Schema({
	user_id: {
        type: Schema.Types.ObjectId,
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