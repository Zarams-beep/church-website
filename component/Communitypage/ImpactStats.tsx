"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, label: "Members", suffix: "+" },
  { value: 120, label: "Events", suffix: "+" },
  { value: 14, label: "Cities Impacted", suffix: "" },
  { value: 10, label: "Years of Growth", suffix: "+" },
];

// Custom hook for counting animation
function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
}

export default function ImpactStats() {
  return (
    <section className="impact-stats-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="impact-title"
        >
          Our Impact So Far
        </motion.h2>

        <div className="impact-grid">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(stat.value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      className="impact-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <h3>
        {count}
        {stat.suffix}
      </h3>
      <p>{stat.label}</p>
    </motion.div>
  );
}