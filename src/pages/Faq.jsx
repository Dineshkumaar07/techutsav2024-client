import React from "react";
import Question from "../components/Question";

const Faq = () => {
  return (
    <div className="px-9">
      <h1 className="text-6xl sm:text-9xl font-bold text-black/40 ">FAQs</h1>
      <div className="flex flex-col gap-5 my-9 sm:ml-14 ">
        <Question
          question={"Question"}
          answer={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
        <Question
          question={"Question"}
          answer={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
        <Question
          question={"Question"}
          answer={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
        <Question
          question={"Question"}
          answer={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
        <Question
          question={"Question"}
          answer={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
        <Question
          question={"Question"}
          answer={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
      </div>
    </div>
  );
};

export default Faq;
