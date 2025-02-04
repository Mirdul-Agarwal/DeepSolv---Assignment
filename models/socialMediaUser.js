const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    profilePic: String,
    facebookId: String,
});

module.exports = mongoose.model('SocialMediaUser', userSchema);