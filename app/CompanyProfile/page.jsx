"use client";
import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import ProtectedRoute from "../services/protectedRoutes";
import Sidebar from "../components/Utils/sidebar";
import Navbar from "../components/Utils/navbar";
import FormikComponent from "../components/formik";
import urls from "@/app/services/url";
import AuthContext from "../context/AuthProvider";
import Button from "../components/Utils/Button";

import axios from "axios";

import { object, string, date } from "yup";
import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
 const { auth, setAuth } = useContext(AuthContext);
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  return (
    <ProtectedRoute>
      <div className=" w-screen flex h-screen items-center">
        <Sidebar />
        <div className=" w-screen flex flex-col h-screen items-center">
          <Navbar title="Dashboard" />
          <div className="bg-customWhite flex flex-col justify-center w-full h-full rounded-md">
            <FormikComponent
              initialValues={{
                Address: "",
                companyType: "",
              }}
              validationSchema={object({
                Address: string().required("Company's Address is Required"),
                companyType: string().required("Type of Company is required"),
              })}
              onSubmit={async (values, { resetForm, setSubmitting }) => {
                const token =
                  auth.accessToken || sessionStorage.getItem("accessToken");
                console.log(token);
                if (!token) {
                  setSubmitting(false);
                  return;
                }

                try {
                  console.log(values);

                  const payload = {
                    Address: values.Address,
                    companyType: values.companyType,
                  };

                  console.log(payload);

                  const response = await axios({
                    method: "patch",
                    url: urls.updateCompanyProfile,
                    data: payload,
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                  });

                  toast.success(response.data.message);
                } catch (error) {
                  if (!error.response) {
                    console.log("No response from server");
                    toast.error("No response from server");
                  } else {
                    console.log(error.response.data.message);
                    toast.error(error.response.data.message);
                  }
                } finally {
                  resetForm();
                  setSubmitting(false);
                }
              }}
              className="text-black flex flex-col justify-between h-full w-1/2 bg-white p-5 m-auto rounded-md shadow-xl"
            >
              <div className="flex flex-col w-full justify-between">
                <h3 className="text-2xl font-bold text-center">
                  Update Company Profile
                </h3>
                <div className=" m-3">
                  <label htmlFor="" className="block text-lg font-medium mb-2">
                    Address
                  </label>
                  <Field name="Address" className="p-4 bg-gray-200  w-full" />
                  <ErrorMessage
                    name="Address"
                    component="div"
                    className="text-red-500 p-2"
                  />
                </div>
                <div className=" m-3">
                  <label htmlFor="" className="block text-lg font-medium mb-2">
                    {" "}
                    Type of Company
                  </label>
                  <Field
                    name="companyType"
                    placeholder="Enter what your company Does"
                    className="p-4 bg-gray-200 w-full"
                  />
                  <ErrorMessage
                    name="companyType"
                    component="div"
                    className="text-red-500 p-2"
                  />
                </div>
              </div>

              <Button
                className="bg-customGold text-white font-bold w-full rounded-full py-2 my-2 md:text-sm  "
                type="submit"
                disabled={buttonDisabled}
                prop={buttonDisabled ? "Submitting..." : "Submit"}
              />
            </FormikComponent>
          </div>
        </div>
        <ToastContainer />
      </div>
    </ProtectedRoute>
  );
};

export default Page;
