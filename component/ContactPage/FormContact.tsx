"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
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

  // Watch all fields
  const watchedFields = watch();

  // Determine if all fields are filled
  const allFieldsFilled = Object.values(watchedFields).every(
    (value) => value !== undefined && value !== ""
  );

  // Clear messages when user starts typing again
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
      // const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });

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
        <div className="left-side-container ">
          <header>
            <h6 className="">Get in Touch</h6>
            <h1 className="">Let's Chat, Reach Out to Us</h1>
            <p className="">
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
                {["General", "Report", "Comment", "Suggestion"].map((value) => (
                  <label key={value} className="">
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
              className="rounded-xl object-cover"
            />
          </div>

          <div className="right-side-content space-y-6">
            {/* Email */}
            <div className="email flex items-center gap-3">
              <button aria-label="email" className="p-2 rounded-full bg-gray-100">
                <MdOutlineMailOutline className="text-xl" />
              </button>
              <div>
                <h6>Email</h6>
                <Link href="mailto:seekersofhiskingdomglobal@gmail.com" className="text-blue-600 hover:underline">
                  seekersofhiskingdomglobal@gmail.com
                </Link>
              </div>
            </div>

            {/* Phone */}
            <div className="phone flex items-center gap-3">
              <button aria-label="phone" className="p-2 rounded-full bg-gray-100">
                <FaPhoneVolume className="text-xl" />
              </button>
              <div>
                <h6>Phone</h6>
                <Link href="tel:+234123456789" className="text-blue-600 hover:underline">
                  +234 123 456 789
                </Link>
              </div>
            </div>

            {/* Location */}
            <div className="address flex items-center gap-3">
              <button aria-label="location" className="p-2 rounded-full bg-gray-100">
                <FaLocationDot className="text-xl" />
              </button>
              <div>
                <h6>Location</h6>
                <Link
                  href="https://www.google.com/maps/place/Victoria+Island,+Lagos,+Nigeria"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Victoria Island, Lagos
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
