import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-4 w-52 text-base bg-white fixed top-12 bottom-0 left-0 z-30">
      <div>
        <ul className="font-semibold flex flex-col gap-4 pb-3">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <hr />
      <div>
        <h1 className="py-2 mt-4 font-semibold">You </h1>
        <ul className="flex flex-col gap-2 pb-3">
          <li>Your channel</li>
          <li>History</li>
          <li>Your videos</li>
          <li>Watch later</li>
          <li>Your clops</li>
        </ul>
      </div>
      <hr />
      <div>
        <h1 className="py-2 mt-4 font-semibold">Explore</h1>
        <ul className="flex flex-col gap-2 pb-3">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Musics</li>
          <li>Movies</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
