import React from "react";
import SubHeader from "../subHeader/subHeader";
import NormalButton from "../buttons/normalButton";
import Link from "next/link";

const BlogsComponent = ({
  imageSrc,
  listItems,
  linkHref,
  linkText,
  subHeaderTitle,
}) => {
  return (
    <div className="w-full">
      <div className="w-full h-full relative group">
        <img
          src={imageSrc}
          alt="application image"
          className="object-cover w-full h-full"
        />
        <div className="absolute flex flex-col items-center inset-0 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-opacity ease-out duration-500">
          <ul className="text-xs text-blue-900 w-full h-full bg-gray-200 text-center p-4 md:text-lg mb-5">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            <Link href={linkHref}>
              <NormalButton text={linkText} />
            </Link>
          </ul>
        </div>
      </div>
      <div className="w-full h-fit bg-gray-300">
        <SubHeader title={subHeaderTitle} />
      </div>
    </div>
  );
};

export default BlogsComponent;
