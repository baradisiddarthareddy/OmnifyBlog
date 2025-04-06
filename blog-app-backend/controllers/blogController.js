const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;

  try {
    const blog = await Blog.create({
      title,
      content,
      author: req.user._id,
    });

    res.status(201).json({ success: true, blog });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllBlogs = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;

  try {
    const blogs = await Blog.find()
      .populate("author", "name")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json({ success: true, blogs });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author", "name");
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.json({ success: true, blog });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateBlog = async (req, res) => {
  const { title, content } = req.body;

  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    blog.title = title;
    blog.content = content;
    await blog.save();

    res.json({ success: true, blog });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await Blog.findByIdAndDelete(req.params.id); // ✅ Fixed: Replaced .remove() with findByIdAndDelete
    res.json({ success: true, message: "Blog deleted" });
  } catch (err) {
    console.error("Delete blog error:", err); // helpful for debugging
    res.status(500).json({ message: "Server error" });
  }
};

exports.getMyBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ author: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
