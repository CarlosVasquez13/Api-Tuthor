import { Schema, model} from 'mongoose'


const UserTestSchema = new Schema({
    names: {
        type: String,
        required: true,
        trim: true
    },
    age: Number,
}, {
    versionKey: false,
    timestamps: true
});


export default model('UserTest', UserTestSchema)