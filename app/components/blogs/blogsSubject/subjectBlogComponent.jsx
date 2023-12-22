"use client";
import React from "react";
import SubHeader from "../../subHeader/subHeader";
import { useBlogContext } from "../../../context/BlogContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubjectBlogComponent = ({ imageSrc, SubHeaderTitle, listItems }) => {
  const { saveBlog } = useBlogContext();

  const handleSave = () => {
    saveBlog({ title: SubHeaderTitle, content: { imageSrc } });
    toast.success("Blog saved!");
  };

  return (
    <div className="md:w-full md:h-full flex flex-col justify-center items-center px-5 md:px-0">
      <ToastContainer />
      <img
        src={imageSrc}
        alt="cv layout photo"
        className="w-full rounded-t-3xl md:w-2/3"
      />
      <div className="md:w-4/6 md:h-full overflow-scroll rounded-b-3xl  bg-white">
        <SubHeader
          title={SubHeaderTitle}
          titleClassName="mt-5 mb-5 text-blue-900"
        />
        <ol className="text-blue-900 px-5">
          {listItems.map((item, index) => (
            <li className="mb-5" key={index}>
              {item}
            </li>
          ))}
        </ol>
        <div className="flex justify-center">
          <button onClick={handleSave}>Save Item</button>
        </div>
      </div>
    </div>
  );
};

export default SubjectBlogComponent;
