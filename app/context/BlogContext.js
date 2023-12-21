"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [savedBlogs, setSavedBlogs] = useState([]);

  useEffect(() => {
    const isLocalStorageAvailable =
      typeof window !== "undefined" && window.localStorage;

    if (isLocalStorageAvailable) {
      localStorage.setItem("savedBlogs", JSON.stringify(savedBlogs));
    }
  }, [savedBlogs]);

  useEffect(() => {
    const isLocalStorageAvailable =
      typeof window !== "undefined" && window.localStorage;

    if (isLocalStorageAvailable) {
      const storedEvents = JSON.parse(localStorage.getItem("savedBlogs"));
      setSavedBlogs(storedEvents);
    }
  }, []);

  const saveBlog = (blog) => {
    setSavedBlogs((prevBlogs) => {
      const updatedBlogs = [...prevBlogs, blog];
      console.log("saved Blog:", blog);
      return updatedBlogs;
    });
  };

  const deleteBlog = (blogId) => {
    const updatedSavedBlog = savedBlogs.filter((blog) => blog.id !== blogId);
    setSavedBlogs(updatedSavedBlog);
    localStorage.setItem("savedBlogs", JSON.stringify(updatedSavedBlog));
  };

  return (
    <BlogContext.Provider value={{ savedBlogs, saveBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

const useBlogContext = () => {
  return useContext(BlogContext);
};

export { useBlogContext, BlogProvider };
