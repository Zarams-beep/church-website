'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBible } from "react-icons/fa";

export default function AboutMinistry() {

  return (
    <section className="about-ministry-container">
        <div className="container">
          <div className="mission-inner">
           <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="header-main-container"
        >
          <header className="mission-header">
            <FaBible className="mission-icon"/>
            <h2 className="mission-title">About the Ministry</h2>
          </header>
          <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="main-mission-verse"
        >
          <p className="mission-verse">
            Our story began with a simple mission
          </p>
          <Link
            href="/about-us/#story"
            className="btn-about-us"
          >
            Learn More About Us
          </Link></motion.div>
        </motion.div>
      <div className="about-ministry-img-container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='about-ministry-img'
        >
          <Image
            src="https://res.cloudinary.com/dhifpki0r/image/upload/v1761133987/SOHK_002_qjbl1v.jpg"
            alt="Our Ministry Team"
            width={600}
            height={400}
            className="ministry-1"
          />
          <Image
            src="https://res.cloudinary.com/dhifpki0r/image/upload/v1761133987/SOHK_004_atzo9i.jpg"
            alt="Our Ministry Team"
            width={600}
            height={400}
            className="ministry-2"
          />
          <Image
            src="https://res.cloudinary.com/dhifpki0r/image/upload/v1761133981/SOHK_003_ktskpr.jpg"
            alt="Our Ministry Team"
            width={600}
            height={400}
            className="ministry-3"
          />
        </motion.div>

     
      </div></div>
        </div>
    </section>
  );
}
