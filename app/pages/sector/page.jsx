"use client"

import Checkbox from "../../components/checbox/checbox";
import { useState } from "react";
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import NormalButton from "../../components/buttons/normalButton";
import Link from "next/link";
import Image from "next/image";

const Sector = () => {
  // Define states for each checkbox
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

  const sectorImages = ["Accounting.jpg", "Banking_Finance.jpg", "Consulting.jpg", "Marketing.jpg", "Education.jpg", "Engineering.jpg", "Governemnt_Public.jpg", "Healthcare.jpg", "Real Estate.jpg", "Law.jpg", "Technology.jpg", "Media-_-Music_1.jpg"]

  const labels = [ "Accounting", "Banking & Finance", "Consulting", "Marketing", "Education", "Engineering", "Government & Public Sector", "Healthcare", "Real Estate", "Law", "Technology", "Media_Music"]


  return (
    <Form>
      <Header
        titleClassName="text-3xl absolute left:40 md:left-20 top-20 transform translate-x-6 translate-y-58 text-white"
        title="Which job sector interests you"
      />
      <div className="flex flex-wrap mt-20">
        <div className="w-1/4 mb-10">
        
          <Image
            src="/Accounting.jpg"
            alt="Accounting"
            className="rounded-img mb-5"
            height={70}
            width={70}
          />
          <Checkbox
            label="Accounting"
            onChange={(isChecked) => setIsChecked1(isChecked)}
            className="text-white"
          />
        </div>

        <div className="w-1/4 mb-10">
          <Image
            src="/Banking_Finance.jpg"
            alt="Banking & Finance"
            className="rounded-img mb-5"
            height={70}
            width={70}
          />
          <Checkbox
            label="Banking & Finance"
            onChange={(isChecked) => setIsChecked2(isChecked)}
            className="text-white"
          />
        </div>

        <div className="w-1/4 mb-10">
          <Image
            src="/Consulting.jpg"
            alt="Consulting"
            className="rounded-img mb-5"
            height={70}
            width={70}
          />
          <Checkbox
            label="Consulting"
            onChange={(isChecked) => setIsChecked3(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Image
            src="/Marketing.jpg"
            alt="Marketing"
            className="rounded-img mb-5"
            height={70}
            width={70}
          />
          <Checkbox
            label="Marketing"
            onChange={(isChecked) => setIsChecked4(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Image
            src="/Education.jpg"
            alt="Education"
            className="rounded-img mb-5"
            height={70}
            width={70}
          />
          <Checkbox
            label="Education"
            onChange={(isChecked) => setIsChecked5(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Image
            src="/Engineering.jpg"
            alt="Engineering"
            className="rounded-img mb-5"
            height={70}
            width={70}
          />
          <Checkbox
            label="Engineering"
            onChange={(isChecked) => setIsChecked6(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Image
            src="/Governemnt_Public.jpg"
            alt="Government"
            className="rounded-img mb-5"
            height={70}
            width={70}
          />
          <Checkbox
            label="Government & Public Sector"
            onChange={(isChecked) => setIsChecked7(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Image
            src="/Healthcare.jpg"
            alt="Banking & Finance"
            className="rounded-img mb-5"
            height={70}
            width={70}
          />
          <Checkbox
            label="Healthcare"
            onChange={(isChecked) => setIsChecked8(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Image
            src="/Real Estate.jpg"
            alt="Real Estate"
            className="rounded-img mb-5"
            height={70}
            width={70}
          />
          <Checkbox
            label="Real Estate"
            onChange={(isChecked) => setIsChecked9(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Image
            src="/Law.jpg"
            alt="Law"
            className="rounded-img mb-5"
            height={70}
            width={70}
          />
          <Checkbox
            label="Law"
            onChange={(isChecked) => setIsChecked10(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Image
            src="/Technology.jpg"
            alt="Technology"
            className="rounded-img mb-5"
            height={70}
            width={70}
          />
          <Checkbox
            label="Banking & Finance"
            onChange={(isChecked) => setIsChecked11(isChecked)}
            className="text-white"
          />
        </div>
        <div className="w-1/4 mb-10">
          <Image
            src="/Media-_-Music_1.jpg"
            alt="Media_Music"
            className="rounded-img mb-5"
            height={70}
            width={70}
          />
          <Checkbox
            label="Banking & Finance"
            onChange={(isChecked) => setIsChecked12(isChecked)}
            className="text-white"
          />
        </div>
      </div>
      <div className="mt-10">
        <Link className="mr-10" href="education">
          <NormalButton text="Previous" />
        </Link>
        <Link href="location">
          <NormalButton text="Next" />
        </Link>
      </div>
    </Form>
  );
};

export default Sector;
