"use client";

const Navbar = () => {
  return (
    <div className="max-w-[90rem] mx-auto w-[90%] flex justify-between items-center py-4 text-white">
      <img src="./narrative-logo.png" alt="logo" />
      <div>
        <ul className="flex gap-x-12 text-[18px]">
          <li>Solutions</li>
          <li>Portfolio</li>
          <li>Reviews</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div></div>
    </div>
  );
};

export default Navbar;
