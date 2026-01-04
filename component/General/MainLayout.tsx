"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "./Splash";
import HeaderBar2 from "./header2";
import Footer from "./Footer";
import HeaderBar3 from "./header3";
import FloatingWhatsApp from "./floatWhatapp";

interface Props {
  children: React.ReactNode;
}

export default function MainLayoutSection({ children }: Props) {
  const [loading, setLoading] = useState(true);
  const [is580, setIs580] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateWindowWidth = () => {
      setIs580(window.innerWidth <= 580);
    };

    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  // Check if current page is a community article page
  // This matches: /community/[category]/[slug]
  const communityArticle = pathname?.match(/\/community\/[^/]+\/[^/]+$/) !== null;

  // Debug - remove this after testing
  console.log('Current pathname:', pathname);
  console.log('Is community article:', communityArticle);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          {/* Only show header if NOT on community article page */}
          {!communityArticle && (is580 ? <HeaderBar3 /> : <HeaderBar2 />)}
          
          {children}
          
          {/* Only show footer if NOT on community article page */}
          {!communityArticle && <Footer />}
          
          <FloatingWhatsApp />
        </>
      )}
    </>
  );
}