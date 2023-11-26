import SubjectBlogComponent from "../../components/blogs/blogsSubject/subjectBlogComponent";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import React from "react";

const Wellbeing = () => {
  const listItems1 = [
    "Working in a high paced environment can be very stressful sometimes and if it’s your first time doing so, it is even worse. It is very important to make sure that you prioritise your wellbeing, and we’d like to give you some tips on how you can handle stress in the workplace.",
    "Exercise regularly : By exercising more, you will begin to shed your daily tensions through movements and physical activity. It also improves your sleep, which is often disrupted by stress and anxiety.",
    "Take frequent breaks : A break from work can work wonders for you. Stress drains out most of your energy, time and efficiency; so dedicating a few days to yourself can be a great way to hit the reset button. If things get a little too much, try putting some time aside to work on your hobbies and do the things you enjoy.",
    "Don’t forget to have fun : Many studies have provided evidence that having fun after stressful work environments lifts a person’s mood. Don’t put off socialising with your friends and family, even if it’s just over video chat or on the phone; keep talking to people in your networking relationships. Just because you’ve got a busy work life doesn’t mean you should put off time for yourself.",
  ];
  const listItems2 = [
    "Find a career you love : Finding a career that motivates you in the first place is going to lead to you feeling happier at work. Many people aren’t happy in their jobs because they lack a sense of purpose",
    "Take an interest in your work : Naturally, if you’re making progress and learning in your job, you’re going to feel happier.",
    "Be intentional with rest : Make sure you have time to breathe in the mornings before heading to work, whether that’s in an office or at home. Put on your favourite song, make yourself breakfast, or get outside for some fresh air. Whatever you do, make sure it leaves you feeling relaxed, refreshed and ready to start the day.",
    "Make friends with your colleagues : On workdays, our colleagues are the people we spend the most time with. So, it’s important to have at least a few colleagues who you can have a laugh with during the day. Chatting with colleagues also offers a chance to destress and take a break during the day, which also plays into increased wellbeing.",
  ];

  const listItems3 = [
    "1 - Realise that success and happiness are not the same thing : You’ve got to change your perspective. Stop focusing on being successful first and work on being happy. If you can do that, then you’ll be successful as a matter of course.",
    "2 - Don’t skip out on holidays : Many people have this misguided misconception that if they want to get ahead, they have to sacrifice, and one of the first things they sacrifice is their holidays. Holidays are actually good for your career. Holidays offer you a chance to get away, recharge, get distance from what you’re doing and rearrange your priorities.",
    "3 - Learn to frame things differently : It turns out that how you frame the world around you impacts how well you do in certain jobs and how happy you feel. If you go into a situation thinking the worst, chances are you’re not going to give it one hundred percent",
  ];

  const listItems4 = [
    "1 - Consider your priorities : If the balance doesn’t feel right for you at the moment, then start by thinking about what you’d like to have more time for—or what you’re missing out on—and where you might want to make a change. Not really sure where the day goes? Keep a diary of how you spend your time for a few weeks.",
    "2 - Leave work at work : If work still plays on your mind after you’ve logged off, then use the last few minutes of the day to write a list for the next day, to get it out of your head and down on to paper, then switch off, both literally and figuratively. If you work at home and don’t have a commute, then it’s especially important to do something to signal to your brain that work has ended—like going for a walk or istening to music",
    "3 - Take breaks : You’re not more productive simply for working longer. Research has shown our brains can only focus for 52 minutes before our concentration and productivity begin to slow down, so taking regular breaks will help you get more done, not less",
    "4 - Learn to say no : Often find yourself over-committed? Saying yes to everything is a one-way ticket to burnout. The more you practise, the easier it is to say no. A simple, ‘I’m sorry, I’d love to help, but I’ve just got too much on at the moment’ can work well.",
  ];

  const listItems5 = [
    "If you’re constantly working overtime : If this sounds like you, the first thing to do is to speak to your line manager. They can help you clear your diary for the most important priorities and tell you what you can postpone or drop.",
    "If you feel stressed or anxious in work situations : The good news is that there’s plenty of resources out there that can help. You could try something to calm your mind such as yoga or meditation.",
    "If you struggle to switch off when you’re not working : Try spending the last 15 minutes of your working day writing your to-do list and planning your time for tomorrow. This can help to get work tasks out of your head and down on to paper",
    "If it all gets too much and you can’t cope : If you’re in distress, it’s important to take some time out—whether that’s a quick break from the office or a few days off work—and to talk to someone. Doing something you’re passionate about and you enjoy should energise you rather than drain you. If you’re working somewhere toxic or are no longer enjoying your role at all, then it’s time to move on and find a job you love.",
  ];

  const listItems6 = [
    "Identify your strengths and weaknesses : Knowledge is power, so being aware of your strengths and weaknesses will help to build your confidence. You can then look for opportunities to use your skills and build on your strengths. You can also try setting yourself goals around your weaknesses—for example to learn more about something. If you feel there’s a particular area you need to improve on then ask about training at your organisation",
    "Ask questions : Be brave and ask questions, it shows you’re eager to learn, and the more you understand, the more confident you’ll feel. It’s important to take risks and voice your opinions, otherwise you’ll hold yourself back. So let go of the need to be perfect and don’t let fear stop you from growing.",
    "Ask for feedback : Ask for feedback and you’ll most likely find you’re doing much better than you think. Asking your manager/colleagues for feedback will force them to acknowledge what you do well. It will also help give you a better idea of your strengths and weaknesses from a different perspective.",
    "Don’t think negative thoughts : Try not to dwell on things that don’t go well, instead plan how to improve them next time. And remember that failing is how we learn!",
    "Celebrate your achievements : A great way to remind yourself of all your achievements is to document them. Every time you get any positive feedback internally or externally, have completed a piece of work you’re proud of or had something go much better than expected, keep a note of it.",
  ];
  return (
    <div className="w-screen h-screen overflow-scroll bg-blue-500">
      <Navbar />
      <div className="flex items-center justify-center pt-32">
        <Header
          titleClassName="text-3xl text-white md:text-6xl"
          title="WELLBEING"
        />
      </div>
      <div className="h-full w-full mt-10">
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/stress.jpg"
            SubHeaderTitle="How to handle stress in the workplace"
            listItems={listItems1}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/happy.jpg"
            SubHeaderTitle="How to be happier at work"
            listItems={listItems2}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/behappy.jpg"
            SubHeaderTitle="3 simple changes that will make you happier at work"
            listItems={listItems3}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/balalnce.jpg"
            SubHeaderTitle="4 tips to improve your work/life balance"
            listItems={listItems4}
          />
        </div>
        <div className="mb-10">
          <SubjectBlogComponent
            imageSrc="/mentalHealth.jpg"
            SubHeaderTitle="Signs that work may be affecting your mental health and what to do"
            listItems={listItems5}
          />
        </div>
        <div className="pb-48">
          <SubjectBlogComponent
            imageSrc="/confidence.jpg"
            SubHeaderTitle="5 tips to be more confident at work"
            listItems={listItems6}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wellbeing;
