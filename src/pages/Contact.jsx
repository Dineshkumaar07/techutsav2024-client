// import React from "react";

// const Contact = () => {
//   return (
//     <div className="px-4">
//       <h1 className="text-6xl sm:text-9xl font-bold text-black/40 ">CONTACT</h1>
//     </div>
//   );
// };

// export default Contact;
import React, { useRef, useState } from "react";
import "../css/button.css";
import emailjs from "@emailjs/browser";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  // }, []);
  const [isSubmitHovered, setIssubmitHovered] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hfliycc",
        "template_q1261ss",
        form.current,
        "JHO3oqwF8Fy30v7RD"
      )
      .then(
        (result) => {
          //console.log(result.text);
        },
        (error) => {
          //console.log(error.text);
        }
      );
    e.target.reset();
  };

  const divStyle = "flex items-center gap-5";

  return (
    <div className="w-full  pt-16  flex flex-col overflow-x-hidden md:px-9 pl-9 ">
      <h1 className="text-6xl sm:text-9xl font-bold text-black/40">CONTACT</h1>

      <div
        className="w-full h-max flex flex-col-reverse sm:flex-row items-center justify-center sm:px-16 md:my-20  mb-14 mt-9 sm:mt-0"
        data-aos="fade-right"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-7 bg-white p-9 mt-9 sm:mt-0 rounded-lg drop-shadow-[3px_5px_10px_rgba(0,0,0,0.25)]"
        >
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="font-semibold tracking-widest text-sm">
              Name
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded h-14 py-2 px-3  font-medium bg-black/5 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              name="user_name"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="font-semibold tracking-widest text-sm">
              Email
            </label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight bg-black/5 focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              name="user_email"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="font-semibold tracking-widest text-sm">
              Message
            </label>
            <textarea
              rows="5"
              cols="60"
              type="text"
              className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 bg-black/5 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Message"
              name="message"
              required
            />
          </div>
          <button
            className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md ${
              isSubmitHovered ? "hovered" : ""
            }`}
            onMouseEnter={() => setIssubmitHovered(true)}
            onMouseLeave={() => setIssubmitHovered(false)}
          >
            SUBMIT
          </button>
        </form>
        <div className="flex flex-col gap-7  sm:p-9 sm:w-1/2  ">
          <h1 className="text-2xl font-semibold">
            Have A Question? Get In Touch!
          </h1>
          <p>
            Thank you for visiting our website! If you have any questions or
            queries, drop us a message, and we'll get back to you promptly. Your
            time is valuable to us!
          </p>
          <div className={divStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <div>
              <p>For Event details :-</p>
              <p>Jagajeet Puttaa : 7010570545</p>
              <p>Dharsana V : 9344575630</p>
            </div>
          </div>
          <div className={divStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <div>
              <p>For Technical queries :-</p>
              <p>Dinesh M S : 8825900457</p>
              <p>Venkadesh S : 8610475929</p>
            </div>
          </div>
          <div className={divStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <p>dineshkumaar@student.tce.edu</p>
          </div>
          <div className={divStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p>
              <a
                href="https://maps.app.goo.gl/ahRXz32jqZVRMjai7"
                target="_blank"
              >
                TCE, Madurai
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
