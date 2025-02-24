"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = ({ content }) => {
  const { form_heading = "" } = content || {};
  const formRef = useRef(null);

  const titleRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const buttonRef = useRef(null); 

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%", 
        toggleActions: "play none none reset",
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    )
    .fromTo(
      firstNameRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(
      lastNameRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(
      phoneNumberRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(
      emailRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(
      messageRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(
      buttonRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.4" 
    );
  }, []);

  return (
    <div ref={formRef} className="w-full contact-cards-element h-auto pb-[20vh]">
      <div className="contact-cards-container w-3/5 mx-auto">
        <h1 ref={titleRef} className="text-white text-[48px] text-center">
          {form_heading}
        </h1>
        <form className="grid grid-cols-2 gap-6 mt-12">
          <input
            type="text"
            placeholder="First Name"
            ref={firstNameRef} 
            className="bg-transparent border-2 border-[#00FFE1] p-4 rounded-[1rem] text-white text-[16px]"
          />
          <input
            type="text"
            placeholder="Last Name"
            ref={lastNameRef} 
            className="bg-transparent border-2 border-[#00FFE1] p-4 rounded-[1rem] text-white text-[16px]"
          />
          <input
            type="text"
            placeholder="Phone Number"
            ref={phoneNumberRef} 
            className="bg-transparent border-2 border-[#00FFE1] p-4 rounded-[1rem] text-white text-[16px]"
          />
          <input
            type="email"
            placeholder="Your Email"
            ref={emailRef} 
            className="bg-transparent border-2 border-[#00FFE1] p-4 rounded-[1rem] text-white text-[16px]"
          />
          <textarea
            placeholder="Message"
            ref={messageRef} 
            className="bg-transparent border-2 border-[#00FFE1] p-4 rounded-[1rem] text-white text-[16px] col-span-2 h-[400px]"
          />

          <button
            ref={buttonRef} 
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
