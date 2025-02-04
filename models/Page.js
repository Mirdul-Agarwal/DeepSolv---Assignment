const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  username: String,
  pageName: String,
  url: String,
  facebookId: String,
  profilePic: String,
  email: String,
  website: String,
  category: String,
  totalFollowers: Number,
  totalLikes: Number,
  creationDate: Date,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  followersList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SocialMediaUser' }]
});

module.exports = mongoose.model('Page', pageSchema);
