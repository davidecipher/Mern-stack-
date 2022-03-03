const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
   name: String,
   post: String
});

const Posts = mongoose.model('posts', postSchema);

module.exports = Posts;