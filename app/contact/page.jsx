import React from "react";
import ContactHero from "../components/contactpage/ContactHero";
import ContactInfo from "../components/contactpage/ContactInfo";
import ContactForm from "../components/contactpage/ContactForm";
import ContactFaq from "../components/contactpage/ContactFaq";
import CircularPattern from "../components/decors/CircularPattern";

const page = () => {
  return (
    <div>
      <div className="relative">
        <CircularPattern customClass="absolute top-[200px] left-[200px]" />
        <ContactHero />
        <ContactInfo />
      </div>

      <div className="relative">
        <div className="w-[800px] h-[800px] absolute -right-[150px] top-[50px] -z-[1] radial-light opacity-40"></div>
        <ContactForm />
        <CircularPattern customClass="absolute -bottom-[200px] -right-[50px]" />
      </div>

      <div className="relative">
        <div className="w-[800px] h-[800px] absolute -left-[150px] -bottom-[150px] -z-[1] radial-light opacity-40"></div>
        <CircularPattern
          customClass="absolute bottom-[100px] left-[200px]"
          width="189.5"
          height="183"
        />
        <ContactFaq />
      </div>
    </div>
  );
};

export default page;
