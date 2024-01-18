import React, { useEffect, useState } from "react";
import useDateDifference from "../Utils/useDateDifference";
import { Link } from "react-router-dom";
import { CHANNEL_API_URL } from "../Utils/constant";
import { VIDEO_DURATION_API } from "../Utils/constant";
import useTimeFormatter from "../Utils/useTimeFormatter";

const ResultVideoCard = ({ snippet, id }) => {
  const {
    title,
    channelId,
    channelTitle,
    description,
    thumbnails,
    publishedAt,
  } = snippet;
  const releaseDate = useDateDifference(publishedAt);
  const [channelInfo, setChannelInfo] = useState();
  const [videoDuration, setVideoDuration] = useState();
  const duration = useTimeFormatter(videoDuration);

  const getChannelInfo = async () => {
    const data = await fetch(CHANNEL_API_URL + channelId);
    const json = await data.json();
    setChannelInfo(json?.items[0]?.snippet);
  };

  const getVideoDuration = async () => {
    const data = await fetch(VIDEO_DURATION_API + id?.videoId);
    const jsondata = await data.json();
    setVideoDuration(jsondata?.items[0]?.contentDetails?.duration);
  };

  useEffect(() => {
    channelId && getChannelInfo();
    id?.videoId && getVideoDuration();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex p-3 w-full">
      <Link to={"/watch?v=" + id?.videoId} className="relative">
        <img
          className="min-h-[150px] rounded-2xl"
          src={thumbnails?.medium?.url}
          alt="thumbnail"
        />
        <p className=" absolute bottom-1 right-1 bg-black bg-opacity-80 text-xs text-white p-1 rounded-md">
          {duration}
        </p>
      </Link>
      <Link to={"/watch?v=" + id?.videoId} className="px-4 w-2/3">
        <h1 className="text-md max-h-20 overflow-hidden">{title}</h1>
        <p className="text-xs my-1 text-gray-600">{releaseDate}</p>
        <div className="flex gap-2 items-center text-xs text-gray-600 my-4">
          <img
            className="h-6 w-6 rounded-full"
            src={channelInfo?.thumbnails?.default?.url}
            alt="logo"
          />
          {channelTitle}
        </div>
        <p className="text-xs text-gray-600 max-h-12 overflow-hidden">
          {description}
        </p>
      </Link>
    </div>
  );
};

export default ResultVideoCard;
