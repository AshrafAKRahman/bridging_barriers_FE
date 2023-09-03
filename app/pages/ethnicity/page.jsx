"use client"
import Form from "../../components/form/form";
import { useState } from "react";
import Header from "../../components/header/header";
import SubHeader from "../../components/subHeader/subHeader"
import Checkbox from "../../components/checbox/checbox";
import NormalButton from "../../components/buttons/normalButton";
import Link from "next/link";

const Ethnicity = () => {
  // const [isChecked1, setIsChecked1] = useState("false");
  // const [isChecked2, setIsChecked2] = useState("false");
  // const [isChecked3, setIsChecked3] = useState("false");
  // const [isChecked4, setIsChecked4] = useState("false");
  // const [isChecked5, setIsChecked5] = useState("false");
  // const [isChecked6, setIsChecked6] = useState("false");
  // const [isChecked7, setIsChecked7] = useState("false");
  // const [isChecked8, setIsChecked8] = useState("false");
  // const [isChecked9, setIsChecked9] = useState("false");

  const labels = ["Mixed or multiple ethnic groups", "Asian or Asian British", "Black, African, Caribbean or Black British", "White, White British, White European or White other", "Self Describe"  ]
  

  return (
    <Form>
      <Header
        titleClassName="text-3xl absolute left:40 md:left-20 top-20 transform translate-x-6 translate-y-58 text-white"
        title="Equal opportunities"
      />
      <SubHeader
        titleClassName="text-2xl mt-20 text-white text-center mb-10 flex"
        title="Select your heritage & gender"
      />
      <p className="text-white">
        Ethical data collection Lorem ipsum dolor sit amet. Sed corrupti
        voluptas eum voluptas mollitia qui labore unde vel repellat dolore ut
        voluptas repellendus qui quia odio. Aut libero dicta eos facere
        reiciendis quo quos nostrum.
      </p>
      <div className="flex justify-between">
        <div className="w-1/2">
          <SubHeader
            titleClassName="text-2xl mt-10 text-gray-400 flex mb-2"
            title="Ethnic Heritage"
          />
          {labels.map((labels) => (
            <Checkbox
              label={labels}
              className="mb-3 text-white"
            />
          ))}
        </div>
      </div>
      <div className="mt-20">
        <Link className="mr-10" href="criteria">
          <NormalButton text="Previous" />
        </Link>
        <Link href="profileCreatedConfirmation">
          <NormalButton text="Next" />
        </Link>
      </div>
    </Form>
  );
};

export default Ethnicity;
