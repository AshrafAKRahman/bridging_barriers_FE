"use client";
import Navbar from "../../components/navbar/navbar";
import BlogsComponent from "../../components/blogs/blogComponent";
import Header from "../../components/header/header";

const Blogs = () => {
  const listItemsSet1 = [
    "How to create a good CV layout",
    "4 CV mistakes to avoid",
    "How to update your CV without ruining it",
    "How to sell yourself on your CV without going overboard",
    "3 signs that your CV is in good shape",
    "5 things to do after a job interview",
    "The hardest interview questions to answer and how to answer them",
    "How to thoroughly prepare for an interview",
    "Things to avoid saying in an interview",
    "How to find the right career path",
  ];
  const listItemsSet2 = [
    "3 ways to boost your productivity",
    "Ways to develop a growth mindset",
    "The key to networking effectively",
    "How to navigate the first few days of your internship/graduate role",
    "Commercial awareness: what is it and how can I build my skills?",
  ];

  const listItems3 = [
    "How to handle stress in the workplace",
    " How to be happier at work",
    "3 simple changes that will make you happier at work",
    "Signs that work may be affecting your mental health and what to do",
  ];

  const listItems4 = [
    "Interviews and deep insights on the industry by",
    "Jade Adewunmi",
    "Jadesola Adesola",
    "Jermaine Robinson",
    "Joseph Boateng",
    "Abdul Alimi",
  ];
  return (
    <div className="w-screen h-screen overflow-scroll  bg-blue-400">
      <Navbar />
      <Header
        titleClassName="text-3xl text-white pt-32 text-center md:text-5xl"
        title="BRIDGING BARRIERS BLOGS"
      />
      <div className="h-full w-full px-10 pb-10 grid  md:grid-cols-2 md:gap-4">
        <div className="mt-10 md:h-full">
          <BlogsComponent
            imageSrc="/jobApplication.jpg"
            listItems={listItemsSet1}
            linkHref="/pages/jobApplication"
            linkText="Learn More"
            subHeaderTitle="Job Application Blogs"
          />
        </div>
        <div className="mt-10">
          <BlogsComponent
            imageSrc="/professionalSkills.jpg"
            listItems={listItemsSet2}
            linkHref="/pages/professionalSkills"
            linkText="Learn More"
            subHeaderTitle="Professional Skills Blogs"
          />
        </div>
        <div className="mt-10">
          <BlogsComponent
            imageSrc="/wellbeing.jpg"
            listItems={listItems3}
            linkHref="/pages/jobApplication"
            linkText="Learn More"
            subHeaderTitle="Wellbeing Blogs"
          />
        </div>
        <div className="mt-10 pb-10">
          <BlogsComponent
            imageSrc="/spotlight.jpg"
            listItems={listItems4}
            linkHref="/pages/jobApplication"
            linkText="Learn More"
            subHeaderTitle="Industry Spotlight Blogs"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
