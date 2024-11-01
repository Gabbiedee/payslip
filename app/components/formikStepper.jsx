"use client";
import React from "react";
import { useState } from "react";
import { Form, Formik } from "formik";
const FormikStepper = ({ children, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const lastStep = step === childrenArray.length - 1;

  const prevHandler = () => {
    setStep((step) => step - 1);
  };
  const nextHandler = () => {
    setStep((step) => step + 1);
  };

  
  
  return (
    <Formik {...props}>
      <Form autoComplete="off"  className="text-black flex flex-col justify-between w-1/3 bg-white p-5 my-auto rounded-md shadow-2xl">
        {currentChild}
        <div>
          {lastStep ? (
            <div className="">
              <button className="p-4  bg-customGold w-full" type="submit">
              Submit
            </button>
            </div>
            
          ) : (
            <button
              className="p-4 bg-customGold w-full"
              type="button"
              onClick={nextHandler}
            >
              Next
            </button>
          )}
           {step > 0 && (
            <button
              onClick={prevHandler}
              className="p-4  my-3 bg-customGold w-full"
              type="button"
            >
              Prev
            </button>
          )}
        </div>
      </Form>
    </Formik>
  );
};

export default FormikStepper;

