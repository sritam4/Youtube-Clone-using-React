import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_API_URL } from "../Utils/constant";
import useDateDifference from "../Utils/useDateDifference";
import CommentBox from "./CommentBox";
import VideoSuggestions from "./VideoSuggestions";
import useFormattedViewsCount from "../Utils/useFormattedViewsCount";
import { CHANNEL_API_URL } from "../Utils/constant";
import { Markup } from "interweave";
import useOnline from "../Utils/useOnline";
import OfflinePage from "./OfflinePage";
import useFormattedNumber from "../Utils/useFormattedNumber";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";

const VideoPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const [videoDetails, setVideoDetails] = useState({});
  const [channelInfo, setChannelInfo] = useState();
  const aspectRatio = 16 / 9;
  const timeDifference = useDateDifference(videoDetails?.snippet?.publishedAt);
  const likes = useFormattedNumber(videoDetails?.statistics?.likeCount);
  const subscribers = useFormattedNumber(
    channelInfo?.statistics?.subscriberCount
  );
  const views = useFormattedViewsCount(videoDetails?.statistics?.viewCount);
  const [descHeight, setDescHeight] = useState("max-h-24");
  const channelId = videoDetails?.snippet?.channelId;
  const isOnline = useOnline();

  const getVideoDetails = async () => {
    const data = await fetch(VIDEO_API_URL + videoId);
    const jsondata = await data.json();
    setVideoDetails(jsondata?.items[0]);
  };

  const getChannelProfile = async () => {
    const data = await fetch(CHANNEL_API_URL + channelId);
    const json = await data.json();
    setChannelInfo(json?.items[0]);
  };

  const expandDescription = () => {
    descHeight === "max-h-24"
      ? setDescHeight("max-h-fit")
      : setDescHeight("max-h-24");
  };

  useEffect(() => {
    dispatch(closeMenu());
    videoId && getVideoDetails();
    // eslint-disable-next-line
  }, [videoId]);

  useEffect(() => {
    channelId && getChannelProfile();
    // eslint-disable-next-line
  }, [channelId]);

  if (!isOnline) return <OfflinePage />;

  return (
    <div className="p-6 w-full lg:flex justify-between">
      <div className="w-full lg:w-8/12 mb-28 ">
        {/* Video Section */}
        <div
          className="relative w-full"
          style={{ paddingTop: `${(1 / aspectRatio) * 100}%` }}
        >
          <iframe
            className="rounded-xl absolute top-0 left-0 w-full h-full"
            src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* Video Title */}
        <h1 className="font-bold text-lg py-2 w-full">
          {videoDetails?.snippet?.title}
        </h1>
        {/* Video Info Section */}
        <div className="w-full flex justify-between py-3">
          <div className="flex gap-4 min-w-fit">
            <img
              className="h-10 w-10 rounded-full"
              src={channelInfo?.snippet?.thumbnails?.default?.url}
              alt="profile"
            />
            <h2 className="text-base font-semibold">
              {videoDetails?.snippet?.channelTitle}
              <p className="text-xs text-gray-600">{subscribers}subscribers</p>
            </h2>
            <button className="border text-sm bg-black text-white font-semibold px-4 h-10 rounded-full">
              Subscribe
            </button>
          </div>
          <section className="flex text-base font-semibold">
            <button className="border bg-gray-100 rounded-l-full px-4 flex items-center gap-2">
              <BiLike className="text-2xl" />
              {likes}
            </button>
            <button className="border bg-gray-100 rounded-r-full px-4">
              <BiDislike className="text-2xl" />
            </button>
            <button className="mx-1 border bg-gray-100 rounded-full px-4 flex items-center gap-2">
              <PiShareFatLight className="text-2xl" />
              Share
            </button>
            <button className="mx-1 border bg-gray-100 rounded-full px-4 sm:hidden">
              Download
            </button>
          </section>
        </div>

        {/* Description Section */}
        <div
          className={`p-3 bg-gray-100 text-sm rounded-lg relative hover:bg-gray-200 overflow-hidden ${descHeight}`}
        >
          <span className="font-semibold ">{views}</span>|
          <span className="font-semibold px-3">{timeDifference}</span>
          <Markup content={videoDetails?.snippet?.description} />
          <button
            className="absolute bottom-1 right-3 text-base bg-inherit font-semibold shadow-2xl shadow-current rounded hover:bg-inherit"
            onClick={expandDescription}
          >
            {descHeight === "max-h-24" ? "...more" : "less"}
          </button>
        </div>
        {/* Comment Section */}
        {videoDetails?.id && (
          <CommentBox
            id={videoDetails?.id}
            commentCount={videoDetails?.statistics?.commentCount}
          />
        )}
      </div>
      {/* Recomended Section */}
      {<VideoSuggestions id={videoDetails?.snippet?.categoryId} />}
    </div>
  );
};

export default VideoPage;
