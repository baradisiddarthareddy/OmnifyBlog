import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/axios";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await API.get(`/blogs/${id}`);
      setBlog(res.data);
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <h1>{blog.title}</h1>
      <p>
        <i>by {blog.author.name}</i>
      </p>
      <p>{blog.content}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
    background: "#fff",
    borderRadius: "5px",
  },
};

export default BlogDetail;
