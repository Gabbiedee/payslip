"use client";
import React from "react";
import ProtectedRoute from "../services/protectedRoutes";
import Sidebar from "../components/Utils/sidebar";
import Navbar from "../components/Utils/navbar";

const page = () => {
  return (
    // <ProtectedRoute>
      <div className=" w-screen flex h-screen items-center">
      <Sidebar />
      <div className="flex flex-col h-screen w-full">
        <Navbar title="Dashboard"/>
        <div className="flex h-full items-center justify-center ">
         <p className="text-3xl font-bolder">
         Update Company Profile to view Dashboard</p> 
         </div>
      </div>
      </div>
     
    // </ProtectedRoute>
  );
};

export default page;
