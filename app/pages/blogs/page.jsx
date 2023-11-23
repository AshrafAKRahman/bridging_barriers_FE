"use client";
import Navbar from "@/app/components/navbar/navbar";
import BlogsComponent from "@/app/components/blogs/blogComponent";
import Header from "@/app/components/header/header";

const Blogs = () => {
  const listItems = [
    "How to create a good CV layout",
    "5 CV mistakes to avoid",
    "How to update your CV without ruining it",
    "How to sell yourself on your CV without going overboard",
    "3 signs that your CV is in good shape",
    "5 things to do after a job interview",
    "The hardest interview questions to answer and how to answer them",
    "How to thoroughly prepare for an interview",
    "Things to avoid saying in an interview",
    "How to find the right career path",
  ];
  return (
    <div className="w-screen h-screen overflow-scroll bg-blue-400">
      <Navbar />
      <Header
        titleClassName="text-3xl text-white pt-32 text-center md:text-5xl"
        title="The Bridging Barriers Blog Page"
      />
      <div className="h-full w-full px-10 grid  md:grid-cols-2 md:gap-4 bg-red-400 ">
        <div className="mt-10 md:h-full">
          <BlogsComponent
            imageSrc="/jobApplication.jpg"
            listItems={listItems}
            linkHref="/pages/jobApplication"
            linkText="Learn More"
            subHeaderTitle="Job Application Blogs"
          />
        </div>
        <div className="mt-10">
          <BlogsComponent
            imageSrc="/jobApplication.jpg"
            listItems={listItems}
            linkHref="/pages/jobApplication"
            linkText="Learn More"
            subHeaderTitle="Job Application Blogs"
          />
        </div>
        <div className="mt-10">
          <BlogsComponent
            imageSrc="/jobApplication.jpg"
            listItems={listItems}
            linkHref="/pages/jobApplication"
            linkText="Learn More"
            subHeaderTitle="Job Application Blogs"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
