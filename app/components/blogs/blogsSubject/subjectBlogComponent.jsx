import React from "react";
import SubHeader from "../../subHeader/subHeader";

const SubjectBlogComponent = ({ imageSrc, SubHeaderTitle, listItems }) => {
  return (
    <div className="md:w-full md:h-full flex flex-col justify-center items-center px-5 md:px-0">
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
      </div>
    </div>
  );
};

export default SubjectBlogComponent;
