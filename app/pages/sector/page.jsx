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

  const sectorImageAndTitle = [{
    image: "Accounting.jpg",
    title: "Accounting"
  },
  {
    image: "Banking_Finance.jpg",
    title: "Banking & Finance"

  },
  {
    image: "Consulting.jpg",
    title: "Consulting"

  },
  {
    image: "Marketing.jpg",
    title: "Marketing"

  },
  {
    image: "Education.jpg",
    title: "Education"

  },
  {
    image: "Engineering.jpg",
    title: "Engineering"

  },
  {
    image: "Governemnt_Public.jpg",
    title: "Government & Public Sector"

  },
  {
    image: "Healthcare.jpg",
    title: "Healthcare"
  },
  {
    image: "Real Estate.jpg",
    title: "Real Estate",
  },
  {
    image: "Law.jpg",
    title: "Law"
  },
  {
    image: "Technology.jpg",
    title: "Technology"
  },
  {
    image: "Media-_-Music_1.jpg",
    title: "Media_Music"
  },
]


  return (
    <Form>
      <Header
        titleClassName="text-3xl absolute left:40 md:left-20 top-20 transform translate-x-6 translate-y-58 text-white"
        title="Which job sector interests you"
      />
      <div className="flex flex-wrap mt-20">
        
        {sectorImageAndTitle.map((content) => (
          <div className="w-1/4 mb-10">
          <Image
            src={`/${content.image}`}
            alt={content.image}
            className="rounded-img mb-5"
            height={70}
            width={70}
          />
          <Checkbox
            label={content.title}
            onChange={(isChecked) => setIsChecked1(isChecked)}
            className="text-white"
          />
         </div>
        ))}

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
