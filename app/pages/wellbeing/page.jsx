import SubjectBlogComponent from "../../components/blogs/blogsSubject/subjectBlogComponent";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import React from "react";

const Wellbeing = () => {
  return (
    <div className="w-screen h-screen overflow-scroll bg-blue-500">
      <Navbar />
      <div className="flex items-center justify-center pt-32">
        <Header
          titleClassName="text-3xl text-white md:text-6xl"
          title="PROFESSIONAL SKILLS"
        />
      </div>
      <div className="h-full w-full mt-10">
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/boost.jpg"
            SubHeaderTitle="3 ways to boost your productivity"
            listItems={listItems1}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/growth.jpg"
            SubHeaderTitle="Ways to develop a growth mindset"
            listItems={listItems2}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/networking.jpg"
            SubHeaderTitle="The key to networking effectively"
            listItems={listItems3}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/firstDay.jpg"
            SubHeaderTitle="How to navigate your first few days of internship / graduate role"
            listItems={listItems4}
          />
        </div>
        <div className="pb-48">
          <SubjectBlogComponent
            imageSrc="/acumen.jpg"
            SubHeaderTitle="Commercial awareness: what is it and how can I build my skills?"
            listItems={listItems5}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wellbeing;
