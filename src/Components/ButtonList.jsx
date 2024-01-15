import React from "react";

const ButtonList = () => {
  const buttonNames = [
    "All",
    "Musics",
    "Cooking",
    "History",
    "React",
    "Thriller",
    "Gaming",
    "Website",
    "Computers",
    "Gaming",
    "Website",
    "Computers",
  ];
  return (
    <div className="w-full flex overflow-x-scroll no-scrollbar fixed mt-[-6px] bg-white pt-2 z-10">
      {buttonNames.map((item, index) => {
        return (
          <div
            className="text-base font-semibold px-3 py-1 m-2 rounded-lg bg-gray-100 text-gray-800 cursor-pointer hover:bg-gray-200"
            key={index}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
