"use client";

import { motion } from "framer-motion";
// import { BiBible } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedSermon() {
  return (
    <section className="featured-sermon">
      <div className="container">
        <div className="mission-inner">
        <div className="sermon-sub-section">

          {/* Left Side (Text Details) */}
          <motion.div
            className="sermon-details"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="series-title">The Kingdom Life</h2>
            <p className="series-description">
              Discover what it truly means to live a life under the reign and rule of Christ. Join us on this journey through the gospel of Matthew.
            </p>

            <div className="sermon-cta">
              <Link href="/watch" className="btn btn-primary">Watch Now</Link>
              <Link href="/listen" className="btn btn-secondary">Listen</Link>
            </div>

            <motion.div
              className="sermon-preview"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <audio controls className="w-full">
                <source
                  src="https://cdn.freesound.org/displays/816/816977_5674468_wave_bw_M.png"
                  type="audio/mp3"
                />
                Your browser does not support the audio element.
              </audio>
            </motion.div>
          </motion.div>

          {/* Right Side (Image) */}
          <motion.div
            className="sermon-thumbnail"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1517837016564-bfc3ffd67455?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Current Series Thumbnail"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full h-auto"
              priority
            />
          </motion.div>

        </div>
      </div>
      </div>
    </section>
  );
}
