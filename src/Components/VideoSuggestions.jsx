import React, { useEffect, useState } from "react";
import { RECOMENDED_API_URL } from "../Utils/constant";
import VideoSuggestionCard from "./VideoSuggestionCard";

const VideoSuggestions = ({ id }) => {
  const [suggestedVideos, setSuggestedVideos] = useState();

  const getSuggestedVideos = async () => {
    const data = await fetch(RECOMENDED_API_URL + id);
    const json = await data.json();
    setSuggestedVideos(json?.items);
  };

  useEffect(() => {
    if (id) {
      getSuggestedVideos();
    }
    // eslint-disable-next-line
  }, [id]);

  if (id) {
    return (
      <div className=" lg:w-4/12 p-2 overflow-x-hidden mx-3">
        {suggestedVideos?.map((item) => {
          return <VideoSuggestionCard key={item.id} {...item} />;
        })}
      </div>
    );
  }
};

export default VideoSuggestions;
