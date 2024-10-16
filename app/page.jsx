"use client";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { object, string, number, date, InferType } from "yup";

const Page = () => {
  return (
    <div className="bg-white flex flex-col h-screen justify-center items-center">
      <h3>Add your Employees Data here!!!</h3>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          jobRole: "",
          Address: "",
        }}
        validationSchema={object({
          firstName: string().required("Employee's Firstname is Required"),
          lastName: string().required("Employee's LastName is Required"),
          jobRole: string().required("Employee's Job Role is Required"),
          Address: string().required("Employee's Address is Required"),
        })}
        onSubmit={(values, {resetForm}) => {
          console.log(values);

          resetForm();
        }}
      >
        <Form
          className="text-black flex flex-col w-1/3 bg-white p-5 rounded-md  shadow-2xl"
          autoComplete="off"
        >
          <div className=" m-3">
            <Field
              name="firstName"
              placeholder="Employee's FirstName"
              className="p-2 bg-gray-200  w-full"
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
              className="p-2 bg-gray-200 w-full"
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
              className="p-2 bg-gray-200 w-full"
            />
            <ErrorMessage
              name="jobRole"
              component="div"
              className="text-red-500 p-2"
            />
          </div>
          <div className=" m-3">
            <Field
              name="Address"
              placeholder="Employee's Address"
              className="p-2 bg-gray-200 w-full"
            />
            <ErrorMessage
              name="Address"
              component="div"
              className="text-red-500 p-2"
            />
          </div>
          <div className=" m-3">
            <button className="p-2 bg-gray-200 w-full" type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Page;
