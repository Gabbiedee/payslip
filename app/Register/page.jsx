"use client";
import { Field, Formik, Form, ErrorMessage } from "formik";
import Sidebar from "../components/Utils/sidebar";
import Link from "next/link";
import FormikStepper from "../components/formikStepper";
import Navbar from "../components/Utils/navbar";
import { object, string, date } from "yup";
import { toast } from "react-toastify";

const Page = () => {
  return (
    <div className="bg-white w-screen flex h-screen items-center">
      <Sidebar />
      <div className="bg-white w-screen flex flex-col py-5 h-screen items-center">
        <Navbar title="Dashboard" />
        <div className="bg-customWhite w-full flex h-full items-center justify-center rounded-2xl">
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
              Relationship:"",
              EphoneNo: ""
            }}
 
            validationSchema={object({
              firstName: string().required("Employee's Firstname is Required"),
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
              emailAddress: string()
                .email("Field should contain a valid e-mail")
                .max(255)
                .required("E-mail is required"),
            })}

            onSubmit={(values, { resetForm }) => {
             console.log(values)

             resetForm()
              
            }}
          >
            <div className="flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-center">
                Basic Information!!!
              </h3>
              <div className=" m-3">
                <label htmlFor=""> FirstName</label>
                <Field
                  name="firstName"
                  className="p-4 bg-gray-200  w-full"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 p-2"
                />
              </div>
              <div className=" m-3">
              <label htmlFor=""> Last Name</label>
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
              <label htmlFor=""> Date of Birth</label>
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
              <div className=" m-3">
              <label htmlFor=""> Gender</label>
                <Field
                  name="Gender"
                  placeholder="Gender"
                  className="p-4 bg-gray-200 w-full"
                />
                <ErrorMessage
                  name="Gender"
                  component="div"
                  className="text-red-500 p-2"
                />
              </div>
              <div className=" m-3">
              <label htmlFor="">Nationality</label>
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
              <label htmlFor="">Email Address</label>
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
              <label htmlFor="">Phone Number</label>
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
              <label htmlFor="">Home Address</label>
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
              <label htmlFor="">Job Role</label>
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
              <label htmlFor="">Employment Type</label>
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
              <label htmlFor="">Date of Hire</label>
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
              <label htmlFor="">Emergency Contact</label>
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
              <label htmlFor="">Relationship with Emergency Contact</label>
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
              <label htmlFor="">Emergency Contact Phone Number</label>
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
    </div>
  );
};

export default Page;
