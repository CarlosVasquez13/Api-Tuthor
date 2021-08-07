import { Schema, model} from 'mongoose'


const TutorTestSchema = new Schema({
	user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        autopopulate: true,
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
	classrooms: [{
		classroom: {
			type: Schema.Types.ObjectId,
        	ref: 'Classroom',
            autopopulate: true,
		}       
    }],
	
}, {
    versionKey: false,
    timestamps: true
});


export default model('Tutor', TutorTestSchema)