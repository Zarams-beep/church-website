"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState, useEffect } from "react";
import { ContactUsFormData } from "@/types/auth";
import { contactUsSchema } from "@/features/contactSchema";
import Link from "next/link";
import Image from "next/image";
import "@/styles/contact.css";

export default function FormContact() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<ContactUsFormData>({
    resolver: zodResolver(contactUsSchema),
    mode: "onSubmit",
  });

  const watchedFields = watch();
  const allFieldsFilled = Object.values(watchedFields).every(
    (value) => value !== undefined && value !== ""
  );

  useEffect(() => {
    if (allFieldsFilled) {
      setSuccessMessage(null);
      setErrorMessage(null);
    }
  }, [watchedFields]);

  const onSubmit = async (data: ContactUsFormData) => {
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      // 🔹 Placeholder for future Nodemailer API call
      setSuccessMessage("Your message has been sent successfully!");
      reset();
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contactUs-form-section">
      <div className="container">

        {/* Left Side */}
        <div className="left-side-container">
          <header>
            <h6>Get in Touch</h6>
            <h1>Let's Chat, Reach Out to Us</h1>
            <p>
              Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
            </p>
          </header>

          <form className="left-side-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="left-side-form-sub">
              {/* First Name */}
              <div className="contactUs-input">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  {...register("firstName")}
                  placeholder="First Name"
                  className={`${errors.firstName ? "error-red-border" : "error-gray-border"}`}
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </div>

              {/* Last Name */}
              <div className="contactUs-input">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  {...register("lastName")}
                  placeholder="Last Name"
                  className={`${errors.lastName ? "error-red-border" : "error-gray-border"}`}
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
              </div>

              {/* Email */}
              <div className="contactUs-input">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email"
                  className={`${errors.email ? "error-red-border" : "error-gray-border"}`}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              {/* Phone Number */}
              <div className="contactUs-input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  id="phoneNumber"
                  {...register("phoneNumber")}
                  placeholder="Enter your phone number"
                  className={`${errors.phoneNumber ? "error-red-border" : "error-gray-border"}`}
                />
                {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
              </div>

              {/* Subject */}
              <div className="contactUs-select">
                <label>Select Subject</label>
                <div className="contactUs-subject">
                  {["General", "Support", "Comment", "Suggestion"].map((value) => (
                    <label key={value}>
                      <input type="radio" value={value} {...register("subject")} />
                      {value}
                    </label>
                  ))}
                </div>
                {errors.subject && <p>{errors.subject.message}</p>}
              </div>

              {/* Message */}
              <div className="contactUs-message">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder="Enter your message"
                  className={`${errors.message ? "error-red-border" : "error-gray-border"}`}
                />
                {errors.message && <p>{errors.message.message}</p>}
              </div>
            </div>

            {/* Feedback */}
            {successMessage && <p className="success-text">{successMessage}</p>}
            {errorMessage && <p className="error-text">{errorMessage}</p>}

            {/* Submit */}
            <div className="contactUs-submit-container">
              <button
                className="contact-btn"
                type="submit"
                disabled={loading || !allFieldsFilled}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Right Side */}
        <div className="contact-right-side">
          <div className="right-side-image">
            <Image
              src="/SOHK 015.JPG"
              alt="SOHK Image"
              width={400}
              height={400}
              quality={100}
            />
          </div>

          <div className="right-side-content">
            <div className="right-side-sub">
              {/* Email */}
              <div className="email">
                <button aria-label="email">
                  <MdOutlineMailOutline className="email-icon" />
                </button>
                <div>
                  <h6>Email</h6>
                  <Link href="mailto:seekersofhiskingdomglobal@gmail.com">
                    seekersofhiskingdom@gmail.com
                  </Link>
                </div>
              </div>

              {/* Phone */}
              <div className="email">
                <button aria-label="phone">
                  <FaPhoneVolume className="email-icon" />
                </button>
                <div>
                  <h6>Phone</h6>
                  <Link href="tel:+234123456789">+234 123 456 789</Link>
                </div>
              </div>

              {/* Location */}
              <div className="email">
                <button aria-label="location">
                  <FaLocationDot className="email-icon" />
                </button>
                <div>
                  <h6>Location</h6>
                  <Link
                    href="https://www.google.com/maps/place/Victoria+Island,+Lagos,+Nigeria"
                    target="_blank"
                  >
                    Victoria Island, Lagos
                  </Link>
                </div>
              </div>
            </div>

             {/* Socials */}
              <div className="right-side-sub-2">
                <h6>Follow Us</h6>
                <div className="social-icons">
                  <Link href="https://facebook.com/placeholder" target="_blank" className="social-link">
                    <button><FaFacebookF className="link-icon"/></button>
                    <p>seekers_of_his_kingdom</p>
                  </Link>
                  <Link href="https://twitter.com/placeholder" target="_blank" className="social-link">
                  <button>
                    <FaTwitter className="link-icon"/></button>
                    <p>seekers_of_his_kingdom</p>
                  </Link>
                  <Link href="https://instagram.com/placeholder" target="_blank" className="social-link">
                  <button>
                    <FaInstagram className="link-icon"/></button>
                    <p>seekers_of_his_kingdom</p>
                  </Link>
                  <Link href="https://linkedin.com/placeholder" target="_blank" className="social-link">
                  <button>
                    <FaLinkedinIn className="link-icon"/></button>
                    <p>seekers_of_his_kingdom</p>
                  </Link>
                </div>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
}
