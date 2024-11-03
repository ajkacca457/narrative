"use client";
import { useState } from 'react';

const Accordion = () => {
  // Accordion data
  const accordionItems = [
    {
      id: 1,
      question: 'What is Material Tailwind?',
      answer: 'Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.'
    },
    {
      id: 2,
      question: 'How to use Material Tailwind?',
      answer: 'You can use Material Tailwind by importing its components into your Tailwind CSS project.'
    },
    {
      id: 3,
      question: 'What can I do with Material Tailwind?',
      answer: 'Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.'
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
        <div key={id} className="border-b border-slate-200">
          <button onClick={() => toggleAccordion(id)} className="w-full flex justify-between items-center py-5 text-white">
            <span>{question}</span>
            <span className="text-white transition-transform duration-300">
              {openIndex === id ? minusSVG : plusSVG}
            </span>
          </button>
          <div
            style={{
              maxHeight: openIndex === id ? '1000px' : '0',
            }}
            className="overflow-hidden transition-all duration-300 ease-in-out"
          >
            <div className="pb-5 text-sm text-white">
              {answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
