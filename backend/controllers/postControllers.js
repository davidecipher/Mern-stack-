const Post = require('../models/postModel');

//@desc Get posts
//@route GET /api/
//@access Private 
const getPosts = (req, res) => {
   const posts = await Post.find();

   res.status(200).json(posts);
}

//@desc Get single post 
//@route GET /api/:id
//@access Private

const getSinglePost = (req, res) => {
   const singlePost = await Post.findById(req.params.id);

   if(singlePost) {
      res.status(200).json(singlePost);
   } else {
      res.status(400);
   }
}

//@desc Create post
//@route POST /api/
//@access Private
const setPost = (req, res) => {
   const newPost = await Post.create({
      author: req.body.author,
      content: req.body.content
   });

   res.json(newPost);
}

//@desc Update Post
//@route PUT /api
//@access Private
const updatePost = (req, res) => {
   const post = await Post.findById(req.params.id);

   const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body);

   res.json(updatedPost);
}

//@desc Delete post
//@route DELETE /api
//@access Private
const deletePost = (req, res) => {
   const deletedPost = await Post.findByIdAndDelete(req.params.id);

   res.status(200);
}

module.exports = {
   getPosts,
   getSinglePost,
   setPost,
   updatePost,
   deletePost
}