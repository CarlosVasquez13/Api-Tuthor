import { Schema, model} from 'mongoose'


const UserTestSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
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
	pass: {
        type: String,
        required: true,
        trim: true
    },
	tutor: {
        type: Number,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true
});


export default model('User', UserTestSchema)