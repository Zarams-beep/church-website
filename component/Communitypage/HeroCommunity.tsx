"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: "first",
    image:
      "https://res.cloudinary.com/dhifpki0r/image/upload/v1761767825/SOHK_031_zoioyp.jpg",
  },
  {
    id: "second",
    image:
      "https://res.cloudinary.com/dhifpki0r/image/upload/v1761767237/SOHK_036_hrweoj.jpg",
  },
  {
    id: "third",
    image:
      "https://res.cloudinary.com/dhifpki0r/image/upload/v1761767854/SOHK_001_qxnzan.jpg",
  },
  {
    id: "fourth",
    image:
      "https://res.cloudinary.com/dhifpki0r/image/upload/v1761767859/SOHK_030_vbhhqd.jpg",
  },
];

export default function CommunityUs() {
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
          <h6>Welcome to our Community</h6>
<h1>A family bound by faith, love, and purpose.</h1>
<h4>
  More than a gathering, we are a people growing together in Christ,
  strengthening one another, and reaching hearts beyond these walls.
</h4>

          <Link href="/about-us" className="btn-hero">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}