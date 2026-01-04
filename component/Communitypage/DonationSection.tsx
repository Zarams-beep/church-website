"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DonationSection() {
  return (
    <section className="donation-section">
      <div className="container">
        <motion.div
          className="donation-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Support the Mission</h2>
          <p>
            Your generosity helps us reach more lives, organize impactful
            events, and extend love to communities in need.
          </p>

          <div className="donation-actions">
            <Link href="/donate" className="donate-btn">
              Donate Now
            </Link>
            <Link href="/community/outreaches" className="secondary-btn">
              See Our Impact
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
