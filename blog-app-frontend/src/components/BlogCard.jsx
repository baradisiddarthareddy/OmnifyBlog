import { Link } from "react-router-dom";
import API from "../api/axios";
import "./BlogCard.css";

const BlogCard = ({ blog, currentUser }) => {
  const isAuthor = currentUser && blog.author._id === currentUser._id;

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (confirmDelete) {
      try {
        await API.delete(`/blogs/${blog._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        window.location.reload();
      } catch (error) {
        console.error("Failed to delete blog:", error);
      }
    }
  };

  return (
    <div className="blog-card">
      <h2 className="blog-title">{blog.title}</h2>
      <p className="blog-author">
        <i>by {blog.author.name}</i>
      </p>
      <p className="blog-content">{blog.content}</p>
      <Link to={`/blog/${blog._id}`} className="blog-readmore">
        Read More
      </Link>

      {isAuthor && (
        <div className="blog-actions">
          <Link to={`/edit/${blog._id}`} className="btn edit-btn">
            Edit
          </Link>
          <button onClick={handleDelete} className="btn delete-btn">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
