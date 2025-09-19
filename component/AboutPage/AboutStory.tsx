"use client";

import { motion } from "framer-motion";
import { FaBookReader } from "react-icons/fa";
export default function AboutStory() {
  const milestones = [
    {
      year: "2015",
      title: "A Vision is Born",
      description:
        "Our founder felt a call to create a space where seekers of Christ could worship freely and grow together.",
    },
    {
      year: "2017",
      title: "First Gathering",
      description:
        "A small living-room meeting blossomed into a weekly fellowship that welcomed neighbors and friends.",
    },
    {
      year: "2019",
      title: "First Outreach",
      description:
        "Community outreach programs began—feeding families, visiting hospitals, and serving our city.",
    },
    {
      year: "2022",
      title: "A Place to Call Home",
      description:
        "We established our first permanent location, becoming a spiritual home for many across the region.",
    },
  ];

  return (
    <section className="about-ministry-container" id="story">
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="header-main-container"
        >
          <header className="mission-header">
            <FaBookReader className="mission-icon"/>
            <h2 className="">
            Our Story
          </h2>
          </header>
                    <p className="">
            From a single prayer meeting to a thriving community, here’s how the
            journey of <span className="">Seekers of His Kingdom</span> began
            and grew.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-accent dark:border-dark-accent ml-4">
          {milestones.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <div className="absolute -left-[10px] top-1 w-5 h-5 rounded-full bg-accent dark:bg-dark-accent border-4 border-softWhite dark:border-dark-background" />
              <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-dark-primary">
                {item.year} – {item.title}
              </h3>
              <p className="mt-2 text-text dark:text-dark-text font-scripture max-w-xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
