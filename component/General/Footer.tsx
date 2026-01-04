"use client";
import "@/styles/footer.css";
import Image from "next/image";
import {
  TiSocialLinkedinCircular,
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { BiCopyright } from "react-icons/bi";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Footer Links */}
<div className="container">
        <div className="footer-1">
        <section className="footer-section">
          <div className="img-container-footer">
            <Image
            src="/Seekers_logo_colours.png"
            alt="Seekers_logo_colours"
            width={100}
            height={100}
            className="image-footer"
          />
          </div>
        </section>

        <section className="footer-section-1">
          <h5 className="footer-section-title">About</h5>
          <Link href="#">Menu</Link>
          <Link href="#">Features</Link>
          <Link href="#">News & Blogs</Link>
          <Link href="#">Help & Support</Link>
        </section>

        <section className="footer-section-1">
          <h5 className="footer-section-title">Company</h5>
          <Link href="#">How we work</Link>
          <Link href="#">Terms of service</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">FAQ</Link>
        </section>

        <section className="footer-section-1">
          <h5 className="footer-section-title">Contact Us</h5>
          <a href="#" className="location">
           Virtual
          </a>
          <a href="tel:+23481502332712">+23481502332712</a>
          <a href="mailto:seekersofhiskingdomglobal@gmail.com">seekersofhiskingdomglobal@gmail.com</a>
        </section>
      </div>

      <div className="footer-2">
        <div className="footer-sub-2">
          <div className="footer-icons">
            <a href="https://instagram.com/seekersofhiskingdom" target="_blank">
              <TiSocialInstagramCircular className="footer-icon" />
            </a>
            <a href="https://twitter.com/seekersfamily_" target="_blank">
              <TiSocialTwitterCircular className="footer-icon" />
            </a>
          </div>
<div className="main-copyright">
            <p className="copyright"><BiCopyright className="footer-icon"/>
              Copyright 2025, All Rights Reserved by{" "}
              </p>
              <span>Seekers of the Kingdom</span></div>
        </div>
      </div>
</div>
    </footer>
  );
};

export default Footer;
