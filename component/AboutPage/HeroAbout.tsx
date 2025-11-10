"use client";

import { motion, AnimatePresence} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroAbout() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setShowFirst((prev) => !prev);
    }, 60000);
    return () => clearInterval(interval)
  },[])
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
              duration: 3,
              ease: "easeInOut",
            }}
            className="hero-section-bg"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dhifpki0r/image/upload/v1761767162/SOHK_001_jmowp7.jpg')",
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
                "url('https://res.cloudinary.com/dhifpki0r/image/upload/v1761805748/SOHK_038_xqndee.jpg')",
            }}
          />
        )}
      </AnimatePresence>
      
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

        <Link href="/join-us" className="btn-hero">
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
