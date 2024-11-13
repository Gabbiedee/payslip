import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { RiProfileLine, RiAiGenerate } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Logout from "./logout";
const Sidebar = () => {
  return (
    <div className=" flex flex-col h-screen w-1/12 text-lg font-bold ">
      <ul className="flex flex-col h-1/2 justify-center py-5">
        <li className="flex items-center p-5 hover:shadow-xl my-3">
          <span className="mx-3">
            <MdDashboard />
          </span>
          <span>
            <Link href="/Dashboard">Dashboard</Link>
          </span>
        </li>
        <li className="flex items-center p-5 hover:shadow-2xl my-3">
          <span className="mx-3" >
            <RiProfileLine />
          </span>
          <span>
            <Link href="/profile">Company Profile</Link>
          </span>
        </li>
        <li className="flex items-center p-5 hover:shadow-2xl my-3">
          <span className="mx-3">
            <AiOutlineUsergroupAdd />
          </span>
          <span>
            <Link href="/Register">Register Employee</Link>
          </span>
        </li>
        <li className="flex items-center p-5 hover:shadow-2xl my-3">
          <span className="mx-3">
            <RiAiGenerate />
          </span>
          <span>
            <Link href="/Generate">Generate Payslip</Link>
          </span>
        </li>
      </ul>
      <ul className="flex flex-col h-1/2 justify-center ">
        <li className="flex items-center p-5 hover:shadow-2xl my-3">
          <span className="mx-3">
            <IoMdHelpCircleOutline />
          </span>
          <span>
            <Link href="">Get help</Link>
          </span>
        </li>
        <li className="flex items-center p-5 hover:shadow-2xl my-3 text-red-500">
          <span className="mx-3">
            <CiLogout />
          </span>
          <span>
            <Logout/>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
