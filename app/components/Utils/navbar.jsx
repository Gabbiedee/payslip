import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Navbar = ({ title }) => {
  const [showSearch, setShowSearch] = useState(false);

  const clickHandler = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <div className="flex items-center py-4 px-6 md:px-10 justify-between w-full bg-white shadow-md">
      {/* Title */}
      <h2 className="text-2xl md:text-xl font-extrabold">{title}</h2>
      
      {/* Right Side Icons and Search */}
      <div className="flex w-auto md:w-2/5 items-center justify-end md:justify-evenly text-lg font-extrabold space-x-4 md:space-x-6">
        
        {/* Notification Icon */}
        <IoIosNotificationsOutline size={20} className="cursor-pointer hidden md:block" />

        {/* Search Icon and Input */}
        <div className="relative flex items-center">
          <CiSearch 
            onClick={clickHandler} 
            size={20} 
            className="cursor-pointer"
          />
          {showSearch && (
            <input 
              type="text" 
              placeholder="Search" 
              className="absolute top-8 left-0 w-40 md:w-60 p-2 border rounded-md outline-none bg-gray-200" 
            />
          )}
        </div>
        
        {/* Profile Name */}
        <div className="hidden md:block">
          <h2 className="text-sm font-semibold">ItGabbies</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;