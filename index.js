// const http = require("http");
//const express = require("express");
//const cors = require("cors");
//const mongoose = require("mongoose");
//require("dotenv").config();
// const Blog = require("./models/blogs");
const app = require("./app");
const logger = require("./utils/logger");
const config = require("./utils/config");

// const app = express();

// mongoose.set("strictQuery", false);
// const blogSchema = new mongoose.Schema({
//   title: String,
//   author: String,
//   url: String,
//   likes: Number,
// });

// const Blog = mongoose.model("Blog", blogSchema);

// const mongoUrl = process.env.MONGODB_URI;
// mongoose.connect(mongoUrl);

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // GET: get all the data in the database
// app.get("/api/blogs", (req, res) => {
//   Blog.find({}).then((blogs) => {
//     res.json(blogs);
//   });
// });

// // POST: add a single blog to the database
// app.post("/api/blogs", (req, res) => {
//   const blog = new Blog(req.body);

//   blog.save().then((result) => {
//     res.status(201).json(result);
//   });
// });

// const PORT = process.env.PORT || 3003;

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
