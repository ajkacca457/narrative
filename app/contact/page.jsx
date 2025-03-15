import React from "react";
import ContactHero from "../components/contactpage/ContactHero";
import ContactInfo from "../components/contactpage/ContactInfo";
import ContactForm from "../components/contactpage/ContactForm";
import ContactFaq from "../components/contactpage/ContactFaq";
import CircularPattern from "../components/decors/CircularPattern";

const page = async () => {
  const res = await fetch(
    "https://narrative-10a4cba.ingress-alpha.ewp.live/wp-json/wp/v2/pages?slug=contact&acf_format=standard",
    { cache: "no-store" }
  );
  const data = await res.json();
  const acfContent = data?.[0]?.acf?.contact_page || [];

  return (
    <div>
      <div className="relative">
        <CircularPattern customClass="absolute top-[200px] left-[200px]" />

        {acfContent.map((block, index) => {
          if (
            block.acf_fc_layout === "contact_hero" &&
            block.show_contact_hero === true
          ) {
            return <ContactHero key={index} content={block} />;
          }
          return null;
        })}

        {acfContent.map((block, index) => {
          if (
            block.acf_fc_layout === "contact_cards" &&
            block.show_contact_cards === true
          ) {
            return <ContactInfo key={index} content={block} />;
          }
          return null;
        })}
      </div>

      <div className="relative">
        <div className="w-[800px] h-[800px] absolute -right-[150px] top-[50px] -z-[1] radial-light opacity-40"></div>

        {acfContent.map((block, index) => {
          if (block.acf_fc_layout === "form_data" && block.show_form === true) {
            return <ContactForm key={index} content={block} />;
          }
          return null;
        })}
        <CircularPattern customClass="absolute -bottom-[200px] -right-[50px]" />
      </div>

      <div className="relative">
        <div className="w-[800px] h-[800px] absolute -left-[150px] -bottom-[150px] -z-[1] radial-light opacity-40"></div>
        <CircularPattern
          customClass="absolute bottom-[100px] left-[200px]"
          width="189.5"
          height="183"
        />

        {acfContent.map((block, index) => {
          if (block.acf_fc_layout === "faq" && block.show_faq === true) {
            return <ContactFaq key={index} content={block} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default page;
