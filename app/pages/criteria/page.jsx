"use client";
import Header from "../../components/header/header";
import Checkbox from "../../components/checbox/checbox";
import { useEffect, useRef, useState } from "react";
import Form from "../../components/form/form";
import Link from "next/link";
import { useFormContext } from "../../context/FormContext.js";
import LargeButton from "../../components/buttons/largeButton";
import SubHeader from "../../app/components/subHeader/subHeader";
import { gsap } from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Criteria = () => {
  const router = useRouter();
  const [showInput, setShowInput] = useState(true);
  const [showSecondInput, setShowSecondInput] = useState(false);
  const { handleChange, formData } = useFormContext();
  const { criteria } = formData;
  const moreFirstRender = useRef(true);
  const rightArrowFirstRender = useRef(true);
  const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);

  const toggleInput = (e) => {
    setShowInput((prevShowInput) => !prevShowInput);
  };
  const toggleSecondInput = () => {
    setShowSecondInput((prevShowSecondInput) => !prevShowSecondInput);
  };

  const notify = (e) => {
    e.preventDefault();
    if (checkedCheckboxes.length === 0) {
      toast("Please choose the option that applies");
    } else {
      router.push("/pages/ethnicity");
    }
  };
  const handleCheckboxChange = (isChecked, label) => {
    console.log(isChecked, label);
    const updatedCheckboxes = isChecked
      ? [...checkedCheckboxes, label]
      : checkedCheckboxes.filter((value) => value !== label);
    setCheckedCheckboxes(updatedCheckboxes);
    handleChange({ target: { name: "criteria", value: updatedCheckboxes } });
  };

  const revealAnim = () => {
    const TLFADE = gsap.timeline();
    TLFADE.from(".bg, .headerContainer, .header, .subheader", {
      autoAlpha: 0,
      x: -99,
      duration: 1.5,
      stagger: 0.5,
    });

    const TLIMAGE = gsap.timeline();
    TLIMAGE.from(".img", {
      autoAlpha: 0,
      x: 99,
      duration: 1.5,
    });
  };

  const revealContainer = () => {
    const TLLABELCONTAINER = gsap.timeline();
    TLLABELCONTAINER.from(".labelsContainer, .btn", {
      autoAlpha: 0,
      y: 99,
      duration: 0.75,
      delay: 2.5,
      stagger: 0.5,
    });
  };

  useEffect(() => {
    revealContainer();
    revealAnim();
  }, []);

  const revealLabels = () => {
    const TLLABEL = gsap.timeline();
    TLLABEL.from(".label", {
      autoAlpha: 0,
      y: 99,
      duration: 0.5,
      delay: 0.25,
      stagger: 0.5,
    });
  };
  const more = () => {
    const TLMORE = gsap.timeline();
    const delay = moreFirstRender.current ? 4.5 : 1.3;

    TLMORE.from(".more", {
      autoAlpha: 0,
      x: -99,
      duration: 1.5,
      delay: delay,
    });
    if (moreFirstRender.current) {
      moreFirstRender.current = false;
    }
  };
  const rightArrow = () => {
    const TLRIGHTARROW = gsap.timeline();
    const delay = rightArrowFirstRender.current ? 5 : 2.5;

    TLRIGHTARROW.from(".rightArrow", {
      autoAlpha: 0,
      x: 50,
      duration: 1.37,
      repeat: -1,
      delay: delay,
      ease: "elastic.out(0.9, 0.4)",
    });
    if (rightArrowFirstRender.current) {
      rightArrowFirstRender.current = false;
    }
  };

  const revealsecondLabel = () => {
    const TLSECONDINPUT = gsap.timeline();
    TLSECONDINPUT.from(" .secondLabel", {
      autoAlpha: 0,
      x: 50,
      duration: 1,
    });
  };

  const previous = () => {
    const TLPREVIOUS = gsap.timeline();
    TLPREVIOUS.from(".previous", {
      autoAlpha: 0,
      x: 75,
      duration: 1.5,
      delay: 1,
    });
  };

  const leftArrow = () => {
    const TLLEFTARROW = gsap.timeline();
    TLLEFTARROW.from(".leftArrow", {
      autoAlpha: 0,
      x: 50,
      duration: 1.37,
      repeat: -1,
      delay: 2,
      ease: "elastic.out(0.9, 0.4)",
    });
  };

  useEffect(() => {
    revealLabels();
    more();
    rightArrow();
    revealsecondLabel();
    previous();
    leftArrow();
  }, [showSecondInput]);

  const labels = [
    "I have previously been eligible for free school meals or a bursary fund or equivalent",
    "Do you consider yourself to have a disability as defined by the Equality Act 2010?",
    " I was responsible for caring for a family member whilst at school/college",
    "Have you ever been in (or are you still in) local authority care?",
  ];

  const secondLabels = [
    "Either of my parents have been to university",
    "Did you grow up in a single parent household?",
    "I have previously had refugee or asylum status",
    "Are you, or have you been a parent or registered carer?",
    "None of the options are applicable",
  ];
  console.log(formData);
  return (
    <div className="backdrop w-screen h-screen flex flex-col items-center justify-center py-10 md:py-12 ipad:py-36 ipad:px-0 horizontal:py-5">
      <img
        src="/loginBg.jpg"
        alt="login bg image"
        className="object-cover h-screen w-screen  absolute"
      />
      <Form>
        <div className="form w-full h-full flex flex-col items-center justify-center">
          <div className="bg bg-black opacity-60 absolute h-5/6 w-11/12 rounded-2xl mb-5 md:mb-0 md:w-9/12 md:h-4/5  z-10 ipad:w-5/6 ipad:h-4/6 horizontal:h-3/4 invisible"></div>
          <div className="headerContainer md:w-2/3 w-full h-2/6 mt-10 flex-col flex items-center justify-center z-20 invisible ipad:mt-24 ipad:h-fit ">
            <div className="header w-5/6 h-fit  text-center flex flex-col justify-center  items-center z-20">
              <Header
                titleClassName="text-3xl text-white"
                title="Criteria & Circumstances"
              />
            </div>
            <div className="subheader w-5/6 md:h-fit  text-center flex flex-col items-center justify-center mt-5 z-20 ">
              <SubHeader
                titleClassName="text-lg text-white"
                title="Please tick any statements that apply to you"
              />
            </div>
          </div>

          <div className="labelsContainer w-5/6 h-1/3 flex flex-col justify-center mt-10 z-30 md:w-4/6 md:p-8 ipad:w-5/6 horizontal:px-10 invisible">
            <div
              className={`label w-full h-full flex flex-col justify-center md:w-full   ${
                showInput ? "block" : "hidden"
              }`}
            >
              {labels.map((label, index) => (
                <div key={index} className="flex flex-col mb-4 ">
                  <Checkbox
                    label={label}
                    onChange={(isChecked, label) =>
                      handleCheckboxChange(isChecked, label)
                    }
                    className="text-white"
                  />
                </div>
              ))}
            </div>

            <div
              className={`secondLabel w-full h-full flex flex-col justify-center md:w-full ${
                showSecondInput ? "block" : "hidden"
              }`}
            >
              {secondLabels.map((secondLabels, index) => (
                <div key={index} className="flex flex-col mb-6">
                  <Checkbox
                    label={secondLabels}
                    onChange={(isChecked, secondLabels) =>
                      handleCheckboxChange(isChecked, secondLabels)
                    }
                    className="text-white "
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="moreBtn   z-30 h-32 w-full  flex items-center justify-center md:w-1/4   ">
            <div className="w-full h-fit flex items center justify-center ">
              <button
                className="text-white"
                onClick={(e) => {
                  e.preventDefault();
                  toggleInput();
                  toggleSecondInput();
                }}
              >
                {showSecondInput ? (
                  <div className="w-full flex items-center justify-between ">
                    <FaArrowLeft className="leftArrow text-xl mr-5 w-[350%] md:text-xl invisible" />
                    <div className="previous w-1/2 h-full text-2xl flex-col items-center justify-center mr-8 md:text-2xl invisible">
                      Previous
                    </div>
                  </div>
                ) : (
                  <div className=" w-full flex items-center justify-between">
                    <div className="more w-1/2 text-2xl md:text-2xl invisible ">
                      More
                    </div>
                    <div>
                      <FaArrowRight className="rightArrow text-xl w-[350%] md:text-xl mt-2 invisible" />
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>

          <img
            src="/criteria.jpg"
            alt="sectors image"
            className="img absolute object-cover w-5/6 h-3/6 px-2 rounded-2xl md:w-11/12 md:h-5/6 invisible"
          />
          <div className="btn h-24 w-full flex items-center justify-between z-20 px-5 pt-2 md:h-fit md:w-full md:mt-5 md:px-24 invisible">
            <Link className="mr-10" href="sector">
              <LargeButton
                text="PREVIOUS"
                className="bg-blue-500 hover:bg-blue-700"
              />
            </Link>
            <Link href="ethnicity">
              <LargeButton
                onClick={(e) => notify(e)}
                text="NEXT"
                className="bg-red-500 hover:bg-blue-700"
              />
            </Link>
          </div>
        </div>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default Criteria;
