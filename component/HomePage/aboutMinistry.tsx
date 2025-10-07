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
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Our Ministry Team"
            width={600}
            height={400}
            className="ministry-1"
          />
          <Image
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Our Ministry Team"
            width={600}
            height={400}
            className="ministry-2"
          />
          <Image
            src="https://images.unsplash.com/photo-1547382002-b908c9367d83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D"
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
