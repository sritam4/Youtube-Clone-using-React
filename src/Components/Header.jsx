import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineVideocam } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { SEARCH_SUGGESTION_URL } from "../Utils/constant";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
// import { Link } from "react-router-dom";
import { saveSuggestions } from "../Utils/searchSlice";
// import store from "../Utils/store";

const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  // const [suggestionsHistory, setSuggestionsHistory] = useState({});

  const suggestionsHistory = useSelector((store) => store.search);
  const menuOpenHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestion = async () => {
    const data = await fetch(SEARCH_SUGGESTION_URL + searchValue);
    const jsondata = await data.json();
    setSuggestions(jsondata[1]);
    dispatch(
      saveSuggestions({
        [searchValue]: jsondata[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (suggestionsHistory[searchValue]) {
        setSuggestions(suggestionsHistory[searchValue]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  return (
    <div className="p-2 px-5 flex justify-between gap-10 fixed top-0 left-0 w-full bg-white z-50">
      {/* Hamberger menu and Logo */}
      <div className="flex gap-4 items-center min-w-fit">
        <button
          className="h-6 w-6 text-2xl text-center"
          onClick={() => menuOpenHandler()}
        >
          <IoMenu />
        </button>
        {/* <Link to={"/"}>Home</Link> */}
        <img
          className="h-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&usqp=CAU"
          alt="logo"
        />
      </div>
      {/* Search Box and search button */}
      <div className="flex flex-col w-1/2 max-w-xl relative text-base">
        <div className="flex w-full items-center">
          <input
            className=" w-full border border-gray-400 rounded-l-full py-2 px-4 flex items-center focus:outline-none focus:border-blue-800"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          {searchValue && (
            <button
              onClick={() => {
                setSearchValue("");
              }}
              className="absolute right-12"
            >
              <RxCross1 />
            </button>
          )}
          <div className="border border-gray-400 rounded-r-full p-3 flex items-center ">
            <IoSearch className="text-gray-600" />
          </div>
        </div>
        <div className="bg-white absolute w-[calc(100%-40px)] mt-10 min-w-[300px]  border-gray-300 rounded-3xl shadow-lg">
          <ul>
            {/* {console.log(suggestions)} */}
            {showSuggestion &&
              suggestions.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="bg-white px-4 py-1 flex items-center gap-3 font-semibold  hover:bg-gray-100"
                    onClick={() => console.log("Clicked")}
                  >
                    <CiSearch />
                    {item}
                  </li>
                );
              })}
          </ul>
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
