import React, { useRef } from "react";
import video from "./homeBackground.mp4";
export const Home = () => {
  const videoRef = useRef(null);
  const mute = () => {
    console.log("🚀 ~ file: home.js ~ line 7 ~ mute ~ videoRef", videoRef);
    videoRef.current.muted = !videoRef.current.muted;
  };

  return (
    <>
      <video
        ref={videoRef}
        src={video}
        type="video/mp4"
        className="w-screen w-auto"
        autoPlay
        muted
        loop
      />
      <button type="button" onClick={mute}>
        Mute
      </button>
    </>
  );
};
