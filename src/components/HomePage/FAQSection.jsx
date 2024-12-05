import { useState } from "react";

import plus from "../../assets/homepage/plus.svg"; // Path to your plus icon
import minus from "../../assets/homepage/minus.svg"; // Path to your minus icon

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend visiting the dentist at least twice a year for routine check-ups and cleanings. However, your specific needs may require more frequent visits.",
  },
  {
    question: "What can I expect during my first visit?",
    answer:
      "During your first visit, the dentist will conduct a thorough examination, review your medical history, and discuss your dental concerns.",
  },
  {
    question: "How can I prepare for my dental appointment?",
    answer:
      "Make sure to brush and floss your teeth before your appointment and bring any relevant medical or insurance documents.",
  },
  {
    question: "What should I do in case of a dental emergency?",
    answer:
      "Contact your dentist immediately for guidance. For severe cases, visit the nearest emergency room.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mb-40">
      <div className="max-w-8xl  mx-12">
        <h2 className="text-5xl font-bold text-gray-900 mb-14 font-outfit">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "bg-[#FFF4EB]" : "bg-white"
              }`}
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3
                  className={`text-2xl py-2 font-outfit font-light pl-4 transition-colors duration-300 ${
                    activeIndex === index ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h3>
                <button
                  className={`w-8 h-8 flex items-center justify-center rounded-full bg-white transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <img
                    src={activeIndex === index ? minus : plus}
                    alt={activeIndex === index ? "Collapse" : "Expand"}
                    className="w-10 h-10"
                  />
                </button>
              </div>
              <div
                className={`pl-10 text-[#898787] font-poppins transition-all duration-500 ${
                  activeIndex === index ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
                }`}
                style={{ overflow: "hidden" }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
