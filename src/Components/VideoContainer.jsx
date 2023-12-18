import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../Utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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

  return (
    <div className="flex flex-wrap  mt-16">
      {videos.map((item) => {
        return <VideoCard {...item} />;
      })}
    </div>
  );
};

export default VideoContainer;
