"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import Image from "next/image";

const lawyers = [
  {
    name: "Jane Lex",
    title: "Managing Partner",
    expertise: "Corporate & Commercial Law",
    image: "/lawyer1.jpg",
  },
  {
    name: "John Co",
    title: "Senior Partner",
    expertise: "Criminal Defense",
    image: "/lawyer2.jpg",
  },
  {
    name: "Alice Smith",
    title: "Associate",
    expertise: "Family Law",
    image: "/lawyer3.jpg",
  },
  {
    name: "Robert Brown",
    title: "Associate",
    expertise: "Real Estate Law",
    image: "/lawyer4.jpg",
  },
  {
    name: "Mary Anne",
    title: "Legal Counsel",
    expertise: "Intellectual Property",
    image: "/lawyer5.jpg",
  },
  {
    name: "David Green",
    title: "Junior Associate",
    expertise: "Litigation",
    image: "/lawyer6.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function LawyersPage() {
  return (
    <>
      <PageBanner
        title="Our Dedicated Team"
        subtitle="Meet the experienced and driven legal professionals at Lex & Co. Advocates."
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {lawyers.map((lawyer) => (
              <motion.div
                key={lawyer.name}
                className="bg-neutral-light p-6 text-center border-t-4 border-secondary"
                variants={itemVariants}
              >
                <div className="relative w-36 h-36 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                  <Image
                    src={lawyer.image}
                    alt={lawyer.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold">
                  {lawyer.name}
                </h3>
                <p className="text-primary font-semibold">{lawyer.title}</p>
                <p className="text-gray-600 mt-2 text-sm">{lawyer.expertise}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
