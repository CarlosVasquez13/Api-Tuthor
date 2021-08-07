var mongoose = require('mongoose')

const UserTestSchema = new mongoose.Schema({
    names: {
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
		min: 6,
		max: 128,
        required: true,
        trim: true
    },
	tutor: {
        type: Number,
        required: true,
    },
    dni: {
        type: String,
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true
});


module.exports = mongoose.model('User', UserTestSchema)