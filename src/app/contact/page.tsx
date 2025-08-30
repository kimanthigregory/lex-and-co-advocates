"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Get In Touch"
        subtitle="We are here to help. Reach out to us for a consultation or inquiry."
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-serif font-semibold mb-6 text-primary">
                Send a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full border border-gray-300 p-3 focus:ring-secondary focus:border-secondary transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full border border-gray-300 p-3 focus:ring-secondary focus:border-secondary transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-1 block w-full border border-gray-300 p-3 focus:ring-secondary focus:border-secondary transition"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-3 font-semibold hover:bg-yellow-600 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </motion.div>

            <motion.div
              className="mt-12 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-serif font-semibold mb-6 text-primary">
                Our Office
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <strong>Address:</strong> 123 Legal Avenue, Kiserian, Kajiado
                  County, Kenya
                </p>
                <p>
                  <strong>Email:</strong> info@lexandco.com
                </p>
                <p>
                  <strong>Phone:</strong> +254 700 123 456
                </p>
              </div>
              <div className="mt-8 h-80 bg-gray-200 border border-gray-300">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.912543948618!2d36.67756912553955!3d-1.420658823164448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05a96991316f%3A0x6335359214d958d5!2sKiserian!5e0!3m2!1sen!2ske!4v1724967733454!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
