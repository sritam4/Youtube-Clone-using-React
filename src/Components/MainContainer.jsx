import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const leftMargin = useSelector((store) => store.app.mainContainerMargin);
  // console.log(leftMargin);

  return (
    <div className={`px-10 w-full ${leftMargin} `}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
