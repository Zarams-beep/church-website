"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { IoTodayOutline } from "react-icons/io5";
interface HeaderType {
  id: number;
  name: string;
  path: string;
  protected?: boolean;
}

const HeaderBar2 = () => {
  const pathname = usePathname();
  const [isSticky, setSticky] = useState(false);
  const [is580, setis580] = useState(false);

  const links: HeaderType[] = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about-us" },
    { id: 3, name: "Semon", path: "/semon" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Outreach", path: "/outreach" },
  ];

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
        <section className="secondSection">

          {/* Desktop Navigation */}
          {!is580 && (
            <div className="navigatePages">
              {links.map((item) => (
                <Link
                  key={item.path}
                href={item.path}
                className={`nav-link ${pathname === item.path ? "active" : ""}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          {/* Desktop Appointment Button */}
       
            <div className="header-container-appoint">
              <div className="appointContainer">
                <button>
                  <IoTodayOutline />
                  <span>Make An Appointment</span>
                </button>
              </div>

            </div>
        </section>
      </header>
    </>
  );
};

export default HeaderBar2;
