"use client";
import { useState } from 'react';

const Accordion = () => {
  // Accordion data
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

  // State to track which accordion item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggles the accordion item
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // SVG icons for plus and minus
  const plusSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
    </svg>
  );

  const minusSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
    </svg>
  );

  return (
    <div className="accordion w-full col-span-2">
      {accordionItems.map(({ id, question, answer }) => (
        <div key={id} className="border border-[#1E1E21] p-4 my-2 rounded-[30px]">
          <button onClick={() => toggleAccordion(id)} className="w-full flex justify-between items-center py-5 text-white">
            <span className='text-[28px]'>{question}</span>
            <span className="text-black bg-white p-4 rounded-full transition-transform duration-300">
              {openIndex === id ? minusSVG : plusSVG}
            </span>
          </button>
          <div
            style={{
              maxHeight: openIndex === id ? '1000px' : '0',
            }}
            className="overflow-hidden transition-all duration-300 ease-in-out"
          >
            <div className="pb-5 text-sm text-[#929292] text-[16px]">
              {answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
