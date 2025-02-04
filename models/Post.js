const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: String,
  postId: String,
  postDate: Date,
  likes: Number,
  comments: [String],
  page: { type: mongoose.Schema.Types.ObjectId, ref: 'Page' }
});

module.exports = mongoose.model('Post', postSchema);
