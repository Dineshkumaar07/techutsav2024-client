import React, { useState } from "react";

const Question = ({ question, answer }) => {
  const [more, setMore] = useState(false);
  return (
    <div className="">
      <div
        onClick={() => setMore(!more)}
        className="border-2 border-black rounded-lg sm:w-3/4 py-4 px-4 flex justify-between relative cursor-pointer"
      >
        <h1>{question}</h1>
        {!more ? (
          <button onClick={() => setMore(!more)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        ) : (
          <button onClick={() => setMore(!more)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        )}
      </div>
      <div
        className={`transition-all duration-500 ease-in-out bg-black/5 rounded-lg overflow-hidden opacity-0 sm:w-3/4 ${
          more ? "max-h-96 opacity-100" : "max-h-0"
        }`}
      >
        <h1 className="p-9">{answer}</h1>
      </div>
    </div>
  );
};

export default Question;
