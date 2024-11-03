"use client";

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[90rem] mx-auto w-[90%] flex justify-between items-center py-4">
      <h2 className="text-2xl font-bold">Narrative.</h2>
      <div>
        <ul className="flex gap-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <button className="flex items-center bg-purple-500 px-2 rounded">
          <span>Start a Project</span>
          <svg
            width="40pt"
            height="40pt"
            version="1.1"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="-m-2"
          >
            <path d="m62.066 60.645c0.074219-8.1602 0.035156-15.668 0.13281-22.844-8.1562 0.082031-15.676 0.03125-22.844 0.13281-0.027344 1.8672-0.03125 3.2891-0.054688 5.0703 4.8906-0.023437 9.9492-0.042968 14.195-0.066406l-15.34 15.34c-0.46875 0.46875-0.47266 1.3203-0.007812 1.7891l1.7852 1.7852c0.46875 0.46875 1.3203 0.46484 1.7891-0.007812l15.34-15.34c-0.042969 4.7266-0.015625 9.4531-0.082031 14.18 1.7227 0 3.5781-0.039063 5.0859-0.042969z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
