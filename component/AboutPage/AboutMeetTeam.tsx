"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect} from "react";
import { RiTeamLine } from "react-icons/ri";

interface TeamMember {
  name: string;
  title: string;
  department: string;
  image: string;
  summary: string;
  members: number;
  gallery: string[];
}

// MAIN DATA
const teamMembers: TeamMember[] = [
  {
    name: "Pastor Daniel Okeke",
    title: "Founder & Lead Pastor",
    department: "Leadership",
    image: "https://res.cloudinary.com/dhifpki0r/image/upload/v1761767825/SOHK_031_zoioyp.jpg",
    summary:
      "Pastor Daniel founded Seekers of His Kingdom in 2015 with a burning desire to see believers live in purpose and power. His leadership continues to shape the ministry’s culture of worship, growth, and service.",
    members: 1,
    gallery: ["https://res.cloudinary.com/dhifpki0r/image/upload/v1761767237/SOHK_036_hrweoj.jpg", "https://res.cloudinary.com/dhifpki0r/image/upload/v1761767237/SOHK_036_hrweoj.jpg"],
  },
  {
    name: "Sister Mary Ibe",
    title: "Assistant Pastor",
    department: "Leadership",
    image: "https://res.cloudinary.com/dhifpki0r/image/upload/v1761767237/SOHK_036_hrweoj.jpg",
    summary:
      "A pillar of strength and compassion, she supports the vision and leads intercession, ensuring the spiritual growth of every member.",
    members: 1,
    gallery: ["https://res.cloudinary.com/dhifpki0r/image/upload/v1761767854/SOHK_001_qxnzan.jpg"],
  },
  {
    name: "Brother Samuel Eze",
    title: "Head of Finance",
    department: "Finance",
    image: "https://res.cloudinary.com/dhifpki0r/image/upload/v1761767859/SOHK_030_vbhhqd.jpg",
    summary:
      "Responsible for overseeing ministry finances and ensuring accountability, transparency, and stewardship over every resource.",
    members: 5,
    gallery: ["https://res.cloudinary.com/dhifpki0r/image/upload/v1761767859/SOHK_030_vbhhqd.jpg", "https://res.cloudinary.com/dhifpki0r/image/upload/v1761767859/SOHK_030_vbhhqd.jpg"],
  },
  {
    name: "Sister Grace Umeh",
    title: "Head of Treasury",
    department: "Finance",
    image: "https://res.cloudinary.com/dhifpki0r/image/upload/v1761767859/SOHK_030_vbhhqd.jpg",
    summary:
      "Manages treasury records and ensures all ministry funds are properly tracked and allocated with integrity.",
    members: 4,
    gallery: ["https://res.cloudinary.com/dhifpki0r/image/upload/v1761767859/SOHK_030_vbhhqd.jpg"],
  },
  {
    name: "Brother David Ojo",
    title: "Head of SGIT Unit",
    department: "SGIT",
    image: "https://res.cloudinary.com/dhifpki0r/image/upload/v1761134150/IMG_4703_vhfczx.jpg",
    summary:
      "SGIT (Seekers Growth & Impact Team) drives innovation, digital evangelism, and strategic growth within the ministry.",
    members: 12,
    gallery: ["https://res.cloudinary.com/dhifpki0r/image/upload/v1761134150/IMG_4703_vhfczx.jpg", "https://res.cloudinary.com/dhifpki0r/image/upload/v1761134169/outreach-2_jpearc.jpg"],
  },
  {
    name: "Sister Faith Olamide",
    title: "Head of SMAT Unit",
    department: "SMAT",
    image: "https://images.unsplash.com/photo-1630467267476-c67b34ffc837?w=600&auto=format&fit=crop&q=60",
    summary:
      "SMAT (Seekers Media and Tech) captures every moment through creativity, design, and technology for the Kingdom.",
    members: 8,
    gallery: ["https://images.unsplash.com/photo-1605460375648-278bcbd579a6?w=600&auto=format&fit=crop&q=60"],
  },
  {
    name: "Brother Kingsley Obi",
    title: "Head of Admin Unit",
    department: "Admin",
    image: "https://res.cloudinary.com/dhifpki0r/image/upload/v1761805748/SOHK_038_xqndee.jpg",
    summary:
      "Oversees administrative operations, ensuring all ministry activities are coordinated smoothly and effectively.",
    members: 6,
    gallery: ["https://res.cloudinary.com/dhifpki0r/image/upload/v1761767162/SOHK_001_jmowp7.jpg"],
  },
];

export default function TeamSection() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  useEffect(() => {
  if (selected) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [selected]);

  return (
    <section className="team-section" id="team">
      <div className="container">
        {/* Header */}
        <motion.div
          className="header-main-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <header className="mission-header">
            <RiTeamLine className="mission-icon"/>
            <h2 className="mission-title">Meet the Team</h2>
          </header>
          <p className="mission-verse">
            Every vision thrives on people who serve faithfully. Meet the
            dedicated leaders and heads who make Seekers of His Kingdom what it
            is today.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(member)}
            >
              <div className="team-img-wrapper">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title">{member.title}</p>
                <p className="team-department">{member.department}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="team-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="team-modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
<div className="sub-content-modal">
<Image
                  src={selected.image}
                  alt={selected.name}
                  width={400}
                  height={400}
                  className="modal-image"
                />
                <div className="
                ">
<div className="modal-info">
                  <h3>{selected.name}</h3>
                  <p className="modal-title">{selected.title}</p>
                  <p className="modal-summary">{selected.summary}</p>
                  </div>
<p className="modal-members">
                    👥 <strong>{selected.members}</strong> active members
                  </p>

                  <div className="modal-gallery">
                    {selected.gallery.map((img, i) => (
                      <Image
                        key={i}
                        src={img}
                        alt={`${selected.name} work ${i + 1}`}
                        width={150}
                        height={150}
                        className="gallery-image"
                      />
                    ))}
                  </div>
              </div> 
</div>
                
                
                  
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
