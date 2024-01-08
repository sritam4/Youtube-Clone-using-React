import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../Utils/constant";
import VideoCard from "./VideoCard";
import HomeShimmer from "./HomeShimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const jsonData = await data.json();
    setVideos(jsonData?.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  // console.log(videos.length);

  if (videos.length === 0) {
    return <HomeShimmer />;
  }

  return (
    <div className="flex flex-wrap  mt-16">
      {videos.map((item) => {
        return <VideoCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default VideoContainer;
