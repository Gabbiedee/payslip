"use client";
import axios from "axios";
import React from "react";
import urls from "@/app/services/url";
import { Formik, Field, ErrorMessage } from "formik";
import FormikComponent from "../../components/formik";
import Link from "next/link";
import Button from "../../components/Utils/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEmail } from "react-icons/md";
import { SlOrganization } from "react-icons/sl";
import { IoEyeSharp } from "react-icons/io5";
import { PiEyeSlashFill } from "react-icons/pi";
import { object, string, date } from "yup";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [showPassword, setshowPassword] = useState(false);

  const togglePassword = () => {
    setshowPassword((prevState) => !prevState);
  };
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  const router = useRouter();

  return (
    <div className="sm:flex justify-center items-center h-screen">
      <div className="bg-gray-800 sm:h-full py-5 sm:w-1/2 flex flex-col items-center justify-center">
        <h3 className="text-customGold font-extrabold  text-xl sm:text-3xl text-center">
          Space for Company Logo
        </h3>
      </div>

      <div className="h-full sm:w-1/2  flex flex-col justify-center text-center ">
        <div>
          <h3 className=" text-3xl font-extrabold text-gray-600 my-2">
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
          onSubmit={async (values, { resetForm }) => {
            console.log(values);

            const { emailAddress, companyName, password, Cpassword } = values;
            try {
              const response = await axios({
                method: "post",
                url: urls.creatUser,
                data: {
                  emailAddress: emailAddress,
                  organisationName: companyName,
                  password: password,
                  Cpassword: Cpassword,
                },

                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              });
              toast.success(response.message);
              console.log(response.message);
              console.log(response.data);

              router.push("/Auth/login");
            } catch (error) {
              if (!error.response) {
                console.log("No response from Server");
                toast.error("No reseponse from Server");
              } else {
                console.log(error.response.data.message);
                toast.error(error.response.data.message);
              }
            } finally {
              setbuttonDisabled(false);
              resetForm();
            }
          }}
        >
          <div className="my-2 text-left">
            <div className="flex relative">
              <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-sm" />
              <Field
                name="emailAddress"
                placeholder="Enter Email Address"
                type="email"
                className=" bg-gray-200 w-full rounded-xl py-2 text-xs md:py-3 px-10"
              />
            </div>

            <ErrorMessage
              name="emailAddress"
              component="span"
              className="text-xs text-red-500 sm:text-sm p-2"
            />
          </div>
          <div className="my-2 text-left">
            <div className="flex relative">
              <SlOrganization
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-sm
            "
              />
              <Field
                name="companyName"
                placeholder="Enter Organisation Name"
                className=" bg-gray-200 w-full rounded-xl py-2 text-xs md:py-3 px-10"
              />
            </div>

            <ErrorMessage
              name="companyName"
              component="span"
              className="text-xs text-red-500 sm:text-sm p-2"
            />
          </div>
          <div className="my-2 text-left">
            <div className="flex items-center relative">
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 text-sm
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
                className=" bg-gray-200 w-full rounded-xl py-2 text-xs md:py-3 px-5"
              />
            </div>
            <ErrorMessage
              name="password"
              component="span"
              className="text-xs text-red-500 sm:text-sm p-2"
            />
          </div>
          <div className="my-2 text-left">
            <div className=" flex items-center relative">
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 text-sm
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
                type={showPassword ? "text" : "password"}
                className=" bg-gray-200 w-full rounded-xl py-2 text-xs md:py-3 px-5 "
              />
              <ErrorMessage
                name="Cpassword"
                component="span"
                className="text-xs text-red-500 sm:text-sm p-2"
              />
            </div>
          </div>

          <Button
            className="bg-customGold text-white font-bold w-full rounded-full py-2 my-2 md:text-sm  "
            type="submit"
            disabled={buttonDisabled}
            prop={buttonDisabled ? "Submitting..." : "Sign In"}
          />
        </FormikComponent>
        <div>
          <p className="my-3 text-sm font-bold m-auto w-1/2 sm:w-full">
            I already have a account?
            <span className="text-customGold mx-3 cursor-pointer">
              <Link href="/Auth/login">Log In</Link>
            </span>
          </p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Page;
