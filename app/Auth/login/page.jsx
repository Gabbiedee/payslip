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
import { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [showPassword, setshowPassword] = useState(false);

  const togglePassword = () => {
    setshowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 h-full w-1/2">
        <h3>My logo</h3>
      </div>

      <div className="h-full w-1/2  flex flex-col justify-center text-center">
        <div>
          <h3 className="text-7xl font-extrabold text-gray-600 my-5">
            Welcome Back....
          </h3>
        </div>
        <FormikComponent
          initialValues={{
            emailOrCompany: "",
            password: "",
          }}
          validationSchema={object({
            emailOrCompany: string().required(
              "E-mail or Company Name is required"
            ),

            password: string().required("Password is required"),
          })}
          onSubmit={(values, { resetForm }) => {
            console.log(values);

            resetForm();
          }}
        >
          <div className="my-5 text-left">
            <div className="flex relative">
              <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-lg" />
              <Field
                name="emailOrCompany"
                placeholder="Enter Email Address"
                type="email"
                className=" bg-gray-200 w-full rounded-xl  py-5 px-10 "
              />
            </div>

            <ErrorMessage
              name="emailOrCompany"
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

          <Button
            className="bg-customGold text-white text-2xl font-bold w-full py-5 my-10 rounded-full"
            type="submt"
            prop="Login"
          />
        </FormikComponent>
        <div>
          <p className="my-3 text-lg font-bold">
            Do not have an account?
            <span className="text-customGold mx-3 cursor-pointer">
              <Link href="/Auth/signup">SignUp</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
