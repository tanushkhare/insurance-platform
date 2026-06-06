import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQ() {
  const faqs = [
    {
      question: "What types of insurance do you provide?",
      answer:
        "We provide life insurance, health insurance, vehicle insurance, business insurance, and investment planning solutions.",
    },

    {
      question: "How can I file an insurance claim?",
      answer:
        "You can file a claim through your dashboard or contact our support team for assistance.",
    },

    {
      question: "Do you provide SIP and mutual fund planning?",
      answer:
        "Yes, we provide SIP planning, retirement planning, and mutual fund investment guidance.",
    },

    {
      question: "Can I track my policies online?",
      answer:
        "Yes, after login you can manage policies, claims, and investment details through your dashboard.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-blue-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Find answers to common insurance and financial planning questions.
          </p>

        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition"
              >

                <span className="text-lg font-semibold text-left text-gray-800">
                  {faq.question}
                </span>

                <span className="text-blue-900">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>

              </button>

              {activeIndex === index && (
                <div className="p-6 bg-white text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;