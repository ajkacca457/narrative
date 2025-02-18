import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="max-w-[90rem] w-[90%] mx-auto pt-[5vh] pb-[20px] text-white">
        <div className="flex justify-between">
          <div>
            <img src="./narrative-logo.png" alt="logo" className="mb-2" />
            <div className="flex items-center gap-x-2">
              {" "}
              <img src="/green-arrow.png" /> <h3>( 021 ) 666 888 0000</h3>
            </div>
            <div className="flex items-center gap-x-2 mt-2">
              {" "}
              <img src="/green-arrow.png" /> <h3>needhelp@company.com</h3>
            </div>
            <div className="flex items-center gap-x-2 mt-2">
              <img src="/green-arrow.png" />
              <p>Privacy Policy</p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-x-4">
              <button className="bg-[#00FFE1] transition-colors duration-300 hover:bg-[#00CCB5] text-black w-fit block px-4 py-2 mt-2 rounded col-span-1">
                Facebook
              </button>
              <button className="bg-[#00FFE1] text-black w-fit block px-4 py-2 mt-2 rounded col-span-1">
                Instagram
              </button>
              <button className="bg-[#00FFE1] text-black w-fit block px-4 py-2 mt-2 rounded col-span-1">
                Instagram
              </button>
              <button className="bg-[#00FFE1] text-black w-fit block px-4 py-2 mt-2 rounded col-span-1">
                Instagram
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div>
            <p>© 2025 Narrative. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
