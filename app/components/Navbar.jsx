"use client";
import Link from "next/link";
import BlurredCircle from "./decors/BlurredCircle";

const Navbar = () => {
  return (
    <div className="max-w-[90rem] mx-auto w-[90%] flex justify-between items-center py-4 text-white">
      <BlurredCircle customClass={"absolute left-0 top-[0px] z-[200]"} />
      <Link href="/" className="z-[300]">
      <img src="./narrative-logo.png" alt="logo" />
      </Link>
      <div>
        <ul className="flex gap-x-12 text-[18px]">
          <Link href="/product">Product</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </div>

      <div></div>
    </div>
  );
};

export default Navbar;
