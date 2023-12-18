import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";

const VideoPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  console.log(videoId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      <iframe
        width="1050"
        height="600"
        src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPage;
