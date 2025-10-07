"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomepageHero() {
  return (
    <section className="hero-section">
      {/* Zooming Background Image */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="hero-section-2"
        
      />

      {/* Overlay */}
      <div className="overlay" />

      {/* Static Hero Content */}
      <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ amount: 0.3, once: false }}
        className="hero-content"
      >
        <h6 className="">Welcome to our Fellowship</h6>
        <h1 className="">Become a Part of Our Community</h1>
        <h4 className="">
          Join us in worship, fellowship, and purpose. You are always welcome here.
        </h4>
        <Link href="/about-us" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=""
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div></div>
    </section>
  );
}
