import React from "react";
import { Link } from "react-router-dom";
import useDateDifference from "../Utils/useDateDifference";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { Markup } from "interweave";

const Comment = ({ snippet }) => {
  const {
    textDisplay,
    authorDisplayName,
    authorProfileImageUrl,
    authorChannelUrl,
    likeCount,
    publishedAt,
  } = snippet?.topLevelComment?.snippet;

  const publishedTime = useDateDifference(publishedAt);

  return (
    <div className=" p-2 flex">
      <Link to={authorChannelUrl}>
        <img
          className="h-10 w-10 mx-2 border rounded-full"
          src={authorProfileImageUrl}
          alt="user Profile"
        />
      </Link>
      <div className="ml-1">
        <h2 className="font-semibold text-sm px-2">
          {authorDisplayName}
          <span className="text-xs font-thin ml-3">{publishedTime}</span>
        </h2>

        <p className="px-2 text-base">
          <Markup content={textDisplay} />
        </p>
        <div className="flex text-sm font-thin px-2">
          <div className="py-2 mr-3 flex">
            <BiLike className="text-2xl text-gray-600 mx-2" />
            {likeCount > 0 ? likeCount : null}
          </div>
          <div className="py-2 mr-3">
            <BiDislike className="text-2xl text-gray-600 mx-2" />
          </div>
          <div className="py-2 mr-3 font-semibold cursor-pointer">Reply</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
