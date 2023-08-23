"use client"
import Checkbox from "../components/checbox/checbox";
import { useState } from "react";
import Form from "../components/form/form";
import Header from "../components/header/header";
import NormalButton from "../components/buttons/normalButton";
import Link from "next/link";
import SubHeader from "../components/subHeader/subHeader";

const CreateProfileFour = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);
  const [isChecked9, setIsChecked9] = useState(false);
  const [isChecked10, setIsChecked10] = useState(false);
  const [isChecked11, setIsChecked11] = useState(false);
  const [isChecked12, setIsChecked12] = useState(false);

  return (
    <Form>
      <Header
        titleClassName="text-3xl absolute left:40 md:left-20 top-20 transform translate-x-6 translate-y-58 text-white"
        title="Where are you based"
      />

      <SubHeader
        titleClassName="text-2xl mt-40 text-gray-400 text-center md:ml-10 flex"
        title="London"
      />
      <div className="flex flex-wrap">
        <div className="w-1/4 mb-10">
          <Checkbox
            label="North (N & NW)"
            onChange={(isChecked) => setIsChecked1(isChecked)}
            className="text-white"
          />
        </div>

        <div className="w-1/4 mb-10">
          <Checkbox
            label="East"
            onChange={(isChecked) => setIsChecked2(isChecked)}
            className="text-white"
          />
        </div>

        <div className="w-1/4 mb-10">
          <Checkbox
            label="South (SE & SW)"
            onChange={(isChecked) => setIsChecked3(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Checkbox
            label="West"
            onChange={(isChecked) => setIsChecked4(isChecked)}
            className="text-white"
          />
        </div>
      </div>
      <SubHeader
        titleClassName="text-2xl mt-10 text-gray-400 text-center md:ml-10 flex"
        title="Midlands"
      />
      <div className="flex flex-wrap">
        <div className="w-1/4 mb-10">
          <Checkbox
            label="Birmingham"
            onChange={(isChecked) => setIsChecked5(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Checkbox
            label="Coventry"
            onChange={(isChecked) => setIsChecked6(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Checkbox
            label="Leicester"
            onChange={(isChecked) => setIsChecked7(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Checkbox
            label="Wolverhampton"
            onChange={(isChecked) => setIsChecked8(isChecked)}
            className="text-white"
          />
        </div>
      </div>

      <SubHeader
        titleClassName="text-2xl mt-10 text-gray-400 text-center md:ml-10 flex"
        title="South England"
      />
      <div className="flex flex-wrap">
        <div className="w-1/4 mb-10">
          <Checkbox
            label="Southampton"
            onChange={(isChecked) => setIsChecked9(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Checkbox
            label="Brighton"
            onChange={(isChecked) => setIsChecked10(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Checkbox
            label="Maidstone"
            onChange={(isChecked) => setIsChecked11(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Checkbox
            label="Portsmouth"
            onChange={(isChecked) => setIsChecked12(isChecked)}
            className="text-white"
          />
        </div>
      </div>
      <div className="mt-10">
        <Link className="mr-10" href="/sector">
          <NormalButton text="Previous" />
        </Link>
        <Link href="/criteria">
          <NormalButton text="Next" />
        </Link>
      </div>
    </Form>
  );
};

export default CreateProfileFour;
