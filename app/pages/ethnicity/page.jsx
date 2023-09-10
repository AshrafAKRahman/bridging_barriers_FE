"use client";
import Form from "../../components/form/form";
import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import SubHeader from "../../components/subHeader/subHeader";
import Checkbox from "../../components/checbox/checbox";
import NormalButton from "../../components/buttons/normalButton";
import Link from "next/link";
import { useFormContext } from "@/app/context/FormContext";
import { gsap } from "gsap";
import LargeButton from "@/app/components/buttons/largeButton";
import { UserAuth } from "@/app/context/AuthContext";
import ParticlesBg from "@/app/components/particles/Particles";
import ParticlesBtn from "@/app/components/particles/ParticlesBtn";

const Ethnicity = () => {
  const { user, newUser } = UserAuth();
  const { formData, handleChange } = useFormContext();
  const { ethnicity } = formData;
  const [loading, setLoading] = useState(true);
  const [showParticles, setShowParticles] = useState(false);

  const handleSignIn = async () => {
    try {
      await newUser(formData.email, formData.password);
      console.log("handleSignIn function called");
    } catch (error) {
      console.log("Error");
    }
    setShowParticles(true);
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  const revealAnimation = () => {
    const TLFADE = gsap.timeline();
    TLFADE.from(".backdrop, .bg, .headerContainer, .btn, .header, .subheader", {
      autoAlpha: 0,
      y: -100,
      duration: 1.5,
      stagger: 0.5,
    });

    const TLIMAGE = gsap.timeline();
    TLIMAGE.from(".img", {
      autoAlpha: 0,
      y: -100,
      duration: 1.5,
    });
  };

  const revealContainer = () => {
    const TLLABELCONTAINER = gsap.timeline();
    TLLABELCONTAINER.from(".inputContainer", {
      autoAlpha: 0,
      x: 100,
      duration: 1.5,
      delay: 3.5,
    });
  };

  useEffect(() => {
    revealContainer();
    revealAnimation();
  }, []);

  const animateElements = () => {
    const TLFADE = gsap.timeline();
    TLFADE.from(".headerFinal, .bgFinal", {
      autoAlpha: 0,
      y: -100,
      duration: 2.5,
      stagger: 2,
    });
  };

  useEffect(() => {
    if (showParticles) {
      animateElements();
    }
  }, [showParticles]);

  const labels = [
    "Mixed or multiple ethnic groups",
    "Asian or Asian British",
    "Black British, Caribbean or African",
    "White British, European, White other",
    "Self Describe",
  ];

  const handleCheckBoxChange = (isChecked, label) => {
    console.log(isChecked, label);
    if (isChecked) {
      const newEhtnicity = [...ethnicity, label];
      handleChange({ target: { name: "ethnicity", value: newEhtnicity } });
    } else {
      const newEhtnicity = ethnicity.filter((value) => {
        return value !== label;
      });
      handleChange({ target: { name: "ethnicity", value: newEhtnicity } });
    }
  };
  console.log(formData);

  return (
    <div className="backdrop bg-blue-500 w-screen h-screen flex flex-col items-center justify-center py-5  md:w-screen md:py-20 md:px-44 invisible ">
      <div className="absolute -z-10">
        <ParticlesBg />
      </div>
      {showParticles ? (
        <div className="w-full h-full z-30 text-center flex flex-col items-center justify-center">
          <div className="bgFinal bg-black opacity-40 absolute h-1/3 w-5/6 rounded-2xl mb-14 md:mb-6 md:h-3/6 md:w-1/2 -z-10 invisible"></div>
          <div className="headerFinal w-4/6 h-fit text-center mt-20 md:w-1/4 invisible">
            <Header
              title={
                <>
                  Thank you for completing the sign up process, you can now{" "}
                  <Link href="/login">Login</Link> here
                </>
              }
              titleClassName="text-3xl text-white"
            />
          </div>

          <ParticlesBtn />
        </div>
      ) : (
        <Form onSubmit={handleSignIn}>
          <div className="form w-full h-full flex flex-col items-center justify-center ">
            <div className="bg bg-black opacity-60 absolute h-4/6 w-3/4 mt-10 rounded-2xl mb-14 md:mb-6   md:h-3/6 md:w-1/3 z-10 invisible"></div>

            <>
              <div className="headerContainer w-full h-1/3 mt-24 flex-col flex  justify-center  items-center z-20 md:w-2/3 invisible  ">
                <div
                  className="header w-full h-fit  text-center   flex flex-col justify-center items-center z-20 
            "
                >
                  <Header
                    titleClassName="text-3xl text-white"
                    title="Equal opportunities"
                  />
                </div>
                <div className="subheader w-full text-center flex flex-col items-center justify-center mt-5 z-20 md:h-fit  ">
                  <SubHeader
                    titleClassName="text-2xl text-white text-center"
                    title="Select your heritage"
                  />
                </div>
                <div className=" w-1/2 flex flex-col items-center text-center ">
                  <p className="text-white text-sm">
                    Feel free to read our Ethnic Heritiage Policy here.
                  </p>
                </div>
              </div>

              <div className="inputContainer w-5/6 h-1/3 flex flex-col justify-center mt-10 md:mt-4 z-30 md:w-2/6 invisible ">
                {labels.map((labels, index) => (
                  <div key={index} className="flex flex-col mb-2 md:mb-0 ">
                    <Checkbox
                      label={labels}
                      className="mb-3 md:mb-2 text-white"
                      showInput={true}
                      onChange={(isChecked, label) => {
                        handleCheckBoxChange(isChecked, label);
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="img h-2/3 absolute md:h-full  flex items-center justify-center invisible">
                <img
                  src="/heritage.jpg"
                  alt="sectors image"
                  className="w-5/6 h-4/6 px-2 rounded-2xl md:w-full md:h-2/3"
                />
              </div>
              <div className="btn mt-10 z-20 h-1/6 w-80 flex items-center justify-around px-5 md:w-3/6 ">
                <Link className="mr-10" href="criteria">
                  <LargeButton
                    text="Previous"
                    className="md:bg-blue-500 bg-teal-500"
                  />
                </Link>

                <div>
                  <Link href="#">
                    <LargeButton
                      onClick={handleSignIn}
                      text="SUBMIT"
                      className="md:bg-blue-500 bg-teal-500"
                    />
                  </Link>
                </div>
              </div>
            </>
          </div>
        </Form>
      )}
    </div>
  );
};

export default Ethnicity;
