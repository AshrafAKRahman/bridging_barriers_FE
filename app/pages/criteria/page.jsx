"use client"
import Header from "../../components/header/header";
import Checkbox from "../../components/checbox/checbox";
import { useState } from "react";
import Form from "../../components/form/form";
import NormalButton from "../../components/buttons/normalButton";
import Link from "next/link";
import {useFormContext} from "../../context/FormContext.js"

const Criteria = () => {
  const [isChecked, setIsChecked] = useState(new Array(12).fill(false));
  const {handleChange, formData} = useFormContext()
  const {sector} = formData


  const handleCheckboxChange = (index, value, label) => {
    console.log(value, label)
    const newIsChecked = [...isChecked];
    newIsChecked[index] = value;
    setIsChecked(newIsChecked);
    if(value) {
      handleChange({target: {name: sector, value: label}})
      console.log('function is running')
    }
    
  };

  console.log(formData)

  const labels = [
    "Eligible for free school meals during secondary or further education",
    "A looked after young person or Care leaver",
    "A young Carer to immediate family member or a young parent below 21",
    "Identify as working class or low income background",
    "Caretakers not attending university",
    "Self-identifying as a person of colour (including mixed heritage)",
    "Self-identifying as estranged in adulthood",
    "Migrating to the UK after 5 years of age",
    "English as an additional language",
    "Receiving full maintenance loan at university",
    "Self-identifying as disabled or experienced significant disruption to your education due to illness or injury",
    "Experienced other significant personal or familial disadvantage that has impacted education or employment (for example, bereavement)",
  ];
  console.log(isChecked)
  return (
    <Form>
      <Header
        titleClassName="text-3xl absolute left-40 md:left-20 top-20 transform translate-x-6 translate-y-58 text-white"
        title="Criteria & Circumstances"
      />
      <div className="flex flex-wrap gap-8 mt-40">
        {labels.map((label, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 mb-10">
            <Checkbox
              label={label}
              checked={isChecked[index]}
              onChange={(value) => handleCheckboxChange(index, value, label)}
              className="text-white"
            />
          </div>
        ))}
      </div>

      <div className="mt-0">
        <Link className="mr-10" href="location">
          <NormalButton text="Previous" />
        </Link>
        <Link href="ethnicity">
          <NormalButton text="Next" />
        </Link>
      </div>
    </Form>
  );
};

export default Criteria;
