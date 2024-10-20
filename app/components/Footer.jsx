import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="max-w-[90rem] w-[90%] mx-auto py-[10vh]">
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-1">
            <h2 className="text-xl">Join our newsletter</h2>
            <p className="mt-4">
              Leave us with your email to get updates from the studio
            </p>
            <input
              type="text"
              name=""
              id=""
              className="w-full px-2 mt-2"
              placeholder="name@example.com"
            />
          </div>

          <div className="col-span-1 col-start-3">
            <h2 className="text-xl">Visit Us</h2>
            <p className="mt-4">
              1st Floor, 96 Church Street, Brighton, BN1 1UJ Contact Us +44(0)
              1273 921 215 ‍studio@buffmotion.com
            </p>
          </div>

          <div className="col-span-1 col-start-4">
            <h2 className="text-xl">Contact Us</h2>
            <div class="paragraph-0-9">
              <a href="tel:+441273921215" class="u-text-black">
                +44(0) 1273 921 215
              </a>{" "}
              <br />‍
              <a href="mailto:‍studio@buffmotion.com" class="u-text-black">
                studio@buffmotion.com
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10 mt-[10vh]">
          <div className="col-span-1 grid grid-cols-4 gap-6">
            <img src="/dummy-logo.svg" alt="logo" className="col-span-1" />
            <img src="/dummy-logo.svg" alt="logo" className="col-span-1" />
            <img src="/dummy-logo.svg" alt="logo" className="col-span-1" />
            <img src="/dummy-logo.svg" alt="logo" className="col-span-1" />
          </div>

          <div className="col-span-1 col-start-4">
            <h2 className="text-xl">Contact Us</h2>
            <div class="paragraph-0-9">
              <a href="tel:+441273921215" class="u-text-black">
                +44(0) 1273 921 215
              </a>{" "}
              <br />‍
              <a href="mailto:‍studio@buffmotion.com" class="u-text-black">
                studio@buffmotion.com
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
