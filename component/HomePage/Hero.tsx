"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomepageHero() {
  const [showFirst, setShowFirst] = useState(true);

  // Switch every 6 seconds instead of 10
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <AnimatePresence mode="wait">
        {showFirst ? (
          <motion.div
            key="first"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 3, // faster fade
              ease: "easeInOut",
            }}
            className="hero-section-bg"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dhifpki0r/image/upload/v1761134169/outreach-2_jpearc.jpg')",
            }}
          />
        ) : (
          <motion.div
            key="second"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
            className="hero-section-bg"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dhifpki0r/image/upload/v1761134150/IMG_4703_vhfczx.jpg')",
            }}
          />
        )}
      </AnimatePresence>

      <div className="overlay" />

      {/* Hero Content */}
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ amount: 0.3, once: false }}
          className="hero-content"
        >
          <h6>Welcome to our Fellowship</h6>
          <h1>Become a Part of Our Community</h1>
          <h4>
            Join us in worship, fellowship, and purpose. You are always welcome here.
          </h4>
          <Link href="/about-us">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
