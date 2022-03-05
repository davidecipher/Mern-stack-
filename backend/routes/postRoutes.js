const express = require('express');
const router = express.Router();
const {
   getPosts,
   getSinglePost,
   setPost,
   updatePost,
   deletePost
} = require('../controllers/postControllers');

router.get('/', getPosts);
router.get('/:id', getSinglePost);
router.post('/', setPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;