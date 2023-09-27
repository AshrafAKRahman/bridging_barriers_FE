"use client";
import Form from "../../components/form/form";
import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import SubHeader from "../../components/subHeader/subHeader";
import Checkbox from "../../components/checbox/checbox";
import Link from "next/link";
import { useFormContext } from "@/app/context/FormContext";
import { gsap } from "gsap";
import LargeButton from "@/app/components/buttons/largeButton";
import { UserAuth } from "@/app/context/AuthContext";
import ParticlesBtn from "@/app/components/particles/ParticlesBtn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Ethnicity = () => {
  const { user, newUser } = UserAuth();
  const { formData, handleChange } = useFormContext();
  const { ethnicity } = formData;
  const [loading, setLoading] = useState(true);
  const [showParticles, setShowParticles] = useState(false);
  const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);

  const handleSignIn = async () => {
    if (checkedCheckboxes.length === 0) {
      toast("Please choose an option");
      return;
    }
    try {
      await newUser(formData.email, formData.password);
      console.log("handleSignIn function called");
      setShowParticles(true);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  const labels = [
    "Mixed or multiple ethnic groups",
    "Asian or Asian British",
    "Black British, Caribbean or African",
    "White British, European, White other",
    "Self Describe",
  ];

  const handleCheckBoxChange = (isChecked, label) => {
    console.log(isChecked, label);
    const updatedCheckboxes = isChecked
      ? [...checkedCheckboxes, label]
      : checkedCheckboxes.filter((value) => value !== label);
    setCheckedCheckboxes(updatedCheckboxes);
    handleChange({ target: { name: "ethnicity", value: updatedCheckboxes } });
  };

  console.log(formData);
  const revealAnimation = () => {
    const TLFADE = gsap.timeline();
    TLFADE.from(".bg, .headerContainer, .header, .subheader", {
      autoAlpha: 0,
      x: -100,
      duration: 1.5,
      stagger: 0.5,
    });

    const TLIMAGE = gsap.timeline();
    TLIMAGE.from(".img", {
      autoAlpha: 0,
      x: 100,
      duration: 1.5,
    });
  };

  const revealContainer = () => {
    const TLLABELCONTAINER = gsap.timeline();
    TLLABELCONTAINER.from(".inputContainer, .btn", {
      autoAlpha: 0,
      y: 100,
      duration: 0.75,
      delay: 1.5,
      stagger: 0.5,
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

  console.log(formData);
  return (
    <div className="backdrop w-screen h-screen flex flex-col items-center justify-center py-10 md:py-12 ipad:py-36 ipad:px-0 horizontal:py-5">
      <img
        src="/loginBg.jpg"
        alt="login bg image"
        className="object-cover h-screen w-screen horizontal:w-[200%] absolute"
      />
      {showParticles ? (
        <div className="w-full h-full z-20 text-center flex flex-col items-center justify-center">
          <div className="z-30"></div>
          <div className="bg bg-white bg-opacity-40 backdrop-blur-md  absolute h-5/6 w-11/12 rounded-2xl mb-5 md:mb-0 md:w-1/3 md:h-1/2 ipad:w-3/5 ipad:h-4/6 "></div>
          <div className="headerFinal w-4/6 h-fit text-center md:w-1/4 z-10 invisible">
            <Header
              title={
                <>
                  Thank you for completing the sign up process, you can now{" "}
                  <Link href="login">Login</Link> here
                </>
              }
              titleClassName="text-3xl text-gray-700 "
            />
          </div>
          <ParticlesBtn />
        </div>
      ) : (
        <Form onSubmit={handleSignIn}>
          <div className="form w-full h-full flex flex-col items-center justify-center ">
            <div className="bg bg-black opacity-60 absolute h-5/6 w-11/12 rounded-2xl mb-5 md:mb-0 md:w-9/12 md:h-4/5  z-10 ipad:w-5/6 ipad:h-4/6 invisible"></div>

            <>
              <div className="headerContainer w-full h-1/3 mt-24 flex-col flex  justify-center  items-center z-20 md:w-2/3 invisible  ">
                <div className="header w-full h-fit  text-center   flex flex-col justify-center items-center z-20">
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

              <div className="inputContainer w-5/6 h-1/3 flex flex-col justify-center mt-10 md:mt-4 z-30 md:w-3/6 ipad:w-5/6 ipad:px-10 invisible ">
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

              <img
                src="/heritage.jpg"
                alt="heritage image"
                className="img absolute object-cover w-5/6 h-2/6 px-2 rounded-2xl md:w-11/12 md:h-5/6 invisible"
              />
              <div className="btn h-24 w-full flex items-center justify-between  z-20 px-5 pt-12  md:h-fit md:w-full md:mt-14 md:px-24 invisible ">
                <Link className="mr-10" href="criteria">
                  <LargeButton
                    text="PREVIOUS"
                    className="bg-blue-500 hover:bg-blue-700"
                  />
                </Link>
                <Link href="#">
                  <LargeButton
                    onClick={handleSignIn}
                    text="SUBMIT"
                    className="bg-blue-500 hover:bg-blue-700"
                  />
                </Link>
              </div>
            </>
          </div>
        </Form>
      )}
      <div className="absolute ">
        <ToastContainer />
      </div>
    </div>
  );
};

export default Ethnicity;
