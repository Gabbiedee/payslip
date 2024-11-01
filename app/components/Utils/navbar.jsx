import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineNightlight, MdOutlineNightlightRound } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Navbar = ({ title }) => {
  const [showSearch, setshowSearch] = useState(false);
  const [nightMode, setnightMode] = useState(false);
  const clickHandler = () => {
    setshowSearch((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between w-full">
      <h2 className="text-3xl font-extrabold mx-5">{title}</h2>
      <div className="flex w-2/5 h-full items-center justify-evenly text-xl font-extrabold">
        <span>
          <MdOutlineNightlight size={24} />
          <MdOutlineNightlightRound size={24}/>
        </span>
        <div className="flex">
          <div className="flex items-center">
          <span>
            <IoIosNotificationsOutline size={36} className="mx-3"/>
          </span>
            <span>
              <CiSearch onClick={clickHandler} size={36} className="mx-3" />
            </span>
            {showSearch ? <input type="text" className="py-3 px-5 my-2 outline-0 bg-gray-200 rounded-md" /> : ""}
          </div>
        </div>
        <div>
          <h2>ItGabbies</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
