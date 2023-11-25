import SubjectBlogComponent from "../../components/blogs/blogsSubject/subjectBlogComponent";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import React from "react";

const ProfessionalSkills = () => {
  const listItems1 = [
    "1 - Remember, it’s okay to take breaks : They allow you to step away from your working space and ease your mind. Take a walk around the office, or spend ten minutes of your lunch break outside. Little actions like these may seem small, but they help to give your brain a break and mean you’ll go back to the task with a clearer mind, ready to re-focus.",
    "2 - Learn to balance your workload : Like lists. According to psychologist Art Markman, there are three psychological benefits to drawing up a list of tasks: 1 Writing things down makes you remember them better 2 Planning turns abstract goals into concrete work 3 It’s a useful exercise for fighting the interruptions that will inevitably come up. In other words, being more organised means you’re not letting other tasks get in the way of the big picture things you need to get done.",
    "3 - Give yourself a digital detox : Often distracted by notifications popping up on your phone screen? You’ll be far more productive if you put your phone on flight mode during the working day.",
  ];
  const listItems2 = [
    "1 - Developing a growth mindset is essential if you want to overcome obstacles you may face when learning something new, developing a new skill, securing a job or any difficulty that life throws at you really. See below five tips on how you can develop a growth mindset.",
    "2 - Stop seeking approval from others : Instead, practise self-acceptance and self-approval. As you begin to trust yourself",
    "3 - Self-reflection : Reflecting on your progress will help you develop a growth mindset. Daily, you should reflect on what you’ve done, what you’ve learnt and what steps you’re going to take next from whatever it is.",
    "4 - See mistakes as opportunities to learn : Learning new things will help you to get out of your comfort zone and challenge yourself. You will see problems as challenges instead and adopt a growth mindset.",
    "5 - Challenge yourself to try one new thing every day : Doing this will push you out of your comfort zone and challenge yourself. You are likely to discover new things you enjoy and learn more about yourself too!",
    "6 - Focus on the journey, not the end goal : Sometimes, the end goal can be far and this can demotivate and discourage you. However, it is important to trust the process and focus on the experience. Focus on how you will learn and grow as a person, instead of asking yourself “what if it doesn’t work”.",
  ];
  const listItems3 = [
    "Networking is one of the most essential skills to have if you ought to succeed in life. Research shows that 85% of jobs are filled through networking and 70% of jobs are never published publicly. If you want to stand out from the crowd, you must be able to exercise good networking skills. Beginning a conversation with a stranger can sometimes feel awkward or stressful, so practising beforehand or having a plan for the event can help you to interact with confidence. Here are more tips to help you  introduce yourself well at a networking event:",
    "1 - Start with a single person : It can be easier to walk up to one individual than it is to approach a group. You could begin introducing yourself by looking for someone else who is alone. They might also be nervous or shy, which could make starting a conversation easier. You can build your confidence and work your way up to joining a group.",
    "2 - Be bold and make the first move by introducing yourself : This is extremely important when it comes to networking. Always remind yourself that getting out of your comfort zone is the best way to create opportunities for yourself. If introducing yourself makes you nervous or if you are unsure your approach is effective, consider practising with friends or family members before going to the event.",
    "3 - Break the ice by finding out what you have in common This is a great way to build a rapport with someone. When introducing yourself, it will be great to include information on where you are from in terms of country and area, hobbies, skills and interests, and maybe a fun fact about yourself! This is a great way to break the ice and also ask the person the same question and see if there is something you may have in common.",
    "4 - Research the event : Look online for information about the speakers, program and attendees. Knowledge can give you confidence in a new environment, let you know of common ground to discuss and help you make a plan for who you would like to introduce yourself to.",
  ];
  const listItems4 = [
    "Settling into your new role can be daunting sometimes, especially when you don’t know anyone working there and you can’t see anyone who looks like you. So how do you stand out and make a good impression? See below some tips on how to stand out and make a good first impression:",
    "1 - Meet your co-workers on day one Introduce yourself to everyone in your department. This is a great way to stand out when you are new to a role and haven’t yet settled in. It can also help ease your transition into a new work environment. It enables you to build positive, friendly relationships at work with people who can offer you important guidance during your first days at your new job.",
    "2 - Ensuring that you know what is expected of you : This is really important because you don’t want to have to second guess and be unsure about what you need to do. The best thing to do is get clarity from your manager and team members so that you know that you are on the right track - ask questions if you are unsure.",
    "3 - Don’t be afraid to ask questions! : This leads me nicely onto the next point - do not be afraid to ask questions. I am sure you have heard of the saying - “there is no such thing as a stupid question”, it sounds cliche, but it’s true, especially in the workplace. Asking questions is actually a great way to build your career knowledge and show your team your willingness to learn",
    "4 - Stay organised : Organisation skills is one of the most sought after skills in employees and it’s something that employers look for in candidates. Having great organisation skills is really important and can help   you to stay on top of your workload, especially early in your career. One way that you can stay organised is to utilise your calendar to ensure you are up to date with tasks.",
  ];
  const listItems5 = [
    "Also referred to as ‘Business acumen’ Commercial awareness is an understanding of how industries and businesses work. It’s about knowing what’s going on in the world and analysing the way it might impact your chosen sector and company. Being commercially aware is a core skill that most employers look for, particularly in the application and interview stage, so it’s essential that you’re aware of what it is and how it can help you stand out in the application process. See below four tips on how you can build your commercial awareness skills.",
    "1 - Research the firm : Researching the firm’s structure is very beneficial for you and the firm. This is especially important when working with a business client or an organisation with a large global team and will require you to know the exact details of each team and its key stakeholders. Many brands will publish news or blogs, and distribute research materials that help showcase their core expertise. Following these materials can help you improve your brand’s commercial awareness. Researching the firm helps you understand its exact position, competitors, principles, working models, customer base, financial planning, expansion plans in the future, current debt, etc.",
    "2 - SWOT analysis, which stands for Strength, Weaknesses, Opportunities, and Threats, enables you to know the firm’s current position by assessing the external and internal factors that would affect the business at any stage. This analysis of the company’s position and standing can provide a clear picture of what the organisation is and where it can go by focusing on its strengths and other aspects crucial for business success. SWOT analysis helps you boost your commercial awareness skills. In addition to SWOT analysis, there is also a lesser-known industry term that is equally essential PESTLE analysis provides the most detailed framework to help one get into the core aspects of the business. With PESTLE analysis the following factors are considered:     ● Political ● Economic ● Social ● Tech ● Legal ● Environmental. Since PESTLE analysis uses specific industry terminologies, these details help create a long-term strategy for the organisation. They can create a solid understanding of the business and its commercial importance.",
    "3 - Read stories you’re truly interested in Improving your commercial awareness doesn’t have to be a chore. Discover what you’re truly interested in and learn from there. When using story examples in an interview or assessment centre to demonstrate your commercial awareness, employers will be able to see if you’re truly interested and passionate about the topic.",
    "4 - Stay up to date : Once you have developed a sound understanding of a company and its competitors, it’s important to look more widely at the landscape in which it operates, and the external factors that may affect that business or sector. There’s an overwhelming array of content out there (see below for more information). As well as keeping up to date with the bigger global financial and economic picture, concentrate on more in-depth news and analysis in the areas that interest you most; that way you’ll be able to form your own opinions and demonstrate your understanding of the issues affecting your industry or sector. Resources/Recommendations ● The Times, ● FT News Briefing ● City AM ● Radio 4: Today’s Programme ● 10 mins of daily reading e.g. Finimize daily email updates ● Join or start a University Society e.g. Finance or Commercial Awareness society (whatever industry you wish to get into) ● The Commercial Awareness Podcast - commercial awareness news round-up for prospective and current UK-based corporate lawyers (insert spotify link) ● Association of Chartered Certified Accountants – Podcasts on a range of issues from the financial crisis to working remotely/ coronavirus, to moving towards a greener tax system ● Economists Podcast - Current affairs, business and finance, science and technology and global issues – economist.com/podcasts ● The Economist: Money Talks ● ICAEW Insights ● ICAEW UK Business Confidence Monitor",
  ];
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

export default ProfessionalSkills;
