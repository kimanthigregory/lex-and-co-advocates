"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Our Lawyers", href: "/lawyers" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Conditional classes for text color based on scroll state
  const textColor = isScrolled || isMenuOpen ? "text-primary" : "text-white";
  const logoColor = isScrolled ? "text-primary" : "text-white";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-sm border-b border-gray-200"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className={`text-2xl font-serif font-bold transition-colors duration-300 z-50 ${
              isMenuOpen ? "text-white" : logoColor
            }`}
          >
            LEX & CO.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-semibold group transition-colors duration-300 ${textColor}`}
              >
                {link.name}
                <span
                  className={`absolute bottom-[-2px] left-0 w-0 h-0.5 ${
                    isScrolled ? "bg-secondary" : "bg-white"
                  } transition-all duration-300 group-hover:w-full`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none z-50 relative"
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen
                    ? "bg-white rotate-45 translate-y-[5px]"
                    : isScrolled
                    ? "bg-primary"
                    : "bg-white"
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 mt-1.5 transition-all duration-300 ${
                  isMenuOpen
                    ? "bg-white -rotate-45 -translate-y-[5px]"
                    : isScrolled
                    ? "bg-primary"
                    : "bg-white"
                }`}
              ></div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-primary z-40 md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-3xl font-serif hover:text-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
