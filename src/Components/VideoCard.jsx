import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useDateDifference from "../Utils/useDateDifference";
import { CHANNEL_API_URL } from "../Utils/constant";
import useFormattedViewsCount from "../Utils/useFormattedViewsCount";
import useTimeFormatter from "../Utils/useTimeFormatter";

const VideoCard = ({ snippet, statistics, id, contentDetails }) => {
  const { title, channelTitle, thumbnails, publishedAt, channelId } = snippet;
  const { url } = thumbnails?.medium;
  const { viewCount } = statistics;
  const timeDifference = useDateDifference(publishedAt);
  const views = useFormattedViewsCount(viewCount);

  const [channelInfo, setChannelInfo] = useState();
  const duration = useTimeFormatter(contentDetails?.duration);

  const getChannelInfo = async () => {
    const data = await fetch(CHANNEL_API_URL + channelId);
    const json = await data.json();
    setChannelInfo(json?.items[0]?.snippet);
  };
  useEffect(() => {
    getChannelInfo();
  }, []);

  return (
    <div className="m-3 w-80">
      <Link to={"/watch?v=" + id} key={id}>
        <div className="relative">
          <img className=" rounded-lg" src={url} alt="thumbnail" />
          <p className=" absolute bottom-1 right-1 bg-black bg-opacity-80 text-xs text-white p-1 rounded-md">
            {duration}
          </p>
        </div>
        <div className="flex overflow-hidden">
          <img
            className="rounded-full bg-gray-300 h-10 w-10 m-2"
            src={channelInfo?.thumbnails?.default?.url}
            alt="logo"
          />
          <div className="w-[calc(100%-30px)] text-sm">
            <h1 className="pt-2 font-semibold text-base max-h-14 overflow-hidden">
              {title}
            </h1>
            <h2 className="pt-1 text-gray-500">{channelTitle}</h2>
            <h2 className=" text-gray-600">
              {views}• {timeDifference}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
