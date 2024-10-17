"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Field, ErrorMessage, resetForm, useFormikContext } from "formik";
import { object, string, date } from "yup";
import "react-toastify/dist/ReactToastify.css";
import { FaSearch } from "react-icons/fa";
import PayslipPreview from "../components/preview";
import FormikStepper from "../components/formikStepper";
import { useState, useEffect } from "react";

const Page = () => {
  const [employeeSearch, setemployeeSearch] = useState("");
  const [employeeData, setEmployeeData] = useState({
    payPeriod: "",
    noofDays: "",
    Salary: "",
  });
  const [showPreview, setshowpreview] = useState(false);

  const employee = {
    firstName: "Dolapo",
    lastName: "Akingboju",
    Rdate: "10-10-2024",
    jobRole: "Frontend",
    Address: "Federal Housing, Lugbe, Abuja",
    companyName: "Itsgabbies",
    CAddress: "Maitama, Abuja",
  };

  const fetchEmployee = () => {
    if (!employeeSearch) {
      return toast.error("enter employee name");
    }

    console.log(employeeSearch);
    setshowpreview(true);
    setemployeeSearch("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateSlip = () => {
    const doc = new jsPDF();

    // Add a title
    doc.setFontSize(18);
    doc.text("Employee Payslip", 14, 22);

    // Add employee details
    doc.setFontSize(12);
    doc.text(
      `Employee Name: ${employee.firstName} ${employee.lastName}`,
      14,
      35
    );
    doc.text(`Job Role: ${employee.jobRole}`, 14, 42);
    doc.text(`Address: ${employee.Address}`, 14, 49);
    doc.text(`Company Name: ${employee.companyName}`, 14, 56);
    doc.text(`Joining Date: ${employee.Rdate}`, 14, 63);

    // Generate payslip details or table (example)
    const tableColumn = ["Description", "Amount"];
    const tableRows = [
      ["Basic Salary", "$3000"],
      ["Allowance", "$500"],
      ["Deductions", "$100"],
      ["Net Salary", "$3400"],
    ];

    // Add table
    doc.autoTable({
      startY: 70,
      head: [tableColumn],
      body: tableRows,
    });

    // Save the PDF
    doc.save("employee_payslip.pdf");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h3>Generate Payslip</h3>
      <div className="flex w-2/5 relative text-center items-center m-3">
        <input
          className="p-4 bg-gray-200  w-full"
          type="text"
          value={employeeSearch}
          onChange={(e) => {
            setemployeeSearch(e.target.value);
          }}
        />
        <FaSearch
          className="text-indigo-500 absolute right-2 text-lg cursor-pointer"
          onClick={fetchEmployee}
        />
      </div>

      {/* Preview Section */}
      {showPreview && (
        <div className=" w-2/5 items-center m-3">
          <form className="w-full">
            <div className="my-3">
              <label htmlFor="">Pay Period</label>
              <input
                type="text"
                name="payPeriod"
                value={employeeData.payPeriod}
                onChange={handleChange}
                placeholder="Ex: Oct 2024"
                className="p-4 bg-gray-200  w-full"
              />
            </div>
            <div className="my-3">
              <label htmlFor="">Number of Days</label>
              <input
                name="noofDays"
                value={employeeData.noofDays}
                onChange={handleChange}
                type="text"
                placeholder="Ex: Oct 2024"
                className="p-4 bg-gray-200  w-full"
              />
            </div>
            <div className="my-3">
              <label htmlFor="">Salary</label>
              <input
                name="Salary"
                value={employeeData.Salary}
                onChange={handleChange}
                type="text"
                placeholder="Ex: Oct 2024"
                className="p-4 bg-gray-200  w-full"
              />
            </div>
          </form>

          <PayslipPreview employee={employee} value={employeeData} />
          <button className="p-4 bg-indigo-500 w-2/5" onClick={generateSlip}>
            Generate
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Page;
