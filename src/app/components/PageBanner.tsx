"use client";
import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  subtitle: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section
      className="relative bg-cover bg-center pt-40 pb-20 text-white"
      style={{ backgroundImage: "url('/banner-bg.jpg')" }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-primary/70"></div>

      <div className="relative container mx-auto px-6 text-center z-10">
        <motion.h1
          className="text-5xl font-serif font-bold text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
