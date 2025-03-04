"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import BlurredCircle from "./decors/BlurredCircle";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-black bg-opacity-80 backdrop-blur-md z-[1000] py-4 px-[5%] flex justify-between items-center text-white`}
    >
      <BlurredCircle customClass={"absolute left-0 top-[0px] z-[200]"} />
      <Link href="/" className="z-[300]">
        <img src="./narrative-logo.png" alt="logo" className="h-10" />
      </Link>
      <nav>
        <ul className="flex gap-x-12 text-[18px]">
          <li><Link href="/product" className="hover:text-gray-300 transition">Product</Link></li>
          <li><Link href="/about" className="hover:text-gray-300 transition">About</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
