"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: "first",
    image:
      "https://res.cloudinary.com/dhifpki0r/image/upload/v1761767162/SOHK_001_jmowp7.jpg",
  },
  {
    id: "second",
    image:
      "https://res.cloudinary.com/dhifpki0r/image/upload/v1761805748/SOHK_038_xqndee.jpg",
  },
  {
    id: "third",
    image:
      "https://images.unsplash.com/photo-1605460375648-278bcbd579a6?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: "fourth",
    image:
      "https://images.unsplash.com/photo-1630467267476-c67b34ffc837?w=600&auto=format&fit=crop&q=60",
  },
];

export default function HeroAbout() {
  const [index, setIndex] = useState(0);

  // Slow autoplay every 8 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-section">
      {/* Background layer with crossfade */}
      <div className="slide-viewport">
        <AnimatePresence initial={false}>
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="hero-section-bg"
            style={{
              backgroundImage: `url(${slides[index].image})`,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </AnimatePresence>
      </div>

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
          <h6>Welcome to our Home</h6>
          <h1>More than a church, a home.</h1>
          <h4>
           We gather to worship, serve, and impact lives far beyond these walls.
          </h4>
          <Link href="/join-us" className="btn-hero">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}