import React from 'react'
import Accordion from '../Accordion'

const accordionItems = [
    {
      id: 1,
      question: 'How can digital marketing benefit my business?',
      answer: 'Donec rhoncus turpis massa diam nulla. Semper ut commodo integer nam pretium. Volutpat tincidunt suspendisse ac interdum. Dignissim est bibendum commodo odio phasellus. Vestibulum augue est non scelerisque ut arcu nunc. Nec aliquet lectus egestas adipiscing massa ultrices interdum imperdiet. Tristique eget quam natoque in vitae cursus et fermentum enim. Tincidunt sollicitudin at id porta praesent at condimentum lorem.'
    },
    {
      id: 2,
      question: 'How can digital marketing benefit my business?',
      answer: 'Donec rhoncus turpis massa diam nulla. Semper ut commodo integer nam pretium. Volutpat tincidunt suspendisse ac interdum. Dignissim est bibendum commodo odio phasellus. Vestibulum augue est non scelerisque ut arcu nunc. Nec aliquet lectus egestas adipiscing massa ultrices interdum imperdiet. Tristique eget quam natoque in vitae cursus et fermentum enim. Tincidunt sollicitudin at id porta praesent at condimentum lorem.'
    },
    {
      id: 3,
      question: 'What digital marketing services do you offer?',
      answer: 'Donec rhoncus turpis massa diam nulla. Semper ut commodo integer nam pretium. Volutpat tincidunt suspendisse ac interdum. Dignissim est bibendum commodo odio phasellus. Vestibulum augue est non scelerisque ut arcu nunc. Nec aliquet lectus egestas adipiscing massa ultrices interdum imperdiet. Tristique eget quam natoque in vitae cursus et fermentum enim. Tincidunt sollicitudin at id porta praesent at condimentum lorem.'
    },
    {
      id: 4,
      question: 'How long does it take to see results',
      answer: 'Donec rhoncus turpis massa diam nulla. Semper ut commodo integer nam pretium. Volutpat tincidunt suspendisse ac interdum. Dignissim est bibendum commodo odio phasellus. Vestibulum augue est non scelerisque ut arcu nunc. Nec aliquet lectus egestas adipiscing massa ultrices interdum imperdiet. Tristique eget quam natoque in vitae cursus et fermentum enim. Tincidunt sollicitudin at id porta praesent at condimentum lorem.'
    }
  ];

const ContactFaq = () => {
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
        Service Faqs
      </h1>
      <p className="text-white text-center text-[16px] opacity-60 mb-10">
        Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet id cursus id blandit. Consectetur maecenas id vivamus integer integer aliquam. Donec amet rhoncus ut turpis massa augue faucibus.
      </p>
      <div>
        <Accordion accordionItems={accordionItems} />
      </div>
    </div>
  </div>
  )
}

export default ContactFaq