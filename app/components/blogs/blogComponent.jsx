import React from "react";
import SubHeader from "../subHeader/subHeader";
import NormalButton from "../buttons/normalButton";
import Link from "next/link";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "900",
  preload: true,
});

const BlogsComponent = ({
  imageSrc,
  listItems,
  linkHref,
  linkText,
  subHeaderTitle,
}) => {
  const isWindowDefined = typeof window !== "undefined";
  return (
    <div className="w-full h-full">
      <div className="w-full relative group">
        <img
          src={imageSrc}
          alt="application image"
          className="object-contain rounded-tl-3xl  w-full h-full"
        />
        <div className="absolute flex flex-col items-center justify-center inset-0 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-opacity ease-out duration-100">
          <div className={raleway.className}>
            <ul className="text-xs text-gray-200 w-full h-full bg-blue-700 bg-opacity-20 backdrop-blur-md rounded-md drop-shadow-lg text-center p-4  md:text-lg">
              {listItems
                .slice(
                  0,
                  isWindowDefined && window.innerWidth < 768
                    ? 6
                    : listItems.length
                )
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              <Link href={linkHref}>
                <NormalButton text={linkText} />
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full rounded-br-3xl  bg-white">
        <SubHeader title={subHeaderTitle} />
      </div>
    </div>
  );
};

export default BlogsComponent;
