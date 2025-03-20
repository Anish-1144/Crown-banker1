import React, { useState } from "react";
import Nevbar from "../components/header/Nevbar";
import Footer from "../components/footer/Footer";
function Fqa() {
  // State to manage which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data with questions and placeholder answers
  const faqData = [
    {
      question: "Which Plan Is Right For Me?",
      answer:
        "Choosing the right plan depends on your investment goals, risk tolerance, and financial situation. We recommend reviewing our plan options on the website and consulting with one of our advisors to find the best fit for your needs.",
    },
    {
      question: "What are my payment options?",
      answer:
        "Crown Bankers offers multiple payment options, including bank transfers, credit/debit cards, and select third-party payment processors. You can find more details in the payment section of your account dashboard.",
    },
    {
      question: "Do I have to commit to a contract?",
      answer:
        "No, Crown Bankers does not require a long-term contract for most plans. However, certain investment products may have specific terms. Please review the product details or contact support for more information.",
    },
    {
      question: "How does the free trial work?",
      answer:
        "Our free trial allows you to explore Crown Bankers' platform for a limited period, typically 14 days, with access to select features. No payment is required upfront, but you’ll need to provide billing information to activate the trial.",
    },
    {
      question: "What Payment Methods Are Available?",
      answer:
        "We accept a variety of payment methods, including major credit/debit cards, bank transfers, and certain digital wallets. Check the payment section on our website for a full list of supported methods.",
    },
    {
      question: "What if I pick the wrong plan?",
      answer:
        "If you select a plan that doesn’t suit your needs, you can contact our support team within 30 days to switch to a different plan. We’ll help you find the right option without any penalty.",
    },
    {
      question: "If I have questions, where can I find answers?",
      answer:
        "You can find answers in our Help Center on the website, or you can reach out to our support team at support@crownbankers.com. We’re here to assist you with any questions you may have.",
    },
  ];

  // Toggle function for opening/closing FAQ items
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ backgroundImage: `url("../images/backgrounds/4.jpg")` }}>
        <Nevbar />
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h1 className="text-4xl sm:text-4xl font-extrabold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h1>

          {/* FAQ Card */}
          <div className="bg-[#e8f5e9] backdrop-blur-md rounded-lg shadow-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 last:border-b-0"
                >
                  {/* Question with Toggle */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <span className="text-green-600 text-2xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer (shown when open) */}
                  {openIndex === index && (
                    <div className="pb-4">
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
}

export default Fqa;
