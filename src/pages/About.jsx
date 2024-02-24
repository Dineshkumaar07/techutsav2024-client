import React from "react";
import tce from "../assets/tce.png";
import Lottie from "react-lottie";
import animationData from "../lotties/meeting.json";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="relative flex flex-col mt-9">
      <h1 className="text-6xl sm:text-9xl font-bold text-black/40 absolute -z-10 left-8">
        ABOUT
      </h1>
      <div>
        <div className="flex gap-6 items-center flex-col lg:flex-row">
          <img src={tce} alt="TCE" className="w-full sm:w-[800px] z-20" />

          <p className="tracking-wider leading-8 sm:pr-2 px-6">
            <span className="font-bold">Founded in 1957</span> by philanthropist
            and industrialist late{" "}
            <span className="font-bold">
              Shri karumuthu Thiagarajan Chettiar
            </span>
            , Thiagarajar College Of Engineering(TCE) is an institution
            afflication to Anna university and situated in Madurai,the Temple
            city. The college is funded by central & state Governments and
            Mangement.The courses offered in TCE are approved by the All India
            council for Technical Education,New Delhi. TCE was granted Autonomy
            in the year 1987 and the programmes have been accredited by the
            National Board of Accreditation(NBA).
          </p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-5 lg:gap-28 items-center justify-center lg:border-2 lg:border-black/50 rounded-xl lg:m-9">
          <div className="lg:w-[500px] w-[300px] ">
            <Lottie options={defaultOptions} />
          </div>
          <p className="tracking-wider leading-8 px-4 lg:pl-9 lg:w-1/2">
            <span className="font-bold">TECHUTSAV</span> IS A National Level
            Symposium Conducted by the institution every year for a conference
            that can celebrate different elements of cybersecurity, system
            administration, and networking concepts. It can also showcase
            innovative research projects across multiple disciplines, such as
            engineering, computer science, and engineering technology
            management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
