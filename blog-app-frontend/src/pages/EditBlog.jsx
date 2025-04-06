import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";
import "./EditBlog.css";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await API.get(`/blogs/${id}`);
      setForm({ title: res.data.blog.title, content: res.data.blog.content });
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/blogs/${id}`, form);
    navigate("/dashboard");
  };

  return (
    <div className="edit-blog-container">
      <form onSubmit={handleSubmit} className="edit-blog-form">
        <h2>Edit Blog</h2>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Blog Title"
          required
        />
        <textarea
          rows="8"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          placeholder="Blog Content"
          required
        />
        <button type="submit" className="update-button">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
