import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div className="faq">
      <div className="w-2/4 mx-auto py-[10vh]">
        <h1
          className="text-[96px] text-white mb-10 text-center"
          style={{
            background: "linear-gradient(90deg, #FFFFFF 0%, #767585 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          FAQS
        </h1>
        <p className="text-white text-center text-[16px] opacity-60 mb-10">
          Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet id cursus id blandit. Consectetur maecenas id vivamus integer integer aliquam. Donec amet rhoncus ut turpis massa augue faucibus.
        </p>
        <div>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;
