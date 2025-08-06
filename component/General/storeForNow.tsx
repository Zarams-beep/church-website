"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

type Testimony = {
  id: number;
  name: string;
  title: string;
  comment: string;
  image: string;
};

const testimonies: Testimony[] = [
  {
    id: 1,
    name: "Adaeze Nwankwo",
    title: "Youth Leader",
    comment:
      "Attending this bible study has transformed my life. Every message feels like it was crafted just for me. God is really present here.",
    image:
      "https://images.unsplash.com/photo-1543525238-54e3d131f7ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "David Ojo",
    title: "Choir Director",
    comment:
      "There’s a strong sense of family and purpose here. The worship, the Word—it’s all so uplifting and Spirit-filled!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Chinonso Umeh",
    title: "Prayer Coordinator",
    comment:
      "This ministry taught me how to hear from God and walk in His will. It’s a place of spiritual depth and growth.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Esther Abiola",
    title: "Bible Study Host",
    comment:
      "Every Sunday at 8am, our community gathers, and it’s like heaven touches earth. The Bible comes alive and hearts are stirred toward God.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Samuel Onuoha",
    title: "Community Volunteer",
    comment:
      "It’s not just church—it’s family. We learn together, serve together, and grow together in Christ. I now understand what it means to be the body of Christ.",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Kemi Adebayo",
    title: "New Member",
    comment:
      "I came seeking answers and found Jesus. The teachings are clear, powerful, and rooted in Scripture. I now look forward to every Bible study.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    name: "Michael Okafor",
    title: "Small Group Leader",
    comment:
      "Leading a Bible group has been one of the most rewarding parts of my life. Watching others grow in their walk with God fills me with joy.",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328b6e8b?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    name: "Grace Eze",
    title: "Worshipper",
    comment:
      "There’s a sweet presence of God every time we gather. The Word, prayer, and fellowship have reignited my love for Jesus.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=60",
  }
];


function AutoplayPlugin(slider: any) {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => slider.next(), 5000);
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

const SixthHomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [AutoplayPlugin]
  );

  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Lives Transformed by Grace
        </h2>
        <p className="text-lg text-gray-600">
          Testimonies from members of Seekers of His Kingdom
        </p>
      </motion.div>

      <div ref={sliderRef} className="keen-slider max-w-4xl mx-auto px-4">
        {testimonies.map(({ id, name, title, comment, image }) => (
          <motion.div
            key={id}
            className="keen-slider__slide"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-100 rounded-2xl p-8 shadow-lg relative">
              <BiSolidQuoteAltLeft className="text-3xl text-purple-400 absolute top-4 left-4" />
              <p className="text-gray-700 text-base md:text-lg italic">
                “{comment}”
              </p>
              <BiSolidQuoteAltRight className="text-3xl text-purple-400 absolute bottom-4 right-4" />
              <div className="flex items-center justify-between mt-6">
                <div>
                  <h5 className="text-lg font-semibold text-purple-800">{name}</h5>
                  <span className="text-sm text-gray-500">{title}</span>
                </div>
                <Image
                  src={image}
                  alt={name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover border-2 border-purple-200"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="bg-purple-100 hover:bg-purple-200 p-2 rounded-full text-purple-800 shadow"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => instanceRef.current?.next()}
          className="bg-purple-100 hover:bg-purple-200 p-2 rounded-full text-purple-800 shadow"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default SixthHomePage;