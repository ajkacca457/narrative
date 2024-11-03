"use client";

import React from "react";
import Masonry from "react-responsive-masonry";

const Projects = () => {
  return (
    <div>
      <div className="max-w-[90rem] w-[90%] mx-auto py-[10vh]">
        <h1 className="text-6xl text-white mb-10">Projects</h1>
        <Masonry>
          <img src="./project1.jpg" alt="placeholder" />
          <img src="./project2.jpg" alt="placeholder" />
          <img src="./project1.jpg" alt="placeholder" />
          <img src="./project2.jpg" alt="placeholder" />
          <img src="./project1.jpg" alt="placeholder" />
          <img src="./project2.jpg" alt="placeholder" />
          <img src="./project1.jpg" alt="placeholder" />
          <img src="./project1.jpg" alt="placeholder" />
        </Masonry>
      </div>
    </div>
  );
};

export default Projects;
