import React from "react";
import VideoPlayer from "./Video";

const ContentGrid = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 w-[90%] min-h-[400px] mx-auto video-grid">
      {videos.length > 0 &&
        videos.map((video, index) => {
          return (
            <VideoPlayer key={index} url={video.video} />
          );
        })}
    </div>
  );
};

export default ContentGrid;
