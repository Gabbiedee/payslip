"use client";
import React from "react";
import ProtectedRoute from "../services/protectedRoutes";
import Sidebar from "../components/Utils/sidebar";
import Navbar from "../components/Utils/navbar";

const page = () => {
  return (
    <ProtectedRoute>
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <Navbar title="Dashboard" />
        <div className="flex-1 flex items-center justify-center bg-customWhite">
          <p className="text-3xl font-bold">
            Update Company Profile to view Dashboard
          </p>
        </div>
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default page
