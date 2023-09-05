"use client";

import Checkbox from "../../components/checbox/checbox";
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import NormalButton from "../../components/buttons/normalButton";
import Link from "next/link";
import { useFormContext } from "@/app/context/FormContext";
import InputFeild from "@/app/components/inputFeild/inputFeild";
import { useState } from "react";

const Sector = () => {
  const { formData, setFormData, handleChange } = useFormContext();
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

  return (
    <div className="w-screen h-screen bg-blue-500 flex items-center justify-center p-5 md:px-36">
      <Form>
        <div className="h-full w-full flex flex-col items-center justify-center py-10 ">
          <div className="bg-black opacity-40 absolute h-[60%] w-4/5 rounded-2xl md:h-[72%] md:w-1/2 "></div>
          <div className="w-full h-fit flex flex-col justify-center items-center z-10 ">
            <Header
              titleClassName="text-3xl md:text-6xl text-white "
              title="Sectors of interest"
            />
          </div>
          <div className="h-2/3 md:h-full md:mb-16 flex items-center justify-center ">
            <img
              src="/sectors.jpg"
              alt="sectors image"
              className="w-full h-5/6 px-2 rounded-2xl md:w-[840px] md:h-[480px]"
            />
          </div>
          <div className="w-5/6 h-1/3 p-2 absolute flex justify-between md:w-3/6 ">
            <div className="text-white">
              <label>
                <Header
                  title="Select a sector"
                  titleClassName="text-lg md:text-3xl"
                />
              </label>
            </div>
            <div>
              <select
                className="w-36 border-black text-gray-700 bg-gray-200 rounded-3xl py-2 px-2 md:mf-10 md:p-4 md:w-60"
                name="sector"
                value={formData.sector}
                onChange={handleSectorOther}
              >
                <option>Select Sector</option>
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
                <div className="text-white mt-4">
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

        <div className="h-fit w-4/6 flex items-center justify-between bg-pink-600 ">
          <Link className="" href="education">
            <NormalButton text="Previous" />
          </Link>
          <Link href="criteria">
            <NormalButton text="Next" />
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Sector;
