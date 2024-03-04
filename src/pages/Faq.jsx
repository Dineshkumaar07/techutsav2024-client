import React from "react";
import Question from "../components/Question";

const faqs = [
  {
    question: "How should we pay the Fees?",
    answer:
      "You should Pay fees using the ICICI Bank Portal. You must paste the Transaction Number after payment. The Admin will verify the Payment and update your profile",
  },
  {
    question: "Can we register on spot?",
    answer: "Yes, you can register on spot for the events.",
  },

  {
    question: "What are the events we can attend?",
    answer:
      "You can attend all the Events of the particular department and  can attend workshop irrespective of the department chosen ",
  },
  {
    question: "Will Meals be provided?",
    answer: "Yes Meals will be provided afternoon (Vegetarian).",
  },
  {
    question: "Will you provide accomodation for students?",
    answer:
      "No, the college will not provide any accomodation for the students.",
  },
  {
    question: "Does all events have Cash prize?",
    answer:
      "It depends on the Event. Some of the Event have cash prizes and some don't.",
  },
];

const Faq = () => {
  return (
    <div className="px-9">
      <h1 className="text-6xl sm:text-9xl font-bold text-black/40 ">FAQs</h1>
      <div className="flex flex-col gap-5 my-9 sm:ml-14 ">
        {faqs.map((element) => {
          return (
            <Question
              question={element["question"]}
              answer={element["answer"]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
