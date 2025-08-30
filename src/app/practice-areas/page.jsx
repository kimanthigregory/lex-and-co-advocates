"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    slug: "corporate-law",
    title: "Corporate Law",
    description:
      "Guidance on mergers, acquisitions, compliance, and corporate governance.",
  },
  {
    slug: "family-law",
    title: "Family Law",
    description:
      "Compassionate handling of divorce, child custody, and prenuptial agreements.",
  },
  {
    slug: "real-estate",
    title: "Real Estate Law",
    description:
      "Expertise in commercial and residential property transactions and disputes.",
  },
  {
    slug: "criminal-defense",
    title: "Criminal Defense",
    description: "Vigorous defense for a wide range of criminal charges.",
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    description: "Protection of trademarks, copyrights, and patents.",
  },
  {
    slug: "litigation",
    title: "Litigation & Dispute Resolution",
    description:
      "Representing clients in court and through alternative dispute resolution.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageBanner
        title="Practice Areas"
        subtitle="Comprehensive legal services tailored to meet the diverse needs of our clients."
      />
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div key={service.slug} variants={itemVariants}>
                <Link
                  href={`/practice-areas/${service.slug}`}
                  className="group block p-8 border bg-white border-gray-200 h-full hover:border-secondary transition-colors duration-300"
                >
                  <h3 className="text-2xl font-serif font-semibold mb-3 text-primary group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <span className="text-primary font-semibold mt-6 inline-block group-hover:text-secondary transition-colors">
                    Learn More &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
