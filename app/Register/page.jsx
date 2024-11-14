"use client";
import { Field, Formik, Form, ErrorMessage } from "formik";
import axios from "axios";
import urls from "../services/url";
import Sidebar from "../components/Utils/sidebar";
import Link from "next/link";
import FormikStepper from "../components/formikStepper";
import Navbar from "../components/Utils/navbar";
import { object, string, date } from "yup";
import ProtectedRoute from "../services/protectedRoutes";
import React, { useContext } from "react";
import AuthContext from "@/app/context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <ProtectedRoute>
      <div className=" w-screen flex h-screen items-center">
        <Sidebar />
        <div className=" w-screen flex flex-col h-screen items-center">
          <Navbar title="Dashboard" />
          <div className="bg-customWhite w-full flex h-full items-center justify-center rounded-md">
            <FormikStepper
              initialValues={{
                firstName: "",
                lastName: "",
                DOB: "",
                Gender: "",
                Nationality: "",
                emailAddress: "",
                phoneNo: "",
                Address: "",
                jobTitle: "",
                employmentType: "",
                dateofHire: "",
                EcontactName: "",
                Relationship: "",
                EphoneNo: "",
              }}
              validationSchema={object({
                firstName: string().required(
                  "Employee's Firstname is Required"
                ),
                lastName: string().required("Employee's LastName is Required"),
                DOB: string().required("Employee's Date of Birth is Required"),
                phoneNo: string().required("Employee's Phone No is required"),
                jobTitle: string().required("Employee's Job Role is Required"),
                Address: string().required("Employee's Address is Required"),
                dateofHire: date().required(
                  "Employee's Joining Date is Required"
                ),
                Nationality: string().required(
                  "Employee's Nationality is Required"
                ),
                Gender: string().required("Employee's Nationality is Required"),
                emailAddress: string()
                  .email("Field should contain a valid e-mail")
                  .max(255)
                  .required("E-mail is required"),
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
                    fullName: `${values.firstName} ${values.lastName}`,
                    emailAddress: values.emailAddress,
                    Address: values.Address,
                    JobRole: values.jobTitle,
                    Resumptiondate: values.dateofHire,
                    DOB: values.DOB,
                    Gender: values.Gender,
                    Nationality: values.Nationality,
                    phoneNo: values.phoneNo,
                    employmentType: values.employmentType,
                    emergencyContact: values.EcontactName,
                    Relationship: values.Relationship,
                    emergencyContactPhone: values.EphoneNo,
                  };

                  console.log(payload);

                  
                  const response = await axios({
                    method: "post",
                    url: urls.registerEmployee,
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
            >
              <div className="flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-center">
                  Basic Information!!!
                </h3>
                <div className=" m-3">
                  <label htmlFor="" className="block text-lg font-medium mb-2">
                    {" "}
                    FirstName
                  </label>
                  <Field name="firstName" className="p-4 bg-gray-200  w-full" />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 p-2"
                  />
                </div>
                <div className=" m-3">
                  <label htmlFor="" className="block text-lg font-medium mb-2">
                    {" "}
                    Last Name
                  </label>
                  <Field
                    name="lastName"
                    placeholder="Employee's LastName"
                    className="p-4 bg-gray-200 w-full"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 p-2"
                  />
                </div>
                <div className=" m-3">
                  <label htmlFor="" className="block text-lg font-medium mb-2">
                    {" "}
                    Date of Birth
                  </label>
                  <Field
                    type="date"
                    name="DOB"
                    placeholder="Date of Birth"
                    className="p-4 bg-gray-200 w-full"
                  />
                  <ErrorMessage
                    name="DOB"
                    component="div"
                    className="text-red-500 p-2"
                  />
                </div>
                <div className="m-3">
                  <label
                    className="block text-lg font-medium mb-2"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <div className="flex w-full  rounded-lg overflow-hidden">
                    <label
                      htmlFor="male"
                      className="flex-1 p-4 bg-gray-200 cursor-pointer hover:bg-gray-300 text-center"
                    >
                      <Field
                        type="radio"
                        name="Gender"
                        value="Male"
                        id="male"
                        className="hidden" 
                      />
                      Male
                    </label>

                    <label
                      htmlFor="female"
                      className="flex-1 p-4 bg-gray-200 cursor-pointer hover:bg-gray-300 text-center"
                    >
                      <Field
                        type="radio"
                        name="Gender"
                        value="Female"
                        id="female"
                        className="hidden" 
                      />
                      Female
                    </label>
                  </div>

                  <ErrorMessage
                    name="Gender"
                    component="div"
                    className="text-red-500 p-2"
                  />
                </div>
                <div className=" m-3">
                  <label htmlFor="" className="block text-lg font-medium mb-2">
                    Nationality
                  </label>
                  <Field
                    name="Nationality"
                    placeholder="Employee's Nationality"
                    className="p-4 bg-gray-200 w-full"
                  />
                  <ErrorMessage
                    name="Nationality"
                    component="div"
                    className="text-red-500 p-2"
                  />
                </div>
              </div>

              {/* Contact Information Form Step */}
              <div className="text-black flex flex-col w-full bg-white p-5 rounded-md shadow-2xl">
                <h3 className="text-2xl font-bold text-center">
                  Contact Information
                </h3>
                <div className=" m-3">
                  <label htmlFor="" className="block text-lg font-medium mb-2">
                    Email Address
                  </label>
                  <Field
                    name="emailAddress"
                    placeholder="Employee's Email Address"
                    className="p-4 bg-gray-200  w-full"
                  />
                  <ErrorMessage
                    name="emailAddress"
                    component="div"
                    className="text-red-500 p-2"
                  />
                </div>

                <div className=" m-3">
                  <label htmlFor="" className="block text-lg font-medium mb-2">
                    Phone Number
                  </label>
                  <Field
                    name="phoneNo"
                    placeholder="Employee's Phone Number"
                    className="p-4 bg-gray-200 w-full"
                  />
                  <ErrorMessage
                    name="phoneNo"
                    component="div"
                    className="text-red-500 p-2"
                  />
                </div>
                <div className=" m-3">
                  <label htmlFor="" className="block text-lg font-medium mb-2">
                    Home Address
                  </label>
                  <Field
                    name="Address"
                    placeholder="Employee's Address"
                    className="p-4 bg-gray-200 w-full"
                  />
                  <ErrorMessage
                    name="Address"
                    component="div"
                    className="text-red-500 p-2"
                  />
                </div>
              </div>

              {/* Job Details */}
              <div className="text-black flex flex-col w-full bg-white p-5 rounded-md shadow-2xl">
                <h3 className="text-2xl font-bold text-center">Job Details</h3>
                <div className=" m-3">
                  <label htmlFor="" className="block text-lg font-medium mb-2">
                    Job Role
                  </label>
                  <Field
                    name="jobTitle"
                    placeholder="Enter Job Role"
                    className="p-4 bg-gray-200  w-full"
                  />
                  <ErrorMessage
                    name="jobTitle"
                    component="div"
                    className="text-red-500 p-2"
                  />
                </div>

                <div className=" m-3">
                  <label htmlFor="" className="block text-lg font-medium mb-2">
                    Employment Type
                  </label>
                  <Field
                    name="employmentType"
                    placeholder="Employment Type"
                    className="p-4 bg-gray-200 w-full"
                  />
                  <ErrorMessage
                    name="employmentType"
                    component="div"
                    className="text-red-500 p-2"
                  />
                </div>
                <div className=" m-3">
                  <label htmlFor="" className="block text-lg font-medium mb-2">
                    Date of Hire
                  </label>
                  <Field
                    name="dateofHire"
                    placeholder="Enter Employee's Date of Hire"
                    className="p-4 bg-gray-200 w-full"
                    type="date"
                  />
                  <ErrorMessage
                    name="dateofHire"
                    component="div"
                    className="text-red-500 p-2"
                  />
                </div>
              </div>
              {/* Emergency Contact*/}
              <div className="text-black flex flex-col w-full bg-white p-5 rounded-md shadow-2xl">
                <h3 className="text-2xl font-bold text-center">
                  Emergency Contact
                </h3>
                <div className=" m-3">
                  <label htmlFor="" className="block text-lg font-medium mb-2">
                    Emergency Contact
                  </label>
                  <Field
                    name="EcontactName"
                    placeholder="Emergency Contact"
                    className="p-4 bg-gray-200  w-full"
                  />
                  {/* <ErrorMessage
                  name="EcontactName"
                  component="div"
                  className="text-red-500 p-2"
                /> */}
                </div>

                <div className=" m-3">
                  <label htmlFor="" className="block text-lg font-medium mb-2">
                    Relationship with Emergency Contact
                  </label>
                  <Field
                    name="Relationship"
                    placeholder="Enter Relationship with Emergency Conatct"
                    className="p-4 bg-gray-200 w-full"
                  />
                  {/* <ErrorMessage
                  name="Relationship"
                  component="div"
                  className="text-red-500 p-2"
                /> */}
                </div>
                <div className=" m-3">
                  <label htmlFor="" className="block text-lg font-medium mb-2">
                    Emergency Contact Phone Number
                  </label>
                  <Field
                    name="EphoneNo"
                    placeholder="Enter Emergency Contact Phone Number"
                    className="p-4 bg-gray-200 w-full"
                  />
                  {/* <ErrorMessage
                  name="EphoneNo"
                  component="div"
                  className="text-red-500 p-2"
                /> */}
                </div>
              </div>
            </FormikStepper>
          </div>
        </div>
        <ToastContainer />
      </div>
     </ProtectedRoute>
  );
};

export default Page;
