"use client";

import Checkbox from "../../components/checbox/checbox";
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import NormalButton from "../../components/buttons/normalButton";
import Link from "next/link";
import { useFormContext } from "@/app/context/FormContext";
import InputFeild from "@/app/components/inputFeild/inputFeild";
import { useEffect, useState } from "react";
import SubHeader from "@/app/components/subHeader/subHeader";
import LargeButton from "@/app/components/buttons/largeButton";
import { gsap } from "gsap";

const Sector = () => {
  useEffect(() => {
    const revealAnim = () => {
      const TLFADE = gsap.timeline();

      TLFADE.from(".bg, .container, .header, .subheader, .sectors, .btn", {
        autoAlpha: 0,
        y: -100,
        duration: 1.5,
        stagger: 0.5,
      });

      const TLCONTAINER = gsap.timeline();

      TLCONTAINER.from(".img", {
        autoAlpha: 0,
        y: -100,
        duration: 1,
      });
    };

    revealAnim();
  }, []);

  const { formData, setFormData } = useFormContext();
  const [sectorInput, setSectorInput] = useState(false);

  const handleSectorOther = (e) => {
    const selectedSector = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      sector: selectedSector,
    }));

    if (selectedSector === "Other") {
      setSectorInput(true);
    } else {
      setSectorInput(false);
    }
  };

  const handleSectorOtherChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      otherSector: e.target.value,
    }));
  };
  console.log(formData);
  return (
    <div className="backdrop w-screen h-screen bg-blue-500 flex flex-col items-center justify-center py-5 md:py-20">
      <Form>
        <div className="h-full w-full flex flex-col items-center justify-center py-10">
          <div className="bg bg-black opacity-60 absolute h-4/6 w-3/4 rounded-2xl mb-5 md:mb-0 md:h-[72%] md:w-1/3 z-10 invisible"></div>
          <div className="container w-full h-full flex flex-col items-center justify-center  z-20 invisible">
            <div className="header w-full h-1/6 flex flex-col justify-center items-center mt-10 z-20">
              <Header
                titleClassName="text-3xl md:text-6xl text-white "
                title="Sectors of interest"
              />
            </div>
            <div className="subheader w-11/12 h-1/6 flex flex-col items-center mt-10 justify-between z-20">
              <SubHeader
                titleClassName="text-lg text-white"
                title="Select upto 3 sectors that interest you."
              />
            </div>

            <div className="sectors w-full h-1/2 p-2 flex flex-col justify-around items-center md:w-3/6 md:h-5/6 invisible">
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
                    className="w-64  border-black text-gray-700 bg-gray-200 rounded-lg p-1 md:p-2 md:w-96"
                    name="sector"
                    value={formData.sector}
                    onChange={handleSectorOther}
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
                  className="w-64  border-black text-gray-700 bg-gray-200 rounded-lg p-1 md:p-2 md:w-96"
                  name="sector"
                  value={formData.sector}
                  onChange={handleSectorOther}
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
                  className="w-64  border-black text-gray-700 bg-gray-200 rounded-lg p-1 md:p-1 md:w-96"
                  name="sector"
                  value={formData.sector}
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
                    <InputFeild
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
          <div className="img h-2/3 absolute md:h-full  flex items-center justify-center invisible ">
            <img
              src="/sectors.jpg"
              alt="sectors image"
              className="w-5/6 h-4/6 px-2 rounded-2xl md:w-full md:h-2/3"
            />
          </div>
          <div className="btn h-24 w-full flex items-center justify-around z-20 pt-10 md:h-fit md:w-4/6 md:mt-5 invisible ">
            <Link className="" href="education">
              <LargeButton
                text="Previous"
                className="bg-teal-500  md:bg-blue-500"
              />
            </Link>
            <Link href="criteria">
              <LargeButton text="Next" className="bg-teal-500 md:bg-blue-500" />
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Sector;
