import SubjectBlogComponent from "../../components/blogs/blogsSubject/subjectBlogComponent";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import React from "react";

const JobApplication = () => {
  const listItems1 = [
    "1 - Use a simple format : Your CV should be plain, easy to read, and structured in a way that highlights your core skills and recent work experience.",
    "2 - Put your name and contact details in the header : It’s important to leave your name and contact details on your CV, so that potential employers can get hold of you for an interview.",
    "3 - Structure your roles for easy reading : Long sentences and chunky paragraphs are a big no when it comes to any CV. You want the reading experience to be as easy as possible for the recruiter, so offering bite-sized, memorable information is preferable.",
  ];

  const listItems2 = [
    "1 - Not tailoring your CV : When hiring, recruiters look at a huge number of applications. That means they know what a generic CV looks like, and you don’t want to get passed over because your CV didn’t do enough to stand out. If you aren’t tailoring your CV to the specific company and role, it says to them that you’re not that interested in their position – instead, you simply want any job you can get. This definitely won’t leave a positive impression on employers",
    "2 - Not using keywords effectively : Keywords can make or break your CV. If you don’t use them at all, the recruiter might find it harder to see why you’re a good match for the role",
    "3 - Including relevant information : Your CV should be no longer than two A4 pages; even better if you can keep it to just one. This means you simply don’t have the space to cover irrelevant information. You need to include only the skills, qualifications, hobbies and employment history that are actually relevant to the role you’re applying for",
    "4 - Spelling or grammatical errors : Last, but certainly not least, you must make sure you proofread your application before submitting. If your CV is full of spelling and grammatical errors, it can look unprofessional or like you didn’t care enough about the role to bother re-reading your application. Proofread your CV several times before applying and perhaps even have someone else look over it just to be sure.",
  ];

  const listItems3 = [
    "1 - Tailor to the specific job : One of the most important rules when preparing your CV is to tailor it to the specific job description and the charity you’re applying for. No two jobs are the same, and, likewise, no two CVs you hand in should be the same.",
    "2 - Make it easier on the eyes : When updating your CV, don’t just tweak the text—be mindful of the design, as well. Make sure there’s plenty of white space so it’s easy for the hiring manager to read. Use clear headings for the various subsections to allow them to skim straight to the parts which interest them the most.",
    "3 - Remove old and irrelevant entries : As you dust off your CV to bring it up to date, it may be time to prune previous entries to make space for new experience and achievements. If you’ve had over a decade in your career path already, leave off some of your earliest entries, particularly when they have nothing to do with your profession now.",
  ];

  const listItems4 = [
    "1 - Show rather than tell : Without evidence, anything you write on your CV is just your opinion, so it’s important to back up statements with facts.",
    "2 - Present evidence : Gather evidence for your CV by keeping notes on your performance and achievements at work throughout the year. List any awards, nominations or special recognition you’ve received and save any positive feedback or endorsements from colleagues or customers",
    "3 - Be authentic : Not being true to yourself is unlikely to lead to happiness and success in a job, so if you’re offered a role based on a different version of yourself, how can you be the real you while doing it? Trust in yourself and be honest about difficulties you’ve faced at work and how you’ve overcome them. This will show you to be humble and authentic.",
  ];

  const listItems5 = [
    "1 - It is easy to read : Anyone reading your CV is short on time. They’re not looking forward to processing a pile of applications. But if your CV is ready to go, you’ve used some tricks to make it easy to process. You’ve carefully weighed what to include, where to include it and how to word it.",
    "2 - It has a professional-looking design : If you want your CV to be readable, you have to design it well. That means text placement, text size, white space, font type, font effects and whatever features you end up integrating: columns, colours, etc.",
    "3 - Your CV highlights your transferable experiences : The person reading your CV is less interested in every task you perform than in the skills you can do as a result of performing those tasks. And not every skill you have needs to have been gained in that sector. Many soft skills can be transferred from jobs you just need to know how to frame them",
  ];

  const listItems6 = [
    "1 - Write everything down : Immediately after your interview, write down everything you can remember about it. Include things you wish you’d said and identify any weak points. Also jot down any questions you’d like to ask or information you’d need if you were made an offer. This is all useful learning",
    "2 - Send a thank you email :  It’s polite to thank the interviewers and it also shows that you’re still interested in the role. Hopefully you’ll have asked for the contact details at the end of the interview but if someone from HR did the organising, then you can send your message to them to forward on. Ideally do this within 24 hours, but don’t wait longer than two to three days.",
    "3 - Prepare for a job offer : We know you don’t have an offer yet and you don’t want to jinx it by being presumptuous, BUT you also don’t want to be on the back foot if you do receive good news. So now’s the time to prepare. Decide what your deal breakers are, work out the minimum salary you’d accept and how you’d want to negotiate. You could also be asked to provide references, so it’s a good idea to start preparing for this.",
    "4 - Prepare for bad news : Just as you should be prepared for an offer, you should also prepare for a rejection. And by this we mean continue browsing and applying for jobs, and going to interviews. Having more options is good for a number of reasons: less disappointment if you don’t get a role, more practice at applying and interviewing and a better understanding of what you really want from your next role.",
  ];
  const listItems7 = [
    "1 - Why do you want to work in the sector : If you really want to stand out, then you have to be very specific about it. Tell your interviewer what your contribution to the industry would be, what ideas and strategies you have, and why you’re passionate about this particular cause.",
    "2 - Tell us about yourself : You have to tell the interviewer what you can really bring to the table. This is the chance to explain how your skills can help you succeed in the sector. Highlight any experience that you’ve had and confirm that you’re the right person for the role by explaining more about your past successes.",
    "3 - What are your weaknesses : We all have our weaknesses. So when an interviewer asks this question, they want to know whether you are able to be honest about your flaws as well as approach them positively.",
    "4 - Why should we hire you : This question is the best opportunity for you to highlight your unique skills. Consider this as your elevator pitch and think about which of your skills would be beneficial for this particular role.",
  ];

  const listItems8 = [
    "1 - Carefully research the company you’re applying to : It’s not enough to glance at a company’s website in the five minutes before your interview. Statistics from Twin Employment &amp; Training show that 47% of interviewers wouldn’t offer the job to a candidate if they had little knowledge of their work. So take a deep-dive into your prospective future employer’s recent campaigns and initiatives",
    "2 - Practise positive body language : A survey of 2,000 hiring managers found that 33% knew whether they would hire someone in the first 90 seconds. This shows how important first impressions really are. Remember to greet your interviewers with a warm smile and be prepared to briefly summarise your motivation for applying to their company and your career history, as these are the two things that are most commonly asked for at the beginning of every interview.",
    "3 - Prepare for the most common questions related to your role : Take the time to do some research into the most commonly asked recruitment questions for your position. Then take your preparation a step further and think about the answers to these in the context of the charity you’re applying to.",
  ];

  const listItems9 = [
    "1 - Don’t bad-mouth your past employers : It may be tempting, but it’s important to avoid bad-mouthing your previous employer. This shows your ability to remain professional and positive and won’t cast doubt on whether your attitude is right for the position you’re applying for.",
    "2 - Don’t ignore the importance of research : Make sure that you take the time to carefully read through their website. Take in some of the recent initiatives and campaigns and understand the company’s values. It’s always impressive if you delve deeper into the role you’re applying for",
    "3 - Don’t use cliches when speaking about your weaknesses : Be honest but make sure any weakness you mention doesn’t create serious doubt about your willingness or ability to carry out the role. Instead, think about feedback that you’ve received from a past line manager and focus on the steps you’ve taken to improve on that area",
    "4 - Don’t fall back on your application : A recruiter wants to hear you speak about your motivation. That’s why answering, “It’s all in my application,” is never the right way to go. It risks making you sound impatient at best, and at worst, lazy or impolite. So try to always be as enthusiastic as possible and give full answers to every question.",
  ];
  const listItems10 = [
    "1 - Think about your passion : Doing a job that fits your passion will lead to you being happier at work. Being happy at work and loving what you do is an overall productivity booster and enhances performance. People who enjoy their jobs are more likely to be optimistic, motivated, learn faster, make fewer mistakes, and make better business decisions.",
    "2 - Learn from someone else’s journey : Learning from other people's behaviour and their resulting mistakes and successes is more efficient than figuring things out on your own.",
    "3 - Discover which environment is right for you : Your work environment impacts your mood, drive, mental health and performance. If you work in a dreary office setting with unfriendly workers, you likely won't have enough confidence or job satisfaction to speak up.",
  ];
  return (
    <div className="w-screen h-screen overflow-scroll bg-blue-500">
      <Navbar />
      <div className=" flex items-center justify-center pt-32 ">
        <Header
          titleClassName="text-3xl text-white md:text-6xl"
          title="JOB APPLICATION BLOG"
        />
      </div>
      <div className="h-full w-full mt-10">
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/cvLayout.jpg"
            SubHeaderTitle="How to create a good CV layout"
            listItems={listItems1}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/mistakes.jpg"
            SubHeaderTitle="4 CV mistakes to avoid"
            listItems={listItems2}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/updateCV.jpg"
            SubHeaderTitle="How to update your CV without ruining it"
            listItems={listItems3}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/goodCV.jpg"
            SubHeaderTitle="How to sell yourself on your CV without going overboard"
            listItems={listItems4}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/goodSigns.jpg"
            SubHeaderTitle="3 signs that your CV is in good shape"
            listItems={listItems5}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/interview.jpg"
            SubHeaderTitle="5 things to do after a job interview"
            listItems={listItems6}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/interviewQuestions.jpg"
            SubHeaderTitle="The hardest interview questions to answer and how to answer them"
            listItems={listItems7}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/preperation.jpg"
            SubHeaderTitle="How to thoroughly prepare for an interview"
            listItems={listItems8}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/avoid.jpg"
            SubHeaderTitle="Things to avoid saying in an interview"
            listItems={listItems9}
          />
        </div>
        <div className="pb-48">
          <SubjectBlogComponent
            imageSrc="/careerPath.png"
            SubHeaderTitle="How to find the right career path"
            listItems={listItems10}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobApplication;
