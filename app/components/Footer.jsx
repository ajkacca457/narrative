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
            <div>
              <h2 className="text-xl">Visit Us</h2>
              <p className="mt-4">
                1st Floor, 96 Church Street, Brighton, BN1 1UJ Contact Us +44(0)
                1273 921 215 ‍studio@buffmotion.com
              </p>
            </div>

            <div>
              <h2 className="text-xl">Contact Us</h2>
              <div className="paragraph-0-9">
                <a href="tel:+441273921215" className="u-text-black">
                  +44(0) 1273 921 215
                </a>{" "}
                <br />‍
                <a
                  href="mailto:‍studio@buffmotion.com"
                  className="u-text-black"
                >
                  studio@buffmotion.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
