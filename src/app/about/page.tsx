"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import Image from "next/image";

const lawyers = [
  { name: "Jane Lex", title: "Managing Partner", image: "/lawyer1.jpg" },
  { name: "John Co", title: "Senior Partner", image: "/lawyer2.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Our Firm"
        subtitle="Founded on principles of integrity, excellence, and unwavering dedication to justice."
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <p className="max-w-4xl mx-auto text-center text-lg text-gray-700 leading-relaxed mb-16">
              Lex & Co. Advocates has grown from a boutique firm in Kajiado
              County to a leading legal practice in Nairobi, committed to
              providing our clients with strategic, effective, and personalized
              legal solutions. Our history is built on a foundation of trust,
              successful outcomes, and a deep understanding of the local legal
              landscape.
            </p>
          </motion.div>

          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {lawyers.map((lawyer, index) => (
              <motion.div
                key={lawyer.name}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  {/* The Image component is now uncommented */}
                  <Image
                    src={lawyer.image}
                    alt={lawyer.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-serif font-semibold">
                  {lawyer.name}
                </h3>
                <p className="text-secondary font-semibold">{lawyer.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
