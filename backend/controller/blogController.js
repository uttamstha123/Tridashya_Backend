const Blog = require("../models/blogModel");
const asyncHandler = require("express-async-handler");

// @route POST /api/blog/
const postBlog = asyncHandler(async (req, res) => {
  const newPost = new Blog(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(401).json(err);
  }
});

// @route PUT /api/blog/:id
const updateBlog = asyncHandler(async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await Blog.updateOne({ $set: req.body });
      res.status(200).json(post);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// @route DELETE /api/blog/:id
const deleteBlog = asyncHandler(async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    // !!! need to add userId field in Blog model
    //  if (post.userId === req.body.userId) {
      await Blog.deleteOne({_id: req.params.id});
      res.status(200).json(post);
    // } else {
      // res.status(403).json("You can only delete your own posts");
    // }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// @route GET /api/blog/
const getBlogs = asyncHandler(async (req, res) => {
  try {
    const posts = await Blog.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// @route GET /api/blog/:id
const getBlog = asyncHandler(async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = {
  postBlog,
  updateBlog,
  deleteBlog,
  getBlogs,
  getBlog,
};
