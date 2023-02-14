const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minLength: 3,
        required: true,
        trim: true
    }
});

const User = mongoose.model('users', userSchema)

module.exports = User;