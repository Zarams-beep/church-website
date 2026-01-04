"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "@/styles/floatingWhatsapp.css"

interface WhatsAppContact {
  name: string;
  phone: string;
  message?: string;
}

const contacts: WhatsAppContact[] = [
  {
    name: "Pastor John",
    phone: "2348012345678", // Format: country code + number (no + or spaces)
    message: "Hello, I would like to know more about the church",
  },
  {
    name: "Church Admin",
    phone: "2348087654321",
    message: "Hi, I need assistance",
  },
];

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = (contact: WhatsAppContact) => {
    const message = encodeURIComponent(contact.message || "Hello!");
    const url = `https://wa.me/${contact.phone}?text=${message}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="floating-whatsapp-container">
        <button
          className="floating-whatsapp-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="WhatsApp"
        >
          {isOpen ? (
            <IoClose className="whatsapp-icon" />
          ) : (
            <FaWhatsapp className="whatsapp-icon" />
          )}
        </button>

        {/* Contact List */}
        {isOpen && (
          <div className="whatsapp-contact-list">
            <div className="contact-list-header">
              <h4>Contact Us on WhatsApp</h4>
            </div>
            {contacts.map((contact, index) => (
              <button
                key={index}
                className="contact-item"
                onClick={() => handleWhatsAppClick(contact)}
              >
                <div className="contact-icon">
                  <FaWhatsapp />
                </div>
                <div className="contact-info">
                  <p className="contact-name">{contact.name}</p>
                  <p className="contact-status">Click to chat</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="whatsapp-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}