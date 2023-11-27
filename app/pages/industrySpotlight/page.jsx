import SubjectBlogComponent from "../../components/blogs/blogsSubject/subjectBlogComponent";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import React from "react";

const IndustrySpotlight = () => {
  const listItems1 = [
    <div key="question" className="mb-5">
      <strong>
        What is one piece of advice you would give someone looking to get into
        the professional services industry?
      </strong>
      <br />
      One piece of advice I would offer someone looking to get into the industry
      that I work in is that resilience is key.
    </div>,
    // Sometimes it might feel like you are out of touch with those around you or that the the work you are facing is beyond your capabilities. But I would say, that if you’re feeling like an imposter then that’s a sign that you’re outside of your comfort zone which is a good thing! It’s a sign that you’re growing and developing, because you can’t elevate yourself without challenging yourself. So, when things start to feel difficult, think of it as an opportunity to grow and try your best to see the challenge through.",
    // "What is one thing you wish you knew whilst you was at university? : One thing I wish I knew at university is: when people tell you that your university days are the best days of your life, they aren’t lying! University gives you the chance to develop yourself and find yourself more than ever before. You’re meeting new people all the time. You’re learning new skills and gaining life experience. On top of that, you’re studying new things all the time. Rarely in post graduate life do you get to spend huge chunks of your day dedicated purely to pursuing knowledge and studying areas of your own interest. Make the most of it!",
    // "How and where do you find inspiration to stay disciplined? : Throughout my career, there have naturally been moments where I struggled to stay motivated, whether it was at the job application stage when I sometimes doubted my abilities or in the job itself when the work was proving challenging. One thing that helps me stay disciplined in these moments is remembering that every struggle is temporary. There will always be hurdles to overcome when you’ve set big goals for yourself. Sometimes you’ll get turned down for a job. Sometimes you’ll be thrown into a task that you feel like you can’t complete. But when I think of these moments as just that – moments – that will eventually pass, it motivates me to stay disciplined and keep pushing on. A time I felt like I’d messed up and failed. For one of the first graduate scheme applications I made, I had to go for an assessment centre which involved completing a set of psychometric tests as well as an interview if you passed the tests. We were given a certain amount of time to complete the tests, but I misheard the amount of time we were being given and mistakenly thought we had longer than we did. When they announced that the test was over, I hadn’t completed all of the answers and therefore failed the assessment, meaning I couldn’t continue with the application process. I was really hopeful about this opportunity, so I naturally felt crushed. Feeling rejected, I remember telling my dad that I was scared that I wouldn’t be able to secure an offer and he told me that as long as I didn’t give up, I would get that offer eventually. I kept going and not long after managed to secure a position at a company that I liked it even more!",
    "What is one key skill that you think is necessary to have, in order to be successful in the industry you work in? : I would say that a key skill you need to work in audit/ accounting is organisation. Sometimes you’ll have lots of different things on your plate and it can feel like you’re being pulled in lots of different directions. Making weekly/ daily lists where you can note down all your tasks in one place will really help you structure your day and stay on top of your obligations. Setting reminders or blocking out time in your diary for specific tasks also really helps you stay on top of those really important tasks which might be a higher priority.",
  ];

  return (
    <div className="w-screen h-screen overflow-scroll bg-blue-500">
      <Navbar />
      <div className="flex items-center justify-center pt-32">
        <Header
          titleClassName="text-3xl text-white md:text-6xl"
          title="INDUSTRY SPOTLIGHT"
        />
      </div>
      <div className="h-full w-full mt-10">
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/JadeAdewunmi.jpg"
            SubHeaderTitle="Jade Adewunmi - Audit Associate at KPMG (Professional Services)"
            listItems={listItems1}
          />
        </div>
      </div>
    </div>
  );
};

export default IndustrySpotlight;
