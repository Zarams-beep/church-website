"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiMic2Fill, RiDoubleQuotesL } from "react-icons/ri";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const testimonies = [
  {
    name: "Sarah O.",
    role: "Member, Worship Team",
    testimony:
      "Being part of this ministry transformed my relationship with God. I found a family that prays, worships, and grows together.",
    image:
      "https://images.unsplash.com/photo-1562203221-84a4acfddcd8?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Michael A.",
    role: "Media & Tech Team",
    testimony:
      "I used to be shy, but serving here helped me discover my voice and purpose. Now I use my creativity to spread the gospel.",
    image:
      "https://images.unsplash.com/photo-1630467267476-c67b34ffc837?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Grace E.",
    role: "Prayer Unit",
    testimony:
      "Every prayer meeting reminds me of God’s faithfulness. I’ve seen answered prayers in my family and church life.",
    image:
      "https://images.unsplash.com/photo-1605460375648-278bcbd579a6?w=600&auto=format&fit=crop&q=60",
  },
];

export default function TestimoniesSection() {
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonies.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonies.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonies.length) % testimonies.length);

  const active = testimonies[index];

  return (
    <section className="testimonies-section" id="testimonies">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <header className="mission-header">
            <RiMic2Fill className="mission-icon" />
            <h2 className="mission-title">Testimonies</h2>
          </header>
          <p className="mission-verse">
            Stories of transformation, healing, and renewed faith from our
            members.
          </p>
        </motion.div>

        {/* Testimony Display */}
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.6 }}
          className="testimonies-grid"
        >
          <div className="testimonies-phrase">
            <div className="test-img-container">
              <Image
                src={active.image}
                alt={active.name}
                width={400}
                height={400}
                className=""
              />
            </div>
          <div className="test-content-container">
              <p className="">“{active.testimony}”</p>
            <h4 className="">{active.name}</h4>
            <span className="">{active.role}</span>
            </div>
          </div>

          {/* Arrows */}
          <div className="arrow-container">
            <button
              onClick={prevSlide}
              className=""
            >
              <FaArrowLeftLong className="arrow-icon" />
            </button>
            <button
              onClick={nextSlide}
              className=""
            >
              <FaArrowRightLong className="arrow-icon" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
