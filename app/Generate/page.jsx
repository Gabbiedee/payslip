"use client";

import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import axios from "axios";
import urls from "../services/url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSearch } from "react-icons/fa";
import PayslipPreview from "../components/preview";
import Navbar from "../components/Utils/navbar";
import Sidebar from "../components/Utils/sidebar";
import ProtectedRoute from "../services/protectedRoutes";

const Page = () => {
  const [fullName, setfullName] = useState("");
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const [employeeData, setEmployeeData] = useState({
    payPeriod: "",
    noofDays: "",
    Salary: "",
    allowance: "",
    Deductions: "",
  });
  const [showPreview, setshowpreview] = useState(false);
  const [companyDetails, setCompanyDetails] = useState(null)



    const getCompany = async ()=> {
      const token = sessionStorage.getItem("accessToken");

      const response = await axios({
        method: "get",
        url: urls.getCompanyProfile,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.data)
      return response.data.data
    }
  
    useEffect(() => {
      (async () => {
        const data = await getCompany();
        setCompanyDetails(data);
      })();
    }, []);
  

  const fetchEmployee = async () => {
    if (!fullName) {
      return toast.error("Enter employee name");
    }
    const token = sessionStorage.getItem("accessToken");

    try {
      const response = await axios({
        method: "get",
        url: urls.getEmployee,
        params: { fullName },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const employees = response.data.data[0];
      console.log("Fetched Employee Data:", employees); 
      setEmployeeDetails(employees);
      setshowpreview(true); 
      setfullName(""); 
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      } else if (error.response) {
        console.log("Error response:", error.response);
        toast.error("An error occurred. Please try again.");
      } else {
        console.log("Server is not responding");
        toast.error("Server is not responding");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateSlip = () => {
    const { payPeriod, Salary } = employeeData;

    if (!payPeriod || !Salary) {
      return toast.error("Kindly provide all fields");
    }

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

    setshowpreview(false); // Hide the preview after generating the slip
  };

  return (
    <ProtectedRoute>
      <div className=" w-screen flex h-screen items-start">
        <Sidebar />
        <div className="flex flex-col h-screen w-full">
          <Navbar title="Generate PaySlip" />
          <div className="bg-customWhite w-full flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">Generate Payslip</h3>
            <div className="flex w-2/5 relative text-center items-center m-3">
              <input
                className="p-4 bg-gray-200  w-full"
                placeholder="Search for Employee by Full Name"
                type="text"
                value={fullName}
                onChange={(e) => {
                  setfullName(e.target.value);
                }}
              />
              <FaSearch
                className="text-customGold absolute right-2 text-lg cursor-pointer"
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
                    <PayslipPreview
                      employee={employeeDetails}
                      company = {companyDetails}
                      value={employeeData}
                    />
                  </div>
                  <button
                    className="p-4 bg-customGold w-3/4 my-4 block mx-auto "
                    onClick={generateSlip}
                  >
                    Generate
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <ToastContainer />
      </div>
    </ProtectedRoute>
  );
};

export default Page;
