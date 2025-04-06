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

router.post("/", auth, createBlog);
router.get("/blogs", getAllBlogs);
router.get("/myblogs", auth, getMyBlogs);
router.get("/:id", getBlogById);

router.put("/:id", auth, updateBlog);
router.delete("/:id", auth, deleteBlog);

module.exports = router;
