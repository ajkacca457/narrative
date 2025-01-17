"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-[90rem] mx-auto w-[90%] flex justify-between items-center py-4 text-white">
      <Link href="/">
      <img src="./narrative-logo.png" alt="logo" />
      </Link>
      <div>
        <ul className="flex gap-x-12 text-[18px]">
          <Link href="/product">Product</Link>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div></div>
    </div>
  );
};

export default Navbar;
