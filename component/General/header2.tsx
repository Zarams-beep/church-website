"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import HeaderBarLinks from "./headerLinks";


const HeaderBar2 = () => {
  const [isSticky, setSticky] = useState(false);
  const [is580, setis580] = useState(false);

 

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setSticky(scrollTop > 0); // sticks immediately when scrolling
    };

    const updateWindowWidth = () => {
      setis580(window.innerWidth <= 580);
    };

    updateWindowWidth();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <>
      <header className={`secondHeader ${isSticky ? "stickyIt" : ""}`}>
         <div className="container">

<div className="header-not-link-logo-container">
            <Link href="/" className="header-logo-container">
            <Image src="/Seekers_logo_colours_black_text.png" alt="Seekers logo" width={80} height={80} className="icon-header"/>
            <div>
              <h1>Seekers of His Kingdom</h1>
            </div>
          </Link>
</div>

          <section className="secondSection">
          {/* Desktop Navigation */}
          {!is580 && (
           <HeaderBarLinks/>
          )}
        </section>
         </div>
      </header>
    </>
  );
};

export default HeaderBar2;
