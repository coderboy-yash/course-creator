"use client";
import YouTube from "react-youtube";

const YouTubeVideo = ({ videoId }) => {
  const opts = {
    height: "460",
    width: "800",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
