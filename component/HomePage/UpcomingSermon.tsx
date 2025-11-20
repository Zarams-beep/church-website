"use client";

import { motion } from "framer-motion";
import { CiMapPin, CiMicrophoneOn, CiStreamOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function UpcomingSermon() {
  return (
    <section className="upcoming-section">
      <div className="container">
        <div className="mission-inner">
        {/* Section Header Animation */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.3, once: false }}
          className="upcoming-header"
        >
          <h6>Upcoming Sermon</h6>
          <h2 className="mission-title">
            Join us and become part of something great
          </h2>
        </motion.div>

        <div className="main-upcoming-sermon-section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
            variants={{
              hidden: {},
              visible: {},
            }}
            viewport={{ amount: 0.3, once: false }}
            className="upcoming-sermon-section"
          >
            {/* Left Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.3, once: false }}
              className="upcoming-sermon-section-1"
            >
              <header className="header-1">
                <motion.p whileHover={{ scale: 1.1 }}>20</motion.p>
                <motion.p whileHover={{ scale: 1.1 }}>JULY</motion.p>
              </header>

              <header className="header-2">
                <motion.h6
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ amount: 0.3, once: false }}
                >
                  Upcoming Event
                </motion.h6>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  WATCH AND LISTEN TO OUR SERMONS
                </motion.h3>
               
              </header>

              <div className="upcoming-content-section">
                {[
                  {
                    icon: <FaRegClock />,
                    text: "Friday 23:39 IST Saturday 11:20 ISD",
                  },
                  {
                    icon: <CiMapPin />,
                    text: "Victoria Island",
                  },
                  {
                    icon: <CiMicrophoneOn />,
                    text: "Pastor Ide",
                  },
                  {
                    icon: <CiStreamOn />,
                    text: (
                      <Link href="https://streaming-now.com">
                        You can stream online
                      </Link>
                    ),
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="upcoming-content-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.2 }}
                    viewport={{ amount: 0.3, once: false }}
                  >
                    <button>{item.icon}</button>
                    <p>{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Block: Image */}
            <motion.div
              className="upcoming-sermon-section-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ amount: 0.3, once: false }}
            >
              <Image
                src="https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D"
                alt="upcoming sermon"
                width={500}
                height={500}
                quality={100}
                className=""
              />
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="btn-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ amount: 0.3, once: false }}
          >
            <button className="">
              View all Sermons <IoIosArrowRoundForward />
            </button>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}
