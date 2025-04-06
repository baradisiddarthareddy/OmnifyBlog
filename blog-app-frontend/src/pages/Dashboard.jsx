import { useEffect, useState } from "react";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();
  const [blogs, setBlogs] = useState([]);

  const fetchMyBlogs = async () => {
    const res = await API.get("/blogs/myblogs");
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchMyBlogs();
  }, []);

  const deleteBlog = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      await API.delete(`/blogs/${id}`);
      fetchMyBlogs();
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome back, {user?.name} 👋</h1>
        <p className="quote">“Express yourself freely – your words matter.”</p>
        <Link to="/create" className="create-button">
          + Create New Blog
        </Link>
      </div>

      <div className="blogs-section">
        {blogs.length === 0 ? (
          <p className="no-blogs">You haven’t written any blogs yet.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id} className="blog-card">
              <h3>{blog.title}</h3>
              <p className="blog-content">{blog.content}</p>
              <div className="blog-actions">
                <Link to={`/edit/${blog._id}`} className="edit-button">
                  Edit
                </Link>
                <button
                  onClick={() => deleteBlog(blog._id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
