"use client";

import { motion } from "framer-motion";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
const programs = [
  {
    day: "Monday / Tuesday / Thursday",
    title: "Daily Bible Study",
    description: "In-depth study and reflection on God’s Word to strengthen faith and wisdom.",
    images:'https://res.cloudinary.com/dhifpki0r/image/upload/v1761133981/SOHK_003_ktskpr.jpg'

  },
  {
    day: "Wednesday",
    title: "Prayer Meeting",
    description: "A time of collective prayer and intercession for personal, church, and global needs.",
    images:'https://res.cloudinary.com/dhifpki0r/image/upload/v1761133981/SOHK_003_ktskpr.jpg'
  },
  {
    day: "Saturday",
    title: "Leadership Clinic",
    description: "Equipping members with leadership and mentoring skills for spiritual and life growth.",
    images:'https://res.cloudinary.com/dhifpki0r/image/upload/v1761133981/SOHK_003_ktskpr.jpg'
  },
  {
    day: "Saturday",
    title: "Relationship Clinic",
    description: "A special session to discuss Godly relationships, marriage, and personal development.",
    images:'https://res.cloudinary.com/dhifpki0r/image/upload/v1761133981/SOHK_003_ktskpr.jpg'
  },
  {
    day: "Sunday",
    title: "Testimonies & Trivia",
    description: "Celebrating God’s faithfulness through testimonies, fun, and engaging trivia.",
    images:'https://res.cloudinary.com/dhifpki0r/image/upload/v1761133981/SOHK_003_ktskpr.jpg'
  },
];

export default function Programs() {
     const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="program-section" id="programs">
      <div className="container">

        <motion.div
          className="header-main-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            <header className="mission-header">
        <MdOutlineEmojiPeople className="mission-icon"/>
        <h2
          className="mission-title"
        >
          Weekly Programs
        </h2>
        </header>

         <p className="mission-verse">
  Be a part of our weekly gatherings that strengthen hearts, build character, and deepen connection with God.
</p>

</motion.div>
        <div className="program-grid">
          {programs.map((program, index) => (
            <motion.div
               key={index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`program-card ${
                hoveredIndex === index ? "hoveredIt" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
            >
                <div className="program-img-container">
                    <Image src={program.images} alt={program.title} width={200} height={200} quality={100}/>
                </div>
              <h3 className="program-name">{program.title}</h3>
              <p className="">{program.day}</p>
              <p className="">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
