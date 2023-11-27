import SubjectBlogComponent from "../../components/blogs/blogsSubject/subjectBlogComponent";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import React from "react";

const IndustrySpotlight = () => {
  const listItems1 = [
    <div>
      <strong>
        What is one piece of advice you would give someone looking to get into
        the professional services industry?
      </strong>
      <br />
      One piece of advice I would offer someone looking to get into the industry
      that I work in is that resilience is key. Sometimes it might feel like you
      are out of touch with those around you or that the the work you are facing
      is beyond your capabilities. But I would say, that if you’re feeling like
      an imposter then that’s a sign that you’re outside of your comfort zone
      which is a good thing! It’s a sign that you’re growing and developing,
      because you can’t elevate yourself without challenging yourself. So, when
      things start to feel difficult, think of it as an opportunity to grow and
      try your best to see the challenge through.
    </div>,

    <div>
      <strong>
        What is one thing you wish you knew whilst you was at university?
      </strong>
      <br />
      One thing I wish I knew at university is: when people tell you that your
      university days are the best days of your life, they aren’t lying!
      University gives you the chance to develop yourself and find yourself more
      than ever before. You’re meeting new people all the time. You’re learning
      new skills and gaining life experience. On top of that, you’re studying
      new things all the time. Rarely in post graduate life do you get to spend
      huge chunks of your day dedicated purely to pursuing knowledge and
      studying areas of your own interest. Make the most of it!
    </div>,
    <div>
      <strong>
        How and where do you find inspiration to stay disciplined?
      </strong>
      <br />
      Throughout my career, there have naturally been moments where I struggled
      to stay motivated, whether it was at the job application stage when I
      sometimes doubted my abilities or in the job itself when the work was
      proving challenging. One thing that helps me stay disciplined in these
      moments is remembering that every struggle is temporary. There will always
      be hurdles to overcome when you’ve set big goals for yourself. Sometimes
      you’ll get turned down for a job. Sometimes you’ll be thrown into a task
      that you feel like you can’t complete. But when I think of these moments
      as just that – moments – that will eventually pass, it motivates me to
      stay disciplined and keep pushing on. A time I felt like I’d messed up and
      failed
      <br />
      For one of the first graduate scheme applications I made, I had to go for
      an assessment centre which involved completing a set of psychometric tests
      as well as an interview if you passed the tests. We were given a certain
      amount of time to complete the tests, but I misheard the amount of time we
      were being given and mistakenly thought we had longer than we did. When
      they announced that the test was over, I hadn’t completed all of the
      answers and therefore failed the assessment, meaning I couldn’t continue
      with the application process. I was really hopeful about this opportunity,
      so I naturally felt crushed. Feeling rejected, I remember telling my dad
      that I was scared that I wouldn’t be able to secure an offer and he told
      me that as long as I didn’t give up, I would get that offer eventually. I
      kept going and not long after managed to secure a position at a company
      that I liked it even more!
    </div>,
    <div>
      <strong>
        What is one key skill that you think is necessary to have, in order to
        be successful in the industry you work in?
      </strong>
      <br />I would say that a key skill you need to work in audit/ accounting
      is organisation. Sometimes you’ll have lots of different things on your
      plate and it can feel like you’re being pulled in lots of different
      directions. Making weekly/ daily lists where you can note down all your
      tasks in one place will really help you structure your day and stay on top
      of your obligations. Setting reminders or blocking out time in your diary
      for specific tasks also really helps you stay on top of those really
      important tasks which might be a higher priority.
    </div>,
  ];
  const listItems2 = [
    <div>
      <strong>
        What is one piece of advice that you would give to someone looking to
        get into the industry you work in?
      </strong>
      <br />
      Find someone within the civil service who can review your answers to the
      behaviour questions on the application form. Someone who can give you
      advice on how to structure them and what each question is really trying to
      ask.
    </div>,
    <div>
      <strong>
        What is one thing that you wish you knew whilst you were at university?
      </strong>
      <br />
      More details on different kinds of jobs out there and more info about what
      people actually do on a day to day basis.
    </div>,
    <div>
      <strong>
        Was there a time you messed up and felt like you’d failed? How did you
        bounce back?
      </strong>
      <br />
      Yes, I can't avoid failure but one thing I have learnt is that it’s often
      not as bad as you think it is. Also honesty is the best policy and makes
      it easier to move forward. Lastly, having grace in myself, I’m only human
      and did the best with the information/guidance I had at the time.
    </div>,
    <div>
      <strong>
        What is one key skill that you think is necessary to have, in order to
        be successful in the industry you work in?
      </strong>
      <br />I think the ability to learn is important. Having the skill and the
      patience to pick up something new and become a master of it over time.
      People come from a wide range of backgrounds but quickly learn the ways of
      working in the civil service and the kind of work expected.
    </div>,
  ];
  const listItems3 = [
    <div>
      <strong>
        What is one piece of advice that you would give to someone looking to
        get into the industry you work in?
      </strong>
      <br />I would encourage building a network immediately. Property is a
      people’s business therefore your network is everything. On paper, you may
      be an eligible candidate, however, you are competing with several other
      eligible candidates as well. As a result, knowing the right people in the
      right places would certainly prove useful. Furthermore, you stand a better
      chance of gaining a more realistic insight on the industry itself through
      your network than simply researching online (which you should also do).
    </div>,
    <div>
      <strong>
        What is one thing that you wish you knew whilst you were at university?
      </strong>
      <br />I wish I knew what the various career prospects were for the degree
      I was studying. University didn’t necessarily equip us with that
      information at the time and I strongly believe that universities need to
      do more on the after care of students post-graduating as from personal
      experience it was challenging navigating the real world with limited
      guidance/support fresh out of university.
    </div>,
    <div>
      <strong>
        How and where do you find inspiration to stay disciplined?
      </strong>
      <br />
      My inspiration to stay disciplined stems from my humble beginnings growing
      up in an impoverished neighbourhood and my determination to better my
      livelihood.
    </div>,
    <div>
      <strong>
        Was there a time you messed up and felt like you’d failed? How did you
        bounce back?
      </strong>
      <br />
      Dating back to 2019, I thought I wanted to delve into Engineering so I
      decided to undertake a master’s degree at the University of Birmingham.
      Upon commencement on the course, I realised I had made a terrible decision
      leaving my job and moving up to Birmingham (originally from London) to
      study this program as the course was simply not for me and I had no
      passion or interest in anything that was being taught. The reason why it
      felt like a failure to me was because I incurred more debt in the form of
      student loans to fund the course and also wasted valuable time. It was an
      impulsive decision that sounded correct in the moment however, it was
      baseless and hopeful thinking without any real research and due diligence.
      To conclude, I withdrew from the program and came back to London, I did
      extensive research and connected with several professionals in industries
      I was interested in which ultimately, resulted to where I’m at today – on
      route to qualifying as a Chartered Surveyor with an MSc degree in
      International Real Estate and Planning at UCL. Moral of the story – Be
      Resourceful.
    </div>,
    <div>
      <strong>
        What is one key skill that you think is necessary to have in order to be
        successful in the industry you work in?
      </strong>
      <br />
      Fostering relationships is a fundamental skill in the Property industry
      that will pay huge dividends in the form of opportunities, business
      generation, accessibility, recognition and exposure to information. With
      that being said, competency is equally as important however, that is
      something you can easily hone and develop personally in your own time.
    </div>,
  ];
  const listItems4 = [
    <div>
      <strong>
        What is one piece of advice that you would give to someone looking to
        get into the industry you work in?
      </strong>
      <br />
      Have good communication skills followed by confidence. Be a sponge also
      but have goal points of things of which you can see yourself archiving
      with your talent and also understand the business of fashion. - If you can
      find a great mentor who can help you along then definitely go that route!
    </div>,
    <div>
      <strong>
        What is one thing that you wish you knew whilst you were at university?
      </strong>
      <br />
      Wish I had known how little university would amount to aside from the
      creative side, I could have done without going.
    </div>,
    <div>
      <strong>
        How and where do you find inspiration to stay disciplined?
      </strong>
      <br />
      I'm doing everything from the lenses of a career. That alone plus other
      living costs will have to be disciplined as it isn't a hobby at this
      point.
    </div>,
    <div>
      <strong>
        Was there a time you messed up and felt like you’d failed? How did you
        bounce back?
      </strong>
      <br />
      Definitely! It's only natural you mess up along the way but the key is to
      shrug it off, understand what has happened. Learn from it and continue to
      keep going. As long as you do not give up on yourself. You're good. You
      can bounce back.
    </div>,
    <div>
      <strong>
        What is one key skill that you think is necessary to have, in order to
        be successful in the industry you work in?
      </strong>
      <br />
      Self belief and continuity. Having this state of mind can be dangerously
      great! It will get you far.
    </div>,
  ];
  const listItems5 = [
    <div>
      <strong>
        What is one piece of advice that you would give to someone looking to
        get into the industry you work in?
      </strong>
      <br />I would group my one piece of advice into two words. Be proactive
      and curious. I would say be proactive because it is essential for grasping
      opportunities. One way to be proactive is through networking, connecting
      with people and reaching out to them through platforms such as LinkedIn,
      asking for advice. Furthermore, I would say that there are other means,
      such as applying and attending insight days, spring weeks, and taking part
      in social mobility programmes, such as Upreach, Rare Recruitment and now
      Bridging Barriers springs to mind. This leads to the second buzz word,
      which is curiosity. To be curious is to show interest and a deeper
      propensity to learn and engage, this can be achieved through asking
      questions. This sets you apart, showing that you are interested and
      willing to learn will really aid people’s perceptions of you during
      Internships. As much as internships etc. are a way for companies to see
      whether you are a right fit, the inverse is also true. Therefore, it is
      also important to stay curious by exploring different areas of banking as
      well, as it is very broad, keep an open mind, shadow people, and connect
      for coffee chats, this will really help you to navigate where you want to
      go.
    </div>,
    <div>
      <strong>
        What is one thing that you wish you knew whilst you were at university?
      </strong>
      <br />
      It is a marathon not a sprint. This is the first thing that springs to
      mind, Going to University, you have people that are on it, when I say
      this, by on it I mean that they apply for 40 different internships, a lot
      of them are applying for the sake of it, but that can be daunting to those
      that are just trying to get by and secure their degree. I would stress
      that you should always go for quality over quantity, really think about
      the quality of your application over quantity, and question whether you
      can see yourself at this company or aligned with the culture of the
      organisation, which will help you make a more informed application, slow
      and steady wins the race. Returning to the theme of marathon not a sprint,
      I would say that do not think it’s game over if you miss out on
      internships or heavily coveted spring weeks, focus on getting a good
      degree and really building your transferable skills if possible through
      other experiences, there are further opportunities to break into the
      industry, the key focus and selling point should be your skillset, you can
      always upskill via bootcamps and extra courses.
    </div>,
    <div>
      <strong>
        How and where do you find inspiration to stay disciplined?
      </strong>
      <br />
      It is difficult to always stay disciplined and fully motivated, I am
      certain that almost everyone goes through peaks and troughs with regards
      to this. However, some of the tools I used to keep me disciplined are
      asking questions. For example, what is the end-goal? What do you want to
      achieve by engaging in this activity or task? There are days for instance,
      I don’t want to work out, but my end goal is to build a strong physique,
      that helps me to maintain discipline, same with work as well, not every
      single aspect of work will always be fun and engaging, there will be
      administrative and mundane aspects that are almost composite in every
      role, but it is important to think about the bigger picture, i.e. is there
      room for growth, good progression, and most importantly intrinsic and
      extrinsic fulfilment. In terms of where I find inspiration, it comes from
      connecting with people, whether that is friends and family, or even work
      colleagues, seeing what they are getting up to motivates me to go harder
      and strive to be the best version of myself.
    </div>,
    <div>
      <strong>
        Was there a time you messed up and felt like you’d failed? How did you
        bounce back?
      </strong>
      <br />
      Failure is an inevitable aspect of growth, throughout my short stint in
      banking so far, it has not always been perfect. I have made mistakes,
      particularly during the early stages of my graduate roles and Internships.
      I was particularly coy about asking for help from my management. One time,
      this adversely impacted me as I was working on a task and produced some
      material completely at odds with what was asked from my Line Manager,
      looking back it was relatively easy to fix, but at that moment, I felt
      like it was make or break. Since then, I have learnt to be more
      comfortable seeking help, but not in a way that completely transfers the
      workload to someone else, but more in the sense of asking clarifying
      questions or showcasing my understanding through the work I’ve produced,
      and getting it opined on through an iterative approach. This is just one
      example, there are many and more to come, but the key is to try to
      understand those failures, learn from them and come back stronger.
    </div>,
    <div>
      <strong>
        What is one key skill that you think is necessary to have, in order to
        be successful in the industry you work in?
      </strong>
      <br />
      In banking, people skills reign king, no role is seldom in isolation, you
      have to know how to deal with people, team work really is an important
      facet the role, and in order to thrive, you need to be a team player, be
      positive and be embracive. Skills can be taught and picked up over time,
      but one thing that is important and within your control is your attitude
      to your environment, do you maintain a positive attitude? Are you someone
      that is likeable and dependable? This is essential for the industry and
      how people perceive you.
    </div>,
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
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/JadesolaAdesola.jpg"
            SubHeaderTitle="Senior Policy Advisor at Ministry of Justice (Government & Public Sector)(Professional Services)"
            listItems={listItems2}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/AbdulAlimi.jpg"
            SubHeaderTitle="Graduate Surveyor at Knight Frank (Real Estate)"
            listItems={listItems3}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/JermaineRobinson.jpg"
            SubHeaderTitle="Stylist and Creative Consultant (Creative)"
            listItems={listItems4}
          />
        </div>
        <div className="pb-48">
          <SubjectBlogComponent
            imageSrc="/JosephBoateng.jpg"
            SubHeaderTitle="Senior Analyst at BNY Mellon (Banking & Finance)"
            listItems={listItems5}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndustrySpotlight;
