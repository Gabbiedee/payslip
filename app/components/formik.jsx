"use client";
import React from "react";
import { useState } from "react";
import { Form, Formik } from "formik";

const FormikComponent = ({ children, className, ...props }) => {
  return (
    <div>
      <Formik {...props}>
      
        <Form
        autoComplete="off"
        className={className}
      >
        {children}
      </Form>
    
      </Formik>
    </div>
  );
};

export default FormikComponent;
