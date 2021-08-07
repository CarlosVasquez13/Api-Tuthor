var mongoose = require('mongoose')


const UserTestSchema = new mongoose.Schema({
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


module.exports = mongoose.model('UserTest', UserTestSchema)