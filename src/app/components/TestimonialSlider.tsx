"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const testimonials = [
  {
    quote:
      "Lex & Co. provided unparalleled legal support during a critical time for our business. Their professionalism and dedication were second to none.",
    author: "Jane Doe, CEO of TechCorp",
  },
  {
    quote:
      "Their expertise in family law is remarkable. They handled my case with compassion and efficiency, leading to a favorable outcome.",
    author: "John Smith, Private Client",
  },
  {
    quote:
      "Navigating the complexities of real estate law was made simple and clear by the team at Lex & Co. I highly recommend their services.",
    author: "Alice Johnson, Property Developer",
  },
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function TestimonialSlider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonialIndex = wrap(0, testimonials.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative w-full h-72 flex flex-col items-center justify-center overflow-hidden">
      {/* Quote Icon */}
      <div className="absolute top-0 text-7xl text-secondary/20 z-0">
        &ldquo;
      </div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="absolute w-full px-12 text-center"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <p className="text-xl md:text-2xl font-serif italic text-gray-700 leading-relaxed">
            {testimonials[testimonialIndex].quote}
          </p>
          <p className="mt-6 font-semibold text-primary text-lg">
            - {testimonials[testimonialIndex].author}
          </p>
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20 cursor-pointer bg-neutral-light p-2 rounded-full hover:bg-gray-300 transition-colors"
        onClick={() => paginate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20 cursor-pointer bg-neutral-light p-2 rounded-full hover:bg-gray-300 transition-colors"
        onClick={() => paginate(1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
}
