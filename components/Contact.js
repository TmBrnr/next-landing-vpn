import React, { useState, useMemo } from "react";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "018bb3ec-2ecb-45e5-bbad-e8238a22c673");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setResult("Form Submitted Successfully");
        event.target.reset(); // Reset the form fields only on successful submission
      } else {
        console.error("Submission Error:", data);
        setResult(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("Failed to send form due to network error");
    }
  };

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="contact-form"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="py-6 sm:py-16 w-full items-center flex flex-col justify-center"
          variants={scrollAnimation}
        >
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl mb-5 font-medium text-black-600 leading-relaxed"
          >
            Get in Touch
          </motion.h3>
          <div className="w-full sm:w-[80%] justify-center items-center flex flex-row">
            <form
              onSubmit={onSubmit}
              className="w-full flex flex-col justify-center items-start text gap-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="text-black-500 w-full mb-4 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="text-black-500 w-full mb-4 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <input
                type="text"
                name="Company"
                placeholder="Your Company Name"
                required
                className="text-black-500 w-full mb-4 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="text-black-500 min-h-[300px] w-full mb-4 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
              ></textarea>
              <ButtonPrimary type="submit">Submit Form</ButtonPrimary>
            </form>
          </div>
          <div className="flex flex-col justify-center items-start">
            <span className="text-black-500">{result}</span>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
}
