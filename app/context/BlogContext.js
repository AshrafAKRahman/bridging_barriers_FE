"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [savedBlogs, setSavedBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("savedBlogs")) || [];
    setSavedBlogs(storedBlogs);
  }, []);

  const saveBlog = (blog) => {
    const updatedBlog = {
      ...blog,
      id: Date.now(),
    };
    setSavedBlogs((prevBlogs) => [...prevBlogs, updatedBlog]);
  };

  const deleteBlog = (blogId) => {
    const updatedSavedBlogs = savedBlogs.filter((blog) => blog.id !== blogId);

    setSavedBlogs(updatedSavedBlogs);
    localStorage.setItem("savedBlogs", JSON.stringify(updatedSavedBlogs));
  };

  useEffect(() => {
    localStorage.setItem("savedBlogs", JSON.stringify(savedBlogs));
  }, [savedBlogs]);

  console.log(savedBlogs);
  return (
    <BlogContext.Provider value={{ savedBlogs, saveBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
