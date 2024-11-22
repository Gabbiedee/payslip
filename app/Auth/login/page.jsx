"use client";
import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import FormikComponent from "../../components/formik";
import urls from "@/app/services/url";
import Link from "next/link";
import Button from "../../components/Utils/Button";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { IoEyeSharp } from "react-icons/io5";
import { PiEyeSlashFill } from "react-icons/pi";
import { object, string, date } from "yup";
import { useState, useContext } from "react";
import AuthContext from "@/app/context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const router = useRouter();
  const { setAuth } = useContext(AuthContext);
  const [showPassword, setshowPassword] = useState(false);

  const togglePassword = () => {
    setshowPassword((prevState) => !prevState);
  };

  const [buttonDisabled, setbuttonDisabled] = useState(false);

  return (
    <div className="sm:flex justify-center items-center h-screen">
      <div className="bg-gray-800 sm:h-full py-5 sm:w-1/2 flex flex-col items-center justify-center">
        <h3 className="text-customGold font-extrabold  text-xl sm:text-3xl text-center">
          My logo
        </h3>
      </div>

      <div className="h-full sm:w-1/2  flex flex-col justify-center text-center ">
        <div>
          <h3 className=" text-3xl font-extrabold text-gray-600 my-2">
            Welcome Back....
          </h3>
        </div>
        <FormikComponent
          initialValues={{
            emailAddress: "",
            password: "",
          }}
          validationSchema={object({
            emailAddress: string().required("E-mail  is required"),

            password: string().required("Password is required"),
          })}
          onSubmit={async (values, { resetForm }) => {
            setbuttonDisabled(true);
            try {
              console.log(values);
              const payload = {
                emailAddress: values.emailAddress,
                password: values.password,
              };
              const response = await axios({
                method: "post",
                url: urls.loginUser,
                data: payload,
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              });

              const accessToken = response.data.data;

              if (accessToken) {
                await setAuth({
                  emailAddress: values.emailAddress,
                  password: values.password,
                  accessToken,
                });
                sessionStorage.setItem("accessToken", accessToken);
                router.push("/Dashboard");
              } else {
                router.push("/login");
              }
            } catch (error) {
              if (!error.response.data.message) {
                console.log("No response from server");
                toast.error("No response from server");
              } else {
                console.log(error.response.data.message);
                toast.error(error.response.data.message);
              }
            } finally {
              setbuttonDisabled(false);
              resetForm();
            }
          }}
           className="text-black flex flex-col justify-between bg-white p-5  w-3/4 m-auto rounded-md shadow-xl"
        >
          <div className="my-2 text-left">
            <div className="flex relative">
              <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-sm" />
              <Field
                name="emailAddress"
                placeholder="Enter Email Address"
                type="email"
                className=" bg-gray-200 w-full rounded-xl py-2 text-xs md:py-3 px-10 "
              />
            </div>

            <ErrorMessage
              name="emailAddress"
              component="span"
              className="text-xs text-red-500 md:text-sm p-1"
            />
          </div>

          <div className="my-2 text-left">
            <div className="flex items-center relative">
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 text-md
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
                className=" bg-gray-200 w-full rounded-xl py-2 text-xs sm:py-3 px-5 "
              />
            </div>
            <ErrorMessage
              name="password"
              component="span"
              className="text-xs text-red-500 sm:text-sm p-1"
            />
          </div>

          <Button
            className="bg-customGold text-white font-bold w-full rounded-full py-2 my-2 md:text-sm "
            type="submit"
            disabled={buttonDisabled}
            prop={buttonDisabled ? "Submitting..." : "Log In"}
          />
        </FormikComponent>
        <div>
          <p className="my-3 text-sm font-bold m-auto w-1/2 sm:w-full">
            Do not have an account?
            <span className="text-customGold mx-3 cursor-pointer">
              <Link href="/Auth/signup">SignUp</Link>
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Page;
