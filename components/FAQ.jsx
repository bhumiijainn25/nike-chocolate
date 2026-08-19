"use client";

import { useState } from "react";
import faq from "../data/faq";

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq">
      <div className="section-heading">
        <p className="section-label">FAQ</p>

        <h2>Frequently Asked Questions</h2>

        <p>
          Everything you need to know about our chocolates and your order.
        </p>
      </div>

      <div className="faq-list">
        {faq.map((item) => (
          <div className="faq-item" key={item.id}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(item.id)}
              aria-expanded={openId === item.id}
            >
              <span>{item.question}</span>

              <span className="faq-icon">
                {openId === item.id ? "−" : "+"}
              </span>
            </button>

            {openId === item.id && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}