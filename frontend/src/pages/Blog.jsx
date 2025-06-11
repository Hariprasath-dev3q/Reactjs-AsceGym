import { useState, useEffect } from "react";
import axios from 'axios';

function Blog() {

  const [getblogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/blogs')
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="container">
      <h3 className="font-bold mb-4 mt-4">Fitness Blog</h3>
      {getblogs.map((blog) => (
        <div key={blog.id} className="border rounded mb-4 bg-dark bg-opacity-75 p-4">
          <h4 className="text-light">{blog.title}</h4>
          <p className="text-light">{new Date(blog.created_at).toLocaleString()}</p>
          <p className="text-light">{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
