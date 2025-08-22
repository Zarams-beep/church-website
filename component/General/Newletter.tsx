"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RiDoubleQuotesR } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

export const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type SubscribeSchema = z.infer<typeof subscribeSchema>;

export default function Newletter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<SubscribeSchema>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = (data: SubscribeSchema) => {
    console.log("Subscribed with:", data.email);
    reset();
  };

  return (
    <motion.div
      className="newsletter-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="mission-inner">
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
        >
          <RiDoubleQuotesR className="quote" />
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="newsletter-heading">Subscribe to get the Latest News</h2>
          <p className="newsletter-description">
            Don’t miss out on our latest news, updates, tips and special offers
          </p>
        </motion.header>

        <motion.section
          className="form-section"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="newsletter-subscribe">
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <motion.button
              type="submit"
              className="newsletter-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>

          <AnimatePresence>
            {errors.email && (
              <motion.p
                key="error"
                className="newsletter-error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {errors.email.message}
              </motion.p>
            )}

            {isSubmitSuccessful && (
              <motion.p
                key="success"
                className="newsletter-success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                Thanks for subscribing! 🎉
              </motion.p>
            )}
          </AnimatePresence>
        </motion.section>
      </div>
      </div>
    </motion.div>
  );
}
