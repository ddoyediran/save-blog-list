const blogRouter = require("express").Router();
const Blog = require("../models/blogs");

// api/blogs
// GET: get all the data in the database
blogRouter.get("/", (req, res) => {
  Blog.find({}).then((blogs) => {
    res.json(blogs);
  });
});

// POST: add a single blog to the database
blogRouter.post("/", (req, res) => {
  const blog = new Blog(req.body);

  blog.save().then((result) => {
    res.status(201).json(result);
  });
});

module.exports = blogRouter;
