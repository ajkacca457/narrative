import React from "react";

const Contact = () => {
  return (
    <div className="py-[10vh]">
      <div className="max-w-[80rem] w-[70%] mx-auto bg-[#343434] px-8 py-12 rounded-lg">
        <h1 className="text-6xl text-white mb-10 text-center">Got Questions?</h1>
        <p className="text-white text-center my-10">Customer support is our highest priority. We are here to answer all your questions via our support docs. Video demos, and 24/7 live chat</p>
        <div className="w-full grid grid-cols-3 gap-x-4">
          <div className="col-span-1 flex items-start">
            <div className="text-white ml-6">
              <h2 className="text-3xl mb-4">Contact Us</h2>
              <p className="max-w-[30ch]">
                1st Floor, 96 Church Street, Brighton, BN1 1UJ Contact Us +44(0)
                1273 921 215
              </p>
            </div>
          </div>
          <div className="col-span-1 flex items-start">
            <div className="text-white ml-6">
              <h2 className="text-3xl mb-4">Contact Us</h2>
              <p className="max-w-[30ch]">
                1st Floor, 96 Church Street, Brighton, BN1 1UJ Contact Us +44(0)
                1273 921 215
              </p>
            </div>
          </div>
          <div className="col-span-1 flex items-start">
            <div className="text-white ml-6">
              <h2 className="text-3xl mb-4">Contact Us</h2>
              <p className="max-w-[30ch]">
                1st Floor, 96 Church Street, Brighton, BN1 1UJ Contact Us +44(0)
                1273 921 215
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
