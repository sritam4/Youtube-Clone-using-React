import React from "react";
import { Link } from "react-router-dom";
import useDateDifference from "../Utils/useDateDifference";

const VideoCard = ({ snippet, statistics, id }) => {
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const { url } = thumbnails?.medium;
  const { viewCount } = statistics;
  const timeDifference = useDateDifference(publishedAt);
  return (
    <div className="m-3 w-80">
      <Link to={"/watch?v=" + id} key={id}>
        <img className=" rounded-lg" src={url} alt="thumbnail" />
        <div className="flex">
          <img
            className=" p-2 rounded-full bg-gray-300 h-10 w-10 m-2"
            src=""
            alt="logo"
          />
          <div className="w-[calc(100%-30px)] text-sm">
            <h1 className="pt-2 font-semibold text-base max-h-14 overflow-hidden">
              {title}
            </h1>
            <h2 className="pt-1 text-gray-600">{channelTitle}</h2>
            <h2 className=" text-gray-600">
              {viewCount / 1000 > 1000
                ? (viewCount / 1000000).toFixed(1) + "M Views"
                : (viewCount / 1000).toFixed(1) + "K Views"}{" "}
              • {timeDifference}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
