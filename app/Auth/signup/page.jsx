"use client";
import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import FormikComponent from "../../components/formik";
import Link from "next/link";
import Button from "../../components/Utils/Button";
import { MdEmail } from "react-icons/md";
import { SlOrganization } from "react-icons/sl";
import { IoEyeSharp } from "react-icons/io5";
import { PiEyeSlashFill } from "react-icons/pi";
import { object, string, date } from "yup";
import { useState, useEffect } from "react";
import Image from "next/image";

const Page = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  useEffect(() => {
    if (formSubmitted) {
      console.log("Form was successfully submitted!");
      setFormSubmitted(false);
    }
  }, [formSubmitted]);


  const togglePassword = () => {
    setshowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 h-full w-1/2">
        <h3>My logo</h3>
      </div>

      <div className="h-full w-1/2  flex flex-col justify-center text-center ">
        <div>
          <h3 className="text-7xl font-extrabold text-gray-600 my-5">
            Create Account
          </h3>
        </div>
        <FormikComponent
          initialValues={{
            emailAddress: "",
            companyName: "",
            password: "",
            Cpassword: "",
          }}
          validationSchema={object({
            emailAddress: string()
              .email("Field should contain a valid e-mail")
              .max(255)
              .required("E-mail is required"),
            companyName: string().required("Company Name is Required"),
            password: string().required("Password is required"),
          })}
          onSubmit={ (values, { resetForm }) => {
            console.log(values);
            // try {
            //   const response = await axios.post()
              
            // } catch (error) {
              
            // }

            resetForm();
          }}
        >
          <div className="my-5 text-left">
            <div className="flex relative">
              <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-lg" />
              <Field
                name="emailAddress"
                placeholder="Enter Email Address"
                type="email"
                className=" bg-gray-200 w-full rounded-xl  py-5 px-10 "
              />
            </div>

            <ErrorMessage
              name="emailAddress"
              component="span"
              className="text-red-500 p-2"
            />
          </div>
          <div className="my-5 text-left">
            <div className="flex relative">
              <SlOrganization
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-lg
            "
              />
              <Field
                name="companyName"
                placeholder="Enter Organisation Name"
                className=" bg-gray-200 w-full rounded-xl  py-5 px-10 "
              />
            </div>

            <ErrorMessage
              name="companyName"
              component="span"
              className="text-red-500 p-2"
            />
          </div>
          <div className="my-5 text-left">
            <div className="flex items-center relative">
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 text-lg
            "
              >
                {showPassword ? (
                  <IoEyeSharp onClick={togglePassword} />
                ) : (
                  <PiEyeSlashFill onClick={togglePassword} />
                )}
              </span>
              <Field
                name="password"
                placeholder="Enter Password"
                type={showPassword ? "text" : "password"}
                className="p-4 bg-gray-200 w-full rounded-xl  py-5"
              />
            </div>
            <ErrorMessage
              name="password"
              component="span"
              className="text-red-500 p-2"
            />
          </div>
          <div className="relative my-5">
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 text-lg
            "
            >
              {showPassword ? (
                <IoEyeSharp onClick={togglePassword} />
              ) : (
                <PiEyeSlashFill onClick={togglePassword} />
              )}
            </span>
            <Field
              name="Cpassword"
              placeholder="Confirm Password"
              type="password"
              className="p-4 bg-gray-200 w-full rounded-xl py-5"
            />
            <ErrorMessage
              name="Cpassword"
              component="span"
              className="text-red-500 p-2"
            />
          </div>

          <Button
            className="bg-customGold text-white  text-2xl font-bold w-full py-5 my-10 rounded-full"
            type="submt"
            prop="Sign Up"
          />
        </FormikComponent>
        <div>
          <p className="my-3 text-lg font-bold">
            I already have an account?
            <span className="text-customGold cursor-pointer mx-3">
              <Link href="/Auth/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
