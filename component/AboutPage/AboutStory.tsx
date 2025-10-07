"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaBookReader } from "react-icons/fa";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface VideoType {
  year: string;
  title: string;
  description: string;
  videos: string[];
}

const milestones: VideoType[] = [
  {
    year: "2015",
    title: "A Vision is Born",
    description:
      "Our founder felt a call to create a space where seekers of Christ could worship freely and grow together.",
    videos: ["https://www.pexels.com/download/video/6860747/", "https://www.pexels.com/download/video/6860416/", "https://www.pexels.com/download/video/7220097/", "https://www.pexels.com/download/video/5501787/"],
  },
  {
    year: "2017",
    title: "First Gathering",
    description:
      "A small living-room meeting blossomed into a weekly fellowship that welcomed neighbors and friends.",
    videos: ["https://www.pexels.com/download/video/3253970/", "https://www.pexels.com/download/video/3373659/", "https://www.pexels.com/download/video/3202044/", "https://www.pexels.com/download/video/4880458/"],
  },
  {
    year: "2019",
    title: "First Outreach",
    description:
      "Community outreach programs began—feeding families, visiting hospitals, and serving our city.",
    videos: ["https://www.pexels.com/download/video/9484897/", "https://www.pexels.com/download/video/8889827/", "https://www.pexels.com/download/video/6646672/", "https://www.pexels.com/download/video/7171518/"],
  },
  {
    year: "2022",
    title: "A Place to Call Home",
    description:
      "We established our first permanent location, becoming a spiritual home for many across the region.",
    videos: ["https://www.pexels.com/download/video/4442892/", "https://www.pexels.com/download/video/2014792/", "https://www.pexels.com/download/video/4881632/","https://www.pexels.com/download/video/4783668/"],
  },
];

export default function AboutStory() {
  return (
    <section className="about-story-container " id="story">
      <div className="container">
        {/* Header Section */}
        <motion.div
          className="header-main-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <header className="mission-header">
            <FaBookReader className="mission-icon" />
            <h2 className="mission-title">Our Story</h2>
          </header>
          <p className="mission-verse">
            From a single prayer meeting to a thriving community, here’s how the
            journey of <span className="highlight">Seekers of His Kingdom</span>{" "}
            began and grew.
          </p>
        </motion.div>

        {/* Timeline Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="story-swiper"
        >
          {milestones.map((item, index) => (
            <SwiperSlide key={item.year}>
              <div className="alternating-container">
                <VideoStage {...item} reverse={index % 2 !== 0} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function VideoStage({
  year,
  title,
  description,
  videos,
  reverse,
}: {
  year: string;
  title: string;
  description: string;
  videos: string[];
  reverse: boolean;
}) {
  const [current, setCurrent] = useState(0);

  const handleVideoEnd = () => {
    if (current < videos.length - 1) {
      setCurrent((prev) => prev + 1); 
    } else {
      setCurrent(0); 
    }
  };

  return (
    <div
      className={`video-stage-container ${
        reverse ? "video-reverse-stage" : ""
      }`}
    >
      {/* Video Section */}
      <div className="video-section">
        <video
          key={videos[current]} // force re-render on change
          className="story-video"
          autoPlay
          muted
          controls
          onEnded={handleVideoEnd} // listen for end event
        >
          <source src={videos[current]} type="video/mp4" />
        </video>
      </div>

      {/* Text Section */}
      <div className="video-text-container">
        <h3>
          {year} – {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

