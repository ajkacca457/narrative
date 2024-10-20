"use client";

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[90rem] mx-auto w-[90%] flex justify-between items-center py-4">
      <h2>Narrative</h2>
      <Image
        src="/arrow.svg"
        alt="logo"
        width={30}
        height={30}
        className={`z-[1002] transition-transform duration-300 ${
          isOpen ? "-rotate-45" : "rotate-0"
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />

      <div
        className={`fixed bg-[#F3FDB8] h-[100vh] w-[50vw] top-0 right-0 z-[1001] transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-[50vw]"
        } `}
      >
        <ul className="z-50">
          <li className="text-white">Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
