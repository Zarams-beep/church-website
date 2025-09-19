"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroAbout() {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="about-hero-section"/>
      {/* Dark Overlay */}
      <div className="overlay" />

      {/* Content */}
      <div className="container">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ amount: 0.3, once: false }}
        className="hero-content"
      >
        <motion.h6
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className=""
        >
          Welcome to our Home
        </motion.h6>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className=""
        >
          More than a church, a home.
        </motion.h1>

        <motion.h4
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className=""
        >
          We gather to worship, serve, and impact lives far beyond these walls.
        </motion.h4>

        <Link href="/join-us" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=""
          >
            Join Us
          </motion.button>
        </Link></motion.div>
      </div>
    </section>
  );
}
