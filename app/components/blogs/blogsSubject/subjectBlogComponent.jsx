import React from "react";
import SubHeader from "../../subHeader/subHeader";

const SubjectBlogComponent = ({ imageSrc, SubHeaderTitle, listItems }) => {
  return (
    <div className="md:w-full md:h-full flex flex-col justify-center items-center px-5 md:px-0">
      <img src={imageSrc} alt="cv layout photo" className="w-full  md:w-2/3" />
      <div className="w-full h-3/6 md:w-2/3 md:h-1/3 overflow-scroll tracking-tight bg-white">
        <SubHeader title={SubHeaderTitle} titleClassName="mb-5" />
        <ol className="text-blue-900 px-5">
          {listItems.map((item, index) => (
            <li className="mb-5" key={index}>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SubjectBlogComponent;
