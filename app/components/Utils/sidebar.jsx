import { useState } from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { RiProfileLine, RiAiGenerate } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Logout from "./logout";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-lg font-bold md:w-1/6 md:text-sm">
      <button
        className="md:hidden p-4 bg-blue-500 text-white w-full text-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>

      {/* Dropdown for smaller screens */}
      <div
        className={`flex flex-col w-full transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <ul className="flex flex-col h-1/2 w-full justify-center items-center space-y-10">
          {[
            { icon: <MdDashboard />, label: "Dashboard", href: "/Dashboard" },
            { icon: <RiProfileLine />, label: "Company Profile", href: "/CompanyProfile" },
            { icon: <AiOutlineUsergroupAdd />, label: "Register Employee", href: "/Register" },
            { icon: <RiAiGenerate />, label: "Generate Payslip", href: "/Generate" },
          ].map(({ icon, label, href }) => (
            <li
              key={label}
              className="flex items-center w-full py-4 px-6 hover:bg-gray-100 text-gray-700 transition duration-300"
            >
              <span className="mr-3">{icon}</span>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Bottom section with Get help and Logout */}
        <ul className="w-full flex flex-col items-center mt-auto">
          <li className="flex items-center w-full py-4 px-6 hover:bg-gray-100 text-gray-700 transition duration-300">
            <span className="mr-3">
              <IoMdHelpCircleOutline />
            </span>
            <Link href="#">Get help</Link>
          </li>
          <li className="flex items-center w-full py-4 px-6 hover:bg-red-100 text-red-500 transition duration-300">
            <span className="mr-3">
              <CiLogout />
            </span>
            <Logout />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;