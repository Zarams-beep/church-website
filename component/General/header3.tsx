"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import "@/styles/header.css";
import { IoTodayOutline } from "react-icons/io5";
interface HeaderType {
  id: number;
  name: string;
  path: string;
  protected?: boolean;
}

const HeaderBar3 = () => {
  const pathname = usePathname();
  const [isSticky, setSticky] = useState(false);
  const [is580, setis580] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const links: HeaderType[] = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about-us" },
    { id: 3, name: "Semon", path: "/semon" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Community", path: "/community" },
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
  const toggleContactMenu = () => setIsContactOpen((prev) => !prev);

  return (
    <>
      <header className={`header-bar-3 ${isSticky ? "stickyIt" : ""}`}>
        <div className="header-logo-container">
          <Image
            src="/Seekers_logo_colours_black_text.png"
            alt="Seekers Logo"
            width={80}
            height={80}
            className="icon-header"
            priority
          />
          <h1>Seekers of His Kingdom</h1>
        </div>

        {is580 && (
          <IconButton onClick={() => setDrawerOpen(true)}>
            <IoMdMenu className="menu-icon" />
          </IconButton>
        )}
      </header>

      {/* Mobile Drawer */}
      {is580 && (
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <div className="drawer-container">
            <div className="icon-drawer-container">
              <IconButton onClick={() => setDrawerOpen(false)}>
                <RxCross2 className="menu-icon" />
              </IconButton>
            </div>

            <div className="navigatePages">
              {links.map(({ path, name }) => (
                <Link
                  key={path}
                  href={path}
                  className={`nav-link ${pathname === path ? "active" : ""}`}
                  onClick={() => setDrawerOpen(false)}
                >
                  {name}
                </Link>
              ))}
              <div className="linkContact" onClick={toggleContactMenu}>
                <div className="contact-flex">
                  <p>Contact Details</p>
                  <p className="arrowContact">
                    {isContactOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </p>
                </div>
              </div>
              {isContactOpen && (
                <div className="subMenu">
                  <div className="phoneNumber">
                    <MdPhonelinkRing className="iconStyle" />
                    <div>
                      <p>
                        <Link href="tel:+1234567890">+1 (234) 567 890</Link>
                      </p>
                      <p>
                        <Link href="tel:+1234567890">+1 (234) 567 890</Link>
                      </p>
                    </div>
                  </div>

                  <div className="mail">
                    <BsEnvelopeAt className="iconStyle" />
                    <div>
                      <p>
                        <Link href="mailto:youremail@example.com">
                          youremail@example.com
                        </Link>
                      </p>
                      <p>
                        <Link href="mailto:youremail@example.com">
                          youremail@example.com
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="location">
                    <GrLocation className="iconStyle" />
                    <p className="address">
                      3742 Graystone Lakes,
                      <br />
                      Macon GA Georgia, GA 307
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="drawer-header-container-appoint">
              <div className="appointContainer">
                <button>
                  <IoTodayOutline />
                  <span>Make An Appointment</span>
                </button>
              </div>
            </div>

            <div className="socials-drawer">
              {[
                SlSocialFacebook,
                SiWhatsapp,
                SlSocialTwitter,
                SlSocialYoutube,
                SlSocialLinkedin,
                SlSocialInstagram,
              ].map((Icon, i) => (
                <button key={i} className="mr-2">
                  <Link href="#">
                    <Icon />
                  </Link>
                </button>
              ))}
            </div>
          </div>
        </Drawer>
      )}
    </>
  );
};

export default HeaderBar3;
