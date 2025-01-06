import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqPage = () => {
  // Array of FAQs
  const faqData = [
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. Items must be in their original condition and packaging.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order by logging into your account and clicking on 'Track Order' in the orders section.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to select countries. Additional charges may apply.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, PayPal, and other secure payment methods listed at checkout.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support via email at support@ecommerce.com or call us at (123) 456-7890.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Typography variant="h4" className="mb-6 text-center">
        Frequently Asked Questions (FAQs)
      </Typography>
      <div>
        {faqData.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
