"use client";
import React from "react";
import jsPDF from "jspdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSearch } from "react-icons/fa";
import PayslipPreview from "../components/preview";
import { useState, useEffect } from "react";

const Page = () => {
  const [employeeSearch, setemployeeSearch] = useState("");
  const [employeeData, setEmployeeData] = useState({
    payPeriod: "",
    noofDays: "",
    Salary: "",
    allowance: "",
    Deductions: "",
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
    const doc = new jsPDF("p", "pt", "a4");

    const content = document.getElementById("payslip-content");

    doc.html(content, {
      callback: function (doc) {
        // Save the PDF
        doc.save("employee_payslip.pdf");
      },
      x: 20,
      y: 20,
      width: 500,
      windowWidth: 650,
    });

    setshowpreview(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h3 className="text-2xl font-bold">Generate Payslip</h3>
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
        <div className=" flex w-full  justify-between m-3">
          <form className="w-1/2 mx-3">
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
                placeholder="Ex: 30 days"
                className="p-4 bg-gray-200  w-full"
              />
            </div>
            <div className="my-3">
              <label htmlFor="">Basic Salary</label>
              <input
                name="Salary"
                value={employeeData.Salary}
                onChange={handleChange}
                type="text"
                placeholder="Ex: 50,000"
                className="p-4 bg-gray-200  w-full"
              />
            </div>
            <div className="my-3">
              <label htmlFor="">Allowance</label>
              <input
                name="allowance"
                value={employeeData.allowance}
                onChange={handleChange}
                type="text"
                placeholder="Ex: "
                className="p-4 bg-gray-200  w-full"
              />
            </div>
            <div className="my-3">
              <label htmlFor="">Deductions</label>
              <input
                name="Deductions"
                value={employeeData.Deductions}
                onChange={handleChange}
                type="text"
                placeholder="Ex:"
                className="p-4 bg-gray-200  w-full"
              />
            </div>
          </form>

          <div className="w-1/2">
            <div id="payslip-content">
              <PayslipPreview employee={employee} value={employeeData} />
            </div>
            <button
              className="p-4 bg-indigo-500 w-3/4 my-4 block mx-auto "
              onClick={generateSlip}
            >
              Generate
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Page;
