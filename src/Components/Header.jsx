import React, { useEffect, useState, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineVideocam } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { SEARCH_SUGGESTION_URL, YOUTUBE_LOGO_URL } from "../Utils/constant";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { saveSuggestions } from "../Utils/searchSlice";
import useOnline from "../Utils/useOnline";

const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  // const [suggestionsHistory, setSuggestionsHistory] = useState({});
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const isOnline = useOnline();

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

  const focusInputBox = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleEnterKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      setShowSuggestion(false);
      inputRef.current.blur();
    }
  };

  const handleSearch = () => {
    searchValue && navigate("/search?search_query=" + searchValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (suggestionsHistory[searchValue]) {
        setSuggestions(suggestionsHistory[searchValue]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    setShowSuggestion(true);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchValue]);

  return (
    <div className="p-2 px-5 flex justify-between gap-10 fixed top-0 left-0 w-full bg-white z-50">
      {/* Hamberger menu and Logo */}
      <div className="flex gap-4 items-center min-w-fit">
        <button
          className="h-10 w-10 p-2 text-2xl text-center hover:bg-gray-200 rounded-full"
          onClick={() => menuOpenHandler()}
        >
          <IoMenu />
        </button>
        <Link to={"/"}>
          <img className="h-5" src={YOUTUBE_LOGO_URL} alt="logo" />
        </Link>
      </div>
      {/* Search Box and search button */}
      <div className="flex flex-col w-1/2 max-w-xl relative text-base">
        <div className="flex w-full items-center">
          <input
            className=" w-full border border-gray-400 rounded-l-full py-2 px-4 flex items-center focus:outline-none focus:border-blue-800"
            type="text"
            ref={inputRef}
            disabled={!isOnline}
            placeholder="Search"
            value={searchValue}
            onKeyDown={(e) => handleEnterKeyDown(e)}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setTimeout(() => setShowSuggestion(false), 250)}
          />
          {searchValue && (
            <button
              onClick={() => {
                setSearchValue("");
                focusInputBox();
              }}
              className="absolute right-12"
            >
              <RxCross1 />
            </button>
          )}
          <Link
            to="#"
            onClick={() => handleSearch()}
            className="border border-gray-400 rounded-r-full p-3 flex items-center "
          >
            <IoSearch className="text-gray-600" />
          </Link>
        </div>
        {showSuggestion && (
          <div className="bg-white absolute w-[calc(100%-40px)] mt-11 min-w-[300px]  border-gray-300 rounded-3xl shadow-lg">
            <ul>
              {suggestions.map((item) => {
                return (
                  <li key={item}>
                    <Link
                      className="bg-white px-4 py-1 flex items-center gap-3 font-semibold  hover:bg-gray-100"
                      onClick={() => setSearchValue(item)}
                      to={"/search?search_query=" + item}
                    >
                      <CiSearch />
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
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
