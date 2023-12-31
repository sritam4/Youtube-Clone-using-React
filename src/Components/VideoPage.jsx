import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_API_URL } from "../Utils/constant";
import useDateDifference from "../Utils/useDateDifference";
import DescriptionList from "./DescriptionList";

const VideoPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const [videoDetails, setVideoDetails] = useState({});
  const aspectRatio = 16 / 9;
  const timeDifference = useDateDifference(videoDetails?.snippet?.publishedAt);
  const [descHeight, setDescHeight] = useState("max-h-24");

  const getVideoDetails = async () => {
    const data = await fetch(VIDEO_API_URL + videoId);
    const jsondata = await data.json();
    setVideoDetails(jsondata?.items[0]);
    // console.log(jsondata?.items[0]?.snippet);
  };

  const expandDescription = () => {
    descHeight === "max-h-24"
      ? setDescHeight("max-h-fit")
      : setDescHeight("max-h-24");
  };

  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-6 w-full">
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
          <section className="flex gap-4">
            <img className="h-10 w-10 rounded-full" src="" alt="" />
            <h2 className="text-base font-semibold">
              {videoDetails?.snippet?.channelTitle}
            </h2>
            <button className="border text-sm bg-black text-white font-semibold px-4 rounded-full ml-5">
              Subscribe
            </button>
          </section>
          <section className="flex text-base font-semibold">
            <button className="border bg-gray-100 rounded-l-full px-4">
              {videoDetails?.statistics?.likeCount / 1000 > 1000
                ? (videoDetails?.statistics?.likeCount / 1000000).toFixed(0) +
                  "M "
                : (videoDetails?.statistics?.likeCount / 1000).toFixed(0) +
                  "K "}
              Like
            </button>
            <button className="border bg-gray-100 rounded-r-full px-4">
              Dislike
            </button>
            <button className="mx-1 border bg-gray-100 rounded-full px-4">
              Share
            </button>
            <button className="mx-1 border bg-gray-100 rounded-full px-4">
              Download
            </button>
          </section>
        </div>

        {/* Description Section */}
        <div
          className={`p-3 bg-gray-100 text-sm rounded-lg relative hover:bg-gray-200 overflow-hidden ${descHeight}`}
        >
          <span className="font-semibold ">
            {videoDetails?.statistics?.viewCount / 1000 > 1000
              ? (videoDetails?.statistics?.viewCount / 100000).toFixed(1) +
                "M Views "
              : (videoDetails?.statistics?.viewCount / 1000).toFixed(1) +
                "K Views "}
          </span>
          |<span className="font-semibold px-3">{timeDifference}</span>
          <DescriptionList descString={videoDetails?.snippet?.description} />
          <button
            className="absolute bottom-1 right-3 text-base bg-inherit font-semibold shadow-2xl shadow-current rounded hover:bg-inherit"
            onClick={expandDescription}
          >
            {descHeight === "max-h-24" ? "...more" : "less"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
