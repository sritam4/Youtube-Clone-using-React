import React from "react";
import useDateDifference from "../Utils/useDateDifference";
import { Link } from "react-router-dom";
import useFormattedViewsCount from "../Utils/useFormattedViewsCount";
import useTimeFormatter from "../Utils/useTimeFormatter";

const VideoSuggestionCard = ({ snippet, statistics, id, contentDetails }) => {
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const releaseDate = useDateDifference(publishedAt);

  const views = useFormattedViewsCount(statistics?.viewCount);
  const duration = useTimeFormatter(contentDetails?.duration);

  return (
    <div>
      <Link className="flex my-2" to={"/watch?v=" + id} key={id}>
        <div className="h-28 w-52 p-1 relative">
          <img
            className="w-full h-full rounded"
            src={thumbnails?.medium?.url}
            alt="thumbnail"
          />
          <p className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-xs text-white p-1 rounded-md">
            {duration}
          </p>
        </div>
        <div className="px-2 text-sm font-semibold overflow-x-hidden w-3/5 flex flex-col gap-1">
          <h1 className=" max-h-11 overflow-hidden">{title}</h1>
          <h4 className="text-xs text-gray-600 ">{channelTitle}</h4>
          <p className="text-xs text-gray-600 ">
            {views} .{releaseDate}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default VideoSuggestionCard;
