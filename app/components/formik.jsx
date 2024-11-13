"use client";
import React from "react";
import { useState } from "react";
import { Form, Formik } from "formik";

const FormikComponent = ({ children, ...props }) => {
  return (
    <div>
      <Formik {...props}>
      
        <Form
        autoComplete="off"
        className="text-black flex flex-col justify-between bg-white p-5  w-3/4 m-auto rounded-md shadow-2xl"
      >
        {children}
      </Form>
    
      </Formik>
    </div>
  );
};

export default FormikComponent;
