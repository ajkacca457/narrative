"use client";

import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";

const getYouTubeVideoId = (url) => {
  const regExp =
    /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|(?:https?:\/\/(?:www\.)?youtu\.be\/))([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const VideoPlayer = ({ url }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true); // Ensure component is only rendered on the client
  }, []);

  if (!isMounted) return null; // Prevent SSR mismatch

  const getModifiedYouTubeUrl = (url) => {
    const videoId = getYouTubeVideoId(url);
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=1&modestbranding=1&rel=0&showinfo=0`;
    }
    return url;
  };

  const modifiedUrl = getModifiedYouTubeUrl(url);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => {
        setIsHovered(true);
        if (playerRef.current) {
          playerRef.current.getInternalPlayer()?.playVideo(); 
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (playerRef.current) {
          playerRef.current.getInternalPlayer()?.pauseVideo(); 
        }
      }}
    >
      <ReactPlayer
        ref={playerRef}
        url={modifiedUrl}
        playing={isHovered} 
        controls={true} 
        muted={true} 
        width="100%"
        height="400px"
        className="rounded-lg overflow-hidden my-4"
        config={{
          youtube: {
            playerVars: {
              controls: 1, 
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              mute: 1, 
              autoplay: 0, 
            },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
