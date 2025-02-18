import React from "react";

const ContactForm = ({content}) => {

  const { form_heading ="" } = content || {};


  return (
    <div className="w-full contact-cards-element h-auto pb-[20vh]">
      <div className="contact-cards-container w-3/5 mx-auto">
        <h1 className="text-white text-[48px] text-center">{form_heading}</h1>
        <form className="grid grid-cols-2 gap-6 mt-12">
          <input
            type="text"
            placeholder="First Name"
            className="bg-transparent border-2 border-[#00FFE1] p-4 rounded-[1rem] text-white text-[16px]"
          />
          <input
            type="text"
            placeholder="First Name"
            className="bg-transparent border-2 border-[#00FFE1] p-4 rounded-[1rem] text-white text-[16px]"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-transparent border-2 border-[#00FFE1] p-4 rounded-[1rem] text-white text-[16px]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border-2 border-[#00FFE1] p-4 rounded-[1rem] text-white text-[16px]"
          />
          <textarea
            placeholder="Message"
            className="bg-transparent border-2 border-[#00FFE1] p-4 rounded-[1rem] text-white text-[16px] col-span-2 h-[400px]"
          />

          <button
            className="text-white text-[16px] p-4 rounded-[1rem] col-span-2 uppercase"
            style={{
              background: "linear-gradient(90deg, #00CFB7 0%, #00695D 100%)",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
