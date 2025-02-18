import React from "react";

const VideoEmbed = ({content}) => {
  const  {video= ""} = content || {};
  return (
    <div className="w-full video-embed h-auto py-[20vh]">
      <div className="video-container w-[1140px] mx-auto rounded-[2rem] relative border-2 border-white p-6">
        <div className="overlay bg-black opacity-40 w-full h-full absolute top-0 left-0 z-10"></div>
        <div dangerouslySetInnerHTML={{ __html: video }} />        
        <div className="z-50 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <img src="/product/video-play.png" alt="video-play"/>
        </div>
      </div>
    </div>
  );
};

export default VideoEmbed;
