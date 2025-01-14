import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="max-w-[90rem] w-[90%] mx-auto py-[10vh] text-white">
        <div className="grid grid-cols-5 gap-[5vw]">
          <div className="col-span-2">
            <div className="text-[17px] text-[#7F7F7F]">
              <p>Made using clean, non-toxic ingredients, our products are </p>
              <p>signed for everyone. Made using clean, non-toxic</p>
              <p>ingredients, our products are signed</p>
            </div>

            <div className="mt-8 flex items-center gap-x-4">
              <img src="/footerimg/phone-icon.svg" alt="logo" />
              <h4>Street Address, Phone, Other info</h4>
            </div>

            <div>
              <h2 className="text-[22px] mt-[10vh]">Newsletter</h2>
              <div className="flex">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full px-2 py-4 mt-2"
                  placeholder="name@example.com"
                />
                <button className="bg-[#00FFE1] text-black w-1/2 py-4 mt-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-3">

            <div className="grid grid-cols-3 gap-x-4">
              <div className="col-span-1">
                  <div className="flex items-center gap-x-2"> <img src="/green-arrow.png" /> <h3>Recent Work</h3></div>
                  <div className="flex items-center gap-x-2 mt-2"> <img src="/green-arrow.png" /> <h3>Recent Work</h3></div>
                  <div className="flex items-center gap-x-2 mt-2"> <img src="/green-arrow.png" /> <h3>Recent Work</h3></div>
                  <div className="flex items-center gap-x-2 mt-2"> <img src="/green-arrow.png" /> <h3>Recent Work</h3></div>                  
              </div>

              <div className="col-span-1">
                <button className="bg-[#00FFE1] text-black w-fit block px-4 py-2 mt-2 rounded">Facebook</button>  
                <button className="bg-[#00FFE1] text-black w-fit block px-4 py-2 mt-2 rounded">Instagram</button>
              </div>

              <div className="col-span-1">
                  <div className="flex items-center gap-x-2"> <img src="/green-arrow.png" /> <h3>Recent Work</h3></div>
                  <div className="flex items-center gap-x-2 mt-2"> <img src="/green-arrow.png" /> <h3>Recent Work</h3></div>
                  <div className="flex items-center gap-x-2 mt-2"> <img src="/green-arrow.png" /> <h3>Recent Work</h3></div>
                  <div className="flex items-center gap-x-2 mt-2"> <img src="/green-arrow.png" /> <h3>Recent Work</h3></div>                  
              </div>
            
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
