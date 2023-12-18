import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineVideocam } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const menuOpenHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="p-2 px-5 flex justify-between shadow-md gap-10 fixed top-0 left-0 w-full bg-white">
      {/* Hamberger menu and Logo */}
      <div className="flex gap-4 items-center min-w-fit">
        <button
          className="h-6 w-6 text-2xl text-center"
          onClick={() => menuOpenHandler()}
        >
          <IoMenu />
        </button>
        <img
          className="h-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&usqp=CAU"
          alt="logo"
        />
      </div>
      {/* Search Box and search button */}
      <div className="flex w-1/2 justify-center max-w-xl ">
        <input
          className=" w-full border border-gray-400 rounded-l-full px-4 flex items-center focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <div className="border border-gray-400 rounded-r-full px-3 flex items-center ">
          <IoSearch className="text-gray-600" />
        </div>
      </div>
      {/* User and Notification section */}
      <div className="p-1 px-5 text-2xl flex gap-5 items-center md:gap-7">
        <MdOutlineVideocam className="text-3xl" />
        <MdNotificationsNone />
        <FaRegUserCircle />
      </div>
    </div>
  );
};

export default Header;
