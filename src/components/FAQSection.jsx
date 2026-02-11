import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "What services does Merc Sphere provide?",
    answer:
      "Merc Sphere offers custom software development, web and mobile app development, cloud integration, digital transformation, and IT consulting services."
  },
  {
    question: "How can Merc Sphere improve my business operations?",
    answer:
      "We analyze your workflow and build technology solutions that automate processes, improve efficiency, and support scalable growth."
  },
  {
    question: "Do you provide customized software solutions?",
    answer:
      "Yes, we design and develop fully customized software tailored to your business goals, industry needs, and long-term scalability."
  },
  {
    question: "Do you offer support after project delivery?",
    answer:
      "Absolutely. We provide ongoing maintenance, performance optimization, updates, and technical support after deployment."
  },
  {
    question: "How can I start a project with Merc Sphere?",
    answer:
      "Simply contact us through our website. Our team will discuss your requirements and propose the best technical solution."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">

        {/* Left Content */}
        <div>
          <p className="text-sm text-blue-600 font-semibold mb-2">
            Merc Sphere Support
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            Frequently asked <br /> questions
          </h2>

          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              Still have a question?
            </h3>
            <p className="text-gray-600 mb-4">
              Can’t find your answer here? Contact our team and we’ll help you choose the right solution.
            </p>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
              >
                {faq.question}
                <FiChevronDown
                  className={`text-xl transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
