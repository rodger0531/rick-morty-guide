import React, { useRef, useState } from "react";
import video from "./assets/video/homeBackground.mp4";
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
      <video
        ref={videoRef}
        src={video}
        type="video/mp4"
        className="w-full h-full fixed left-0 lg:left-40 top-0 object-cover"
        autoPlay
        muted
        loop
      />
      <div className="mask w-full h-full fixed left-0 lg:left-40 top-0" />
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
      <header className="relative flex flex-col items-center justify-center h-full font-schwifty">
        <p className="text-5xl lg:text-8xl mb-10 text-rm-blue glow">
          Rick and Morty
        </p>
        <p className="text-8xl lg:text-10xl text-rm-pink">TV Series Guide</p>
      </header>
    </>
  );
};
