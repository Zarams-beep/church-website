"use client";

import { motion } from "framer-motion";
import { FaPrayingHands, FaBookOpen, FaHeart } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { IconType } from "react-icons";

export type MissionItem = {
  icon: IconType;
  title: string;
  description: string;
};

export default function MissionSection() {
  const missionItems:MissionItem[] = [
    {
      icon: FaPrayingHands,
      title: "Faith & Worship",
      description: "Guiding hearts to a deeper relationship with God through prayer, worship, and the Word.",
    },
    {
      icon: FaBookOpen,
      title: "Biblical Teaching",
      description: "Rooted in Scripture, we share undiluted truth that transforms lives and renews minds.",
    },
    {
      icon: FaHeart,
      title: "Love & Outreach",
      description: "Extending God's love to the world through service, compassion, and community impact.",
    },
  ];

  return (
    <section className="mission-vision-container">
<div className="container">
        <div className="mission-inner">
       <motion.div  initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }} className="header-main-container">
         <header className="mission-header">
          <GoGoal className="mission-icon" />
          <h2 className="mission-title">Our Mission & Vision</h2>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // viewport={{ once: true }}
          className="main-mission-verse"
        >
          <p className="mission-verse">
            “But seek first the kingdom of God and His righteousness, and all these things shall be added to you.”
          </p>
           <span className="verse-reference">– Matthew 6:33</span>
        </motion.div>
       </motion.div>

        <div className="mission-grid">
          {missionItems.map((item, index) => (
            <motion.div
               key={index}
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
    viewport={{ amount: 0.3, once: false }}
              className="mission-card"
            >
              <div className="mission-card-icon">
                <item.icon />
              </div>
              <h3 className="mission-card-title">{item.title}</h3>
              <p className="mission-card-text">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
</div>
    </section>
  );
}
