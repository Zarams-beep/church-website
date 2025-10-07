"use client";

import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaPrayingHands,
  FaMusic,
  FaUsers,
  FaBroadcastTower,
} from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";

const ministries = [
  {
    title: "Worship Team",
    description:
      "Leading the congregation into heartfelt worship through music and praise.",
    icon: <FaMusic className="depart-icon" />,
  },
  {
    title: "Prayer Unit",
    description:
      "Standing in the gap for the church, the nation, and every seeker of His Kingdom.",
    icon: <FaPrayingHands className="depart-icon" />,
  },
  {
    title: "Outreach Ministry",
    description:
      "Taking Christ’s love beyond the walls through community service and evangelism.",
    icon: <FaHandsHelping className="depart-icon" />,
  },
  {
    title: "Media & Tech Team",
    description:
      "Capturing moments and spreading the message through digital excellence.",
    icon: <FaBroadcastTower className="depart-icon" />,
  },
  {
    title: "Ushering & Protocol",
    description:
      "Ensuring order, hospitality, and a welcoming atmosphere during services.",
    icon: <FaUsers className="depart-icon" />,
  },
];

export default function DepartmentsSection() {
  return (
    <section className="departments-section" id="ministries">
      <div className="container">
        {/* Header */}
        <motion.div
          className="header-main-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <header className="mission-header">
            <HiUserGroup className="mission-icon" />
            <h2 className="mission-title">Departments & Ministries</h2>
          </header>
          <p className="mission-verse">
            Every hand plays a part in building the body of Christ. Discover the
            heart behind our ministries.
          </p>
        </motion.div>

        {/* Ministry Cards */}
        <div className="departments-grid">
          {ministries.map((dept, index) => (
            <motion.div
              key={index}
              className="department-card"
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
              <div className="department-icon">{dept.icon}</div>
              <div className="sub-depart-card">
                <h3 className="department-name">{dept.title}</h3>
                <p className="department-description">{dept.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
