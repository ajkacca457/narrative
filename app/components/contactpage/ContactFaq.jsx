import React from 'react'
import Accordion from '../Accordion'

const ContactFaq = ({content}) => {

const {title="Contact Faq",subtitle="Contact Faq subtitle",faq_item= []} = content|| {};

  return (
    <div className="faq">
    <div className="w-2/4 mx-auto py-[10vh]">
      <h1
        className="text-[96px] text-white mb-10 text-center uppercase"
        style={{
          background: "linear-gradient(90deg, #FFFFFF 0%, #767585 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </h1>
      <p className="text-white text-center text-[16px] opacity-60 mb-10">
        {subtitle}
      </p>
      <div>
        <Accordion accordionItems={faq_item} />
      </div>
    </div>
  </div>
  )
}

export default ContactFaq