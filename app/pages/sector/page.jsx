"use client";
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import Link from "next/link";
import { useFormContext } from "../../context/FormContext";
import InputField from "../../components/inputField/inputField";
import { useEffect, useState } from "react";
import SubHeader from "../../components/subHeader/subHeader";
import LargeButton from "../../components/buttons/largeButton";
import { gsap } from "gsap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sector = () => {
  const { formData, setFormData } = useFormContext();
  const [sectorInput, setSectorInput] = useState(false);

  const notify = (e) => {
    e.preventDefault();
    if (!formData.sectorOne || !formData.sectorTwo || !formData.sectorThree) {
      toast("Please choose 3 sectors");
    } else {
      window.location.href = "/pages/criteria";
    }
  };

  const handleSectorOther = (e) => {
    const selectedSector = e.target.value;
    setFormData((prevData) => ({
      ...prevData,

      sectorThree: selectedSector,
    }));

    if (selectedSector === "Other") {
      setSectorInput(true);
    } else {
      setSectorInput(false);
    }
  };

  const handleSectorOneChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      sectorOne: e.target.value,
    }));
  };

  const handleSectorTwoChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      sectorTwo: e.target.value,
    }));
  };

  const handleSectorOtherChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      otherSector: e.target.value,
    }));
  };
  console.log(formData);

  const revealAnim = () => {
    const TLFADE = gsap.timeline();

    TLFADE.from(".bg, .headerContainer, .header, .subheader", {
      autoAlpha: 0,
      x: -99,
      duration: 1,
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
    const TLCONTAINER = gsap.timeline();
    TLCONTAINER.from(".sectors, .btn", {
      autoAlpha: 0,
      y: 100,
      duration: 0.5,
      delay: 2.5,
      stagger: 0.5,
    });
  };

  useEffect(() => {
    revealAnim();
    revealContainer();
  }, []);

  return (
    <div className="backdrop w-screen h-screen flex flex-col items-center justify-center py-10 md:py-12 ipad:py-36 ipad:px-0 horizontal:h-[200%]">
      <img
        src="/loginBg.jpg"
        alt="login bg image"
        className="object-cover h-screen w-screen horizontal:h-[200%] absolute"
      />
      <Form>
        <div className="h-full w-full flex flex-col items-center justify-center">
          <div className="bg bg-black opacity-60 absolute h-5/6 w-11/12 rounded-2xl mb-5 md:mb-0 md:w-9/12 md:h-4/5  z-10 ipad:w-4/5 ipad:h-11/12 invisible"></div>
          <div className="container w-full h-full flex flex-col items-center justify-center z-20">
            <div className="header w-full h-1/6 flex flex-col justify-center items-center mt-20  z-20 horizontal:mt-20 invisible">
              <Header
                titleClassName="text-3xl md:text-6xl text-white "
                title="Sectors of interest"
              />
            </div>
            <div className="subheader w-11/12 h-1/6 flex flex-col items-center  justify-between z-20 horizontal:mt-6 invisible">
              <SubHeader
                titleClassName="text-lg text-white"
                title="Select upto 3 sectors that interest you."
              />
            </div>

            <div className="sectors w-full h-1/2 flex flex-col justify-around items-center md:w-3/6 md:h-5/6 invisible">
              <div className="flex flex-col items-center justify-center ">
                <div className="text-white">
                  <label>
                    <Header
                      title="Most desireable"
                      titleClassName="text-lg md:text-3xl"
                    />
                  </label>
                </div>
                <div>
                  <select
                    className="w-52 border-black text-gray-700 bg-gray-200 rounded-lg p-1 md:p-2 md:w-96"
                    name="sector"
                    value={formData.sectorOne}
                    onChange={handleSectorOneChange}
                  >
                    <option>First Sector</option>
                    <option>Commercial Law</option>
                    <option>Creative Industries</option>
                    <option>Engineering & Technology</option>
                    <option>Financial Services & Consulting</option>
                    <option>Government & Public Sector</option>
                    <option>Human Resources</option>
                    <option>Investment Banking & Asset Management</option>
                    <option>Marketing, Media and PR</option>
                    <option>Real Estate</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-white">
                  <label>
                    <Header
                      title="Desireable"
                      titleClassName="text-lg md:text-3xl"
                    />
                  </label>
                </div>
                <select
                  className="w-52  border-black text-gray-700 bg-gray-200 rounded-lg p-1 md:p-2 md:w-96"
                  name="sector"
                  value={formData.sectorTwo}
                  onChange={handleSectorTwoChange}
                >
                  <option>Second Sector</option>
                  <option>Commercial Law</option>
                  <option>Creative Industries</option>
                  <option>Engineering & Technology</option>
                  <option>Financial Services & Consulting</option>
                  <option>Government & Public Sector</option>
                  <option>Human Resources</option>
                  <option>Investment Banking & Asset Management</option>
                  <option>Marketing, Media and PR</option>
                  <option>Real Estate</option>
                </select>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-white">
                  <label>
                    <Header
                      title="Of interest"
                      titleClassName="text-lg md:text-3xl"
                    />
                  </label>
                </div>
                <select
                  className="w-52  border-black text-gray-700 bg-gray-200 rounded-lg p-1 md:p-2 md:w-96"
                  name="sector"
                  value={formData.sectorThree}
                  onChange={handleSectorOther}
                >
                  <option>Sector of interest</option>
                  <option>Commercial Law</option>
                  <option>Creative Industries</option>
                  <option>Engineering & Technology</option>
                  <option>Financial Services & Consulting</option>
                  <option>Government & Public Sector</option>
                  <option>Human Resources</option>
                  <option>Investment Banking & Asset Management</option>
                  <option>Marketing, Media and PR</option>
                  <option>Real Estate</option>
                  <option>Other</option>
                </select>
                {sectorInput && (
                  <div className="text-white mt-2 flex flex-col items-center justify-center">
                    <label>
                      <Header title="please specify" />
                    </label>
                    <InputField
                      type="text"
                      name="otherSector"
                      value={formData.otherSector}
                      onChange={handleSectorOtherChange}
                      placeholder="please specify a sector"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <img
            src="/sectors.jpg"
            alt="sectors image"
            className="img absolute object-cover w-5/6 h-3/6 px-2 rounded-2xl md:w-11/12 md:h-5/6 horizontal:h-full invisible"
          />

          <div className="btn h-24 w-full flex items-center justify-between  z-20 px-5 pt-2 md:h-fit md:w-full md:mt-5 md:px-24 invisible ">
            <Link className="" href="education">
              <LargeButton
                text="PREVIOUS"
                className="bg-blue-500 hover:bg-blue-700"
              />
            </Link>
            <Link href="criteria">
              <LargeButton
                onClick={(e) => notify(e)}
                text="NEXT"
                className="bg-blue-500 hover:bg-blue-700"
              />
            </Link>
          </div>
        </div>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default Sector;
