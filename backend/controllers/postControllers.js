const Post = require('../models/postModel');

//@desc Get posts
//@route GET /api/
//@access private 
const getPosts = (req, res) => {
   const posts = await Post.find();

   res.status(200).json(posts);
}

