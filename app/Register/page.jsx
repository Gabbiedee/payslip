"use client";
import { Field, Formik, Form, ErrorMessage } from "formik";
import FormikStepper from "../components/formikStepper";
import { object, string, date} from "yup";

const Page = () => {
 
  return (
    <div className="bg-white w-screen border border-red-500 flex flex-col h-screen justify-center items-center">
      
      <FormikStepper
        initialValues={{
          firstName: "",
          lastName: "",
          Rdate: "",
          jobRole: "",
          Address: "",
          companyName: "",
          CAddress: "",
        }}
        validationSchema={object({
          firstName: string().required("Employee's Firstname is Required"),
          lastName: string().required("Employee's LastName is Required"),
          jobRole: string().required("Employee's Job Role is Required"),
          Address: string().required("Employee's Address is Required"),
          Rdate: date().required("Employee's Joining Date is Required"),
          companyName: string().required("Employee's Job Role is Required"),
          CAddress: string().required("Company's Address is Required")
        })}
        onSubmit={(values, {resetForm}) => {
          console.log(values);

          resetForm();
        }}
       
      >
      <div className="flex flex-col justify-between" >
      <h3>Add your Employees Data here!!!</h3>
          <div className=" m-3">
            <Field
              name="firstName"
              placeholder="Employee's FirstName"
              className="p-4 bg-gray-200  w-full"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500 p-2"
            />
          </div>
          <div className=" m-3" >
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
            <Field
              name="jobRole"
              placeholder="Employee's Job Role"
              className="p-4 bg-gray-200 w-full"
            />
            <ErrorMessage
              name="jobRole"
              component="div"
              className="text-red-500 p-2"
            />
          </div>
          <div className=" m-3">
            <Field
              name="Rdate"
              placeholder="Employee's Joining Date"
              className="p-4 bg-gray-200 w-full"
              type= "date"
            />
            <ErrorMessage
              name="Rdate"
              component="div"
              className="text-red-500 p-2"
            />
          </div>
          <div className=" m-3">
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


          {/* Organisation Form Step */}
      <div className="text-black flex flex-col w-full bg-white p-5 rounded-md shadow-2xl">
      <h3>Add Organisation Data here!!!</h3>
          <div className=" m-3">
            <Field
              name="companyName"
              placeholder="Enter Company Name"
              className="p-4 bg-gray-200  w-full"
            />
            <ErrorMessage
              name="companyName"
              component="div"
              className="text-red-500 p-2"
            />
          </div>
          
          <div className=" m-3">
            <Field
              name="CAddress"
              placeholder="Enter your Company's Address"
              className="p-4 bg-gray-200 w-full"
            />
            <ErrorMessage
              name="CAddress"
              component="div"
              className="text-red-500 p-2"
            />
          </div>
          </div>
      </FormikStepper>
    </div>
  );
};

export default Page;
