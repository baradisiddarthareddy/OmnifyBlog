import { useEffect, useState } from "react";
import API from "../api/axios";
import BlogCard from "../components/BlogCard";
import { useAuth } from "../context/AuthContext";
import "./Home.css";

const Home = () => {
  const { user } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await API.get(`/api/blogs?page=${page}`);
        console.log("Fetched blogs:", res.data.blogs);
        setBlogs(res.data.blogs || []);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };
    fetchBlogs();
  }, [page]);

  return (
    <div className="home-container">
      <h1 className="home-title">Explore All Blogs</h1>
      {blogs.length === 0 ? (
        <p className="no-blogs">No blogs found.</p>
      ) : (
        <div className="blogs-list">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} currentUser={user} />
          ))}
        </div>
      )}
      <div className="pagination">
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 1}
          className="page-btn"
        >
          Previous
        </button>
        <span className="page-number">Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)} className="page-btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
