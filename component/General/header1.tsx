"use client";
import { useState, useEffect } from "react";
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialYoutube,
  SlSocialTwitter,
  SlSocialFacebook,
} from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";
import { BsEnvelopeAt } from "react-icons/bs";
import { MdPhonelinkRing } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import "@/styles/header.css";
import HeaderBar2 from "./header2";
import Image from "next/image";
const HeaderBar = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [is992, setIs992] = useState(false);
  const [is580, setIs580] = useState(false);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.6]);

  useEffect(() => {
    const updateWindowWidth = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIs992(width <= 992);
      setIs580(width <= 580);
    };

    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <>
      <motion.header
        className="header-bar-1"
        style={{ opacity }}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container">
          <section className="section-header">
          <Link href="/" className="header-logo-container">
            <Image src="/Seekers_logo_colours_black_text.png" alt="Seekers logo" width={80} height={80} className="icon-header"/>
            <div>
              <h1>Seekers</h1>
              <h3>of His Kingdom</h3>
            </div>
          </Link>

{windowWidth !== null && (
  <motion.div
    className={`allContacts ${is580 ? "contactInvisible" : ""}`}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
   <div className="all-contact-main">
     <motion.div
      className="phoneNumber"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <MdPhonelinkRing className="icon-header-2" />
      <div className="divNumbers">
        <p>
          <Link href="tel:+1234567890">+1 (234) 567 890</Link>
        </p>
        <p>
          <Link href="tel:+1234567890">+1 (234) 567 890</Link>
        </p>
      </div>
    </motion.div>

    <motion.div
      className="mail"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <BsEnvelopeAt className="icon-header-2" />
      <div className="mailList">
        <Link href="mailto:seekersofhiskingdomglobal@gmail.com">seekersofhiskingdomglobal@gmail.com</Link>
        <Link href="mailto:seekersofhiskingdomglobal@gmail.com">seekersofhiskingdomglobal@gmail.com</Link>
        
      </div>
    </motion.div>

    <motion.div
      className="location"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
    >
      <GrLocation className="icon-header-2"/>
      <p className="address">
        3742 Graystone Lakes
      </p>
    </motion.div>
   </div>

    <motion.div
      className={`socials ${is992 ? "invisibleSocials" : ""}`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {[
        { icon: <SlSocialFacebook />, key: "facebook" },
        { icon: <SiWhatsapp />, key: "whatsapp" },
        { icon: <SlSocialTwitter />, key: "twitter1" },
        { icon: <SlSocialYoutube />, key: "youtube" },
        { icon: <SlSocialLinkedin />, key: "linkedin" },
        { icon: <SlSocialInstagram />, key: "https://www.instagram.com/seekersofhiskingdom/" },
      ].map(({ icon, key }, index) => (
        <motion.button
          key={key}
          className={`${key}`}
          initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.3, delay: index * 0.1 }}
       >
          <Link href="#">{icon}</Link>
        </motion.button>
      ))}
    </motion.div>
  </motion.div>
)}

        </section>
        </div>
      </motion.header>
      <HeaderBar2/>
    </>
  );
};
export default HeaderBar;
