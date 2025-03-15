"use client";

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

// Helper function to extract the YouTube video ID from the URL
const getYouTubeVideoId = (url) => {
  const regExp =
    /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|(?:https?:\/\/(?:www\.)?youtu\.be\/))([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const VideoPlayer = ({ url }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure client-side rendering
  }, []);

  const getModifiedYouTubeUrl = (url) => {
    const videoId = getYouTubeVideoId(url);
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&rel=0&showinfo=0`;
    }
    return url;
  };

  if (!isClient) return null; // Prevent SSR issues

  const modifiedUrl = getModifiedYouTubeUrl(url);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ReactPlayer
        key={isHovered ? "playing" : "stopped"} // Force remount on hover change
        url={modifiedUrl}
        playing={isHovered} // Play on hover, stop otherwise
        controls={false}
        allow= {isHovered ? "autoplay; encrypted-media" : "encrypted-media"}
        width="100%"
        height="400px"
        className="rounded-lg overflow-hidden my-4"
        config={{
          youtube: {
            playerVars: {
              controls: 0,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
            },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
