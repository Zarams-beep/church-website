"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LiaSeedlingSolid } from "react-icons/lia";

export type SeedStage = {
  images: string[];
  note: string;
  description: string;
};

const seedJourney:SeedStage[] = [
  {
    images: [
      "https://images.unsplash.com/photo-1543525238-54e3d131f7ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1552600552-4d7c157e7db8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    note: "Planted in Faith",
    description:
      "Every journey begins with the seed of the Word. It's where hearts are softened, and God begins a new thing.",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1469228252629-cbe7cb7db2c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    note: "Rooted in the Word",
    description:
      "Discipleship takes root through Bible study, prayer, and fellowship, anchoring lives in Christ.",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1485634476346-5c642f4b6722?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1526746323784-6bc814d79273?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    note: "Watered Through Worship",
    description:
      "In worship and surrender, we grow in grace, intimacy, and obedience to God’s will.",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1518281579100-d51bcf505b0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1520642413789-2bd6770d59e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxjaHVyY2h8ZW58MHx8MHx8fDA%3D",
    ],
    note: "Bearing Fruit",
    description:
      "As transformation happens, lives reflect Christ — marked by love, patience, humility, and joy.",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1532190795157-3f983fb7fa3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxjaHVyY2h8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1555817128-342e1c8b3101?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxjaHVyY2h8ZW58MHx8MHx8fDA%3D",
    ],
    note: "Serving with Purpose",
    description:
      "Now fully grown, we step out to serve, in our families, communities, and the world, as vessels of His glory.",
  },
];

export default function FromSeedToService() {
  return (
    <section className="fifth-container">
      <div className="container">
        <div className="mission-inner">
      <motion.div  initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }} className="header-main-container">
            <header className="mission-header">
        <LiaSeedlingSolid className="mission-icon" />
        <h2 className="mission-title">From Seed to Service</h2></header>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // viewport={{ once: true }}
          className="main-mission-verse"
        >
          <p className="mission-verse">
          Every great work begins with a small seed, planted in faith, nurtured in truth, and grown into a life of purpose.
        </p>
      </motion.div>
      </motion.div>
      <div className="alternating-container">
        {seedJourney.map((item, index) => (
          <SeedStageBlock
            key={index}
            {...item}
            reverse={index % 2 !== 0}
          />
        ))}
      </div></div>
      </div>
    </section>
  );
}

function SeedStageBlock({
  images,
  note,
  description,
  reverse,
}: {
  images: string[];
  note: string;
  description: string;
  reverse: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const isMultiple = images.length > 1;

  return (
    <motion.div
      className={`how-help-container ${reverse ? "reverse-help" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      // viewport={{ amount: 0.3 }}
    >
      <div className="how-help-card">
        <Image
          src={images[current]}
          alt={note}
          fill
          className="help-image"
          priority
        />
        {isMultiple && (
          <div className="arrow-help">
            <button
              onClick={() =>
                setCurrent((prev) => (prev - 1 + images.length) % images.length)
              }
              className="arrow-button"
              aria-label="Previous Image"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
              className="arrow-button"
              aria-label="Next Image"
            >
              <IoIosArrowForward />
            </button>
          </div>
        )}
      </div>

      <div className="how-help-content">
        <h3 className="help-note">{note}</h3>
        <p className="help-description">{description}</p>
      </div>
    </motion.div>
  );
}
