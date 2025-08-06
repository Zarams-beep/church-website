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
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1600&auto=format&fit=crop&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="overlay absolute inset-0 bg-black/40 z-10" />

      {/* Static Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ amount: 0.3, once: false }}
        className="hero-content relative z-20 text-white text-center max-w-3xl mx-auto px-4 py-32"
      >
        <h6 className="text-lg font-medium mb-2">Welcome to our Church</h6>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Become a Part of Our Community</h1>
        <h4 className="text-lg md:text-xl font-light mb-6">
          Join us in worship, fellowship, and purpose. You are always welcome here.
        </h4>
        <Link href="/about-us" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-black rounded-lg shadow-md"
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
