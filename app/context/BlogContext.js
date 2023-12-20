"use client";
import React, { createContext, useEffect, useState, useContext } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [savedBlogs, setSavedBlogs] = useState([]);

  useEffect(() => {
    const isLocalStorageViable =
      typeof window !== "undefined" && window.localStorage;

    if (isLocalStorageViable) {
      const storedBlogs = JSON.parse(localStorage.getItem("savedBlogs"));
      setSavedBlogs(storedBlogs);
    }
  }, []);

  useEffect(() => {
    const isLocalStorageViable =
      typeof window !== "undefined" && window.localStorage;

    if (isLocalStorageViable) {
      localStorage.setItem("savedBlogs", JSON.stringify(savedBlogs));
    }
  }, [savedBlogs]);

  const saveBlog = (blog) => {
    setSavedBlogs((prevBlogs) => {
      const updatedBlogs = [...prevBlogs, blog];
      console.log("Saved Blog:", blog);
      return updatedBlogs;
    });
  };

  const handleDeleteBlog = (blogId) => {
    const updatedSavedBlogs = savedBlogs.filter((blog) => blog.id !== blogId);

    setSavedBlogs(updatedSavedBlogs);
    localStorage.setItem("savedBlogs", JSON.stringify(updatedSavedBlogs));
  };

  return (
    <BlogContext.Provider value={{ savedBlogs, saveBlog, handleDeleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

const useBlogContext = () => {
  return useContext(BlogContext);
};

export { BlogProvider, useBlogContext };
