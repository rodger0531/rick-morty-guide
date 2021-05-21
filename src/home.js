import React, { useRef, useState } from "react";
import video from "./homeBackground.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!videoRef.current.muted);
  };

  return (
    <>
      {/* <FontAwesomeIcon icon={faVolumeMute} /> */}
      <video
        ref={videoRef}
        src={video}
        type="video/mp4"
        className="w-screen w-auto"
        autoPlay
        muted
        loop
      />
      <button
        type="button"
        className="absolute outline-none top-20 right-20"
        onClick={toggleMute}
      >
        <FontAwesomeIcon
          className="opacity-60 hover:opacity-100 duration-200"
          icon={isMuted ? faVolumeUp : faVolumeMute}
          size="lg"
        />
      </button>
    </>
  );
};
