"use client";

import React from "react";
import Masonry from "react-responsive-masonry";

const Projects = () => {
  return (
    <div>
      <div className="max-w-[90rem] w-[90%] mx-auto py-[10vh]">
        <h1 className="text-6xl text-white mb-10">Projects</h1>
        <Masonry className="gap-x-4">
          <img src="./project1.jpg" alt="placeholder" className="m-2" />
          <img src="./project2.jpg" alt="placeholder" className="m-2"/>
          <img src="./project1.jpg" alt="placeholder" className="m-2"/>
          <img src="./project2.jpg" alt="placeholder" className="m-2"/>
          <img src="./project1.jpg" alt="placeholder" className="m-2"/>
          <img src="./project2.jpg" alt="placeholder" className="m-2"/>
          <img src="./project1.jpg" alt="placeholder" className="m-2"/>
          <img src="./project1.jpg" alt="placeholder" className="m-2"/>
        </Masonry>
      </div>
    </div>
  );
};

export default Projects;
