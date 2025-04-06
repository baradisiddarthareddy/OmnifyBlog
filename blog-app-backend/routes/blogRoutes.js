const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  getMyBlogs,
} = require("../controllers/blogController");

const auth = require("../middleware/authMiddleware");

router.post("/", auth, createBlog); // POST /api/blogs
router.get("/", getAllBlogs); // GET /api/blogs ✅ FIXED
router.get("/myblogs", auth, getMyBlogs); // GET /api/blogs/myblogs
router.get("/:id", getBlogById); // GET /api/blogs/:id
router.put("/:id", auth, updateBlog); // PUT /api/blogs/:id
router.delete("/:id", auth, deleteBlog); // DELETE /api/blogs/:id

module.exports = router;
