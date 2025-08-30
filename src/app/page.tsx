"use client";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import TestimonialSlider from "@/components/TestimonialSlider";

const whyChooseUsItems = [
  {
    title: "Expert Team",
    description:
      "Our advocates possess deep knowledge across various legal fields.",
  },
  {
    title: "Client-Focused",
    description:
      "We prioritize your needs, offering personalized and strategic counsel.",
  },
  {
    title: "Proven Results",
    description:
      "A strong track record of securing favorable outcomes for our clients.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary/70 backdrop-brightness-75"></div>
        <div className="relative container mx-auto px-6 text-center z-10">
          <motion.h1
            className="text-5xl text-white md:text-7xl font-serif font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Expert Legal Counsel in Nairobi
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Lex & Co. Advocates offers unparalleled legal expertise with a
            commitment to integrity. We navigate complex legal landscapes to
            deliver strategic solutions for individuals and businesses.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button href="/contact">Book a Consultation</Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-neutral-light py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-12">
            Why Lex & Co. Advocates?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-8 border border-gray-200 text-left"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-serif font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-serif font-bold mb-8">
            What Our Clients Say
          </h2>
          <TestimonialSlider />
        </div>
      </section>
    </>
  );
}
