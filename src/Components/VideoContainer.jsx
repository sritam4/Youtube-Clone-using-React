import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../Utils/constant";
import VideoCard from "./VideoCard";
import HomeShimmer from "./HomeShimmer";
import useOnline from "../Utils/useOnline";
import OfflinePage from "./OfflinePage";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isOnline = useOnline();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  console.log(isMenuOpen);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const jsonData = await data.json();
    setVideos(jsonData?.items);
  };

  useEffect(() => {
    getVideos();
    // eslint-disable-next-line
  }, []);

  if (!isOnline) return <OfflinePage />;

  if (videos?.length === 0 || !videos) {
    return <HomeShimmer />;
  }

  return (
    <div
      className={`container mx-auto my-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-1 lg:grid-cols-3 gap-3 max-w-7xl ${
        isMenuOpen ? "xl:grid-col-3" : "xl:grid-cols-4"
      }`}
    >
      {videos?.map((item) => {
        return <VideoCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default VideoContainer;
