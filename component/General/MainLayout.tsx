"use client";
import React, { useEffect, useState } from "react";
import SplashScreen from "./Splash";
import HeaderBar from "./header1";
import Footer from "./Footer";
import HeaderBar3 from "./header3";

interface Props {
  children: React.ReactNode;
}

export default function MainLayoutSection({ children }: Props) {
  const [loading, setLoading] = useState(true);
  const [is580, setIs580] = useState(false);

  // Splash screen timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Window resize handling
  useEffect(() => {
    const updateWindowWidth = () => {
      setIs580(window.innerWidth <= 580);
    };

    updateWindowWidth(); // Run on first mount
    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  return (
     <>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          {is580 ? <HeaderBar3 /> : <HeaderBar />}
          {children}
          <Footer />
        </>
      )}
     </>
  );
}
