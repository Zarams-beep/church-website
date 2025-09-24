'use client'

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import "@/styles/splash.css";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="splash">
      <div className="logo-container">
        <Image
          src="/undraw_adventure-map_purple.svg"
          alt="Seekers of the Kingdom"
          width={250}
          height={250}
          className=""
        />
      </div>

      <div className="text-container">
        <motion.h1
          className=""
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Seekers of the Kingdom
        </motion.h1>

        <motion.p
          className=""
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "backOut" }}
        >
          “But seek ye first the kingdom of God <span className="dots" />” — Matthew 6:33
        </motion.p>
      </div>
    </div>
  );
}
