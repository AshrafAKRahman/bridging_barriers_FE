import SubjectBlogComponent from "@/app/components/blogs/blogsSubject/subjectBlogComponent";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import React from "react";

const JobApplication = () => {
  const listItems1 = [
    "1 - Use a simple format: Your CV should be plain, easy to read, and structured in a way that highlights your core skills and recent work experience.",
    "2 - Put your name and contact details in the header: It’s important to leave your name and contact details on your CV, so that potential employers can get hold of you for an interview.",
    "3 - Structure your roles for easy reading: Long sentences and chunky paragraphs are a big no when it comes to any CV. You want the reading experience to be as easy as possible for the recruiter, so offering bite-sized, memorable information is preferable.",
  ];

  const listItems2 = [
    "1 - Not tailoring your CV When hiring, recruiters look at a huge number of applications. That means they know what a generic CV looks like, and you don’t want to get passed over because your CV didn’t do enough to stand out. If you aren’t tailoring your CV to the specific company and role, it says to them that you’re not that interested in their position – instead, you simply want any job you can get. This definitely won’t leave a positive impression on employers",
    "2 - Not using keywords effectively Keywords can make or break your CV. If you don’t use them at all, the recruiter might find it harder to see why you’re a good match for the role",
    "3 - Including relevant information Your CV should be no longer than two A4 pages; even better if you can keep it to just one. This means you simply don’t have the space to cover irrelevant information. You need to include only the skills, qualifications, hobbies and employment history that are actually relevant to the role you’re applying for",
    "4 - Spelling or grammatical errors Last, but certainly not least, you must make sure you proofread your application before submitting. If your CV is full of spelling and grammatical errors, it can look unprofessional or like you didn’t care enough about the role to bother re-reading your application. Proofread your CV several times before applying and perhaps even have someone else look over it just to be sure.",
  ];

  const listItems3 = [
    "1 - Tailor to the specific job: One of the most important rules when preparing your CV is to tailor it to the specific job description and the charity you’re applying for. No two jobs are the same, and, likewise, no two CVs you hand in should be the same.",
    "2 - Make it easier on the eyes: When updating your CV, don’t just tweak the text—be mindful of the design, as well. Make sure there’s plenty of white space so it’s easy for the hiring manager to read. Use clear headings for the various subsections to allow them to skim straight to the parts which interest them the most.",
    "3 - Remove old and irrelevant entries: As you dust off your CV to bring it up to date, it may be time to prune previous entries to make space for new experience and achievements. If you’ve had over a decade in your career path already, leave off some of your earliest entries, particularly when they have nothing to do with your profession now.",
  ];

  const listItems4 = [
    "1 - Show rather than tell: Without evidence, anything you write on your CV is just your opinion, so it’s important to back up statements with facts.",
    "2 - Present evidence: Gather evidence for your CV by keeping notes on your performance and achievements at work throughout the year. List any awards, nominations or special recognition you’ve received and save any positive feedback or endorsements from colleagues or customers",
    "3 - Be authentic: Not being true to yourself is unlikely to lead to happiness and success in a job, so if you’re offered a role based on a different version of yourself, how can you be the real you while doing it? Trust in yourself and be honest about difficulties you’ve faced at work and how you’ve overcome them. This will show you to be humble and authentic.",
  ];
  return (
    <div className="w-screen h-screen overflow-scroll bg-blue-500">
      <Navbar />
      <div className=" flex items-center justify-center pt-24">
        <Header
          titleClassName="text-3xl text-white md:text-6xl"
          title="Job Application Blog"
        />
      </div>
      <div className="h-full w-full grid md:grid-cols-2 space-y-0 ">
        <SubjectBlogComponent
          imageSrc="/cvLayout.png"
          SubHeaderTitle="How to create a good CV layout"
          listItems={listItems1}
        />

        <SubjectBlogComponent
          imageSrc="/mistakes.jpg"
          SubHeaderTitle="4 CV mistakes to avoid"
          listItems={listItems2}
        />

        <SubjectBlogComponent
          imageSrc="/updateCV.jpg"
          SubHeaderTitle="How to update your CV without ruining it"
          listItems={listItems3}
        />

        <SubjectBlogComponent
          imageSrc="/goodCV.jpg"
          SubHeaderTitle="How to sell yourself on your CV without going overboard"
          listItems={listItems4}
        />
      </div>
      <Footer />
    </div>
  );
};

export default JobApplication;
