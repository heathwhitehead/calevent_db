const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}, //HASH
    posted_events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Flyer'}],
    liked_events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Flyer'}],
    current_location: String
    });
    module.exports = mongoose.model('User', userSchema);