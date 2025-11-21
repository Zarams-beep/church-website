"use client";

import { motion } from "framer-motion";
import { RiUserCommunityFill } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";

interface CommunityAlbumProps {
  title: string;
  links: string;
}

const communityTitle: CommunityAlbumProps[] = [
  { title: "Retreats", links: "/community/retreats" },
  { title: "Fellowships", links: "/community/fellowships" },
  { title: "Conferences", links: "/community/conferences" },
  { title: "Workshops", links: "/community/workshops" },
  { title: "Outreaches", links: "/community/outreaches" },
  { title: "Celebrations", links: "/community/celebrations" },
];

export default function CommunityAlbum() {
  const [search, setSearch] = useState("");

  const filteredCommunity = communityTitle.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="community-album-container">
      <div className="container">
        <div className="sub-community-album-container">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="header-main-container"
          >
            <header className="mission-header">
              <RiUserCommunityFill className="mission-icon" />
              <h2 className="mission-title">Community Album</h2>
            </header>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="main-mission-verse"
            >
              <p className="mission-verse">
                “How good and pleasant it is when God’s people live together in
                unity.”
              </p>
              <span className="verse-reference">– Psalm 133:1</span>
            </motion.div>
          </motion.div>

          {/* SEARCH BAR */}
          <div className="community-search-wrapper my-8">
            <input
              type="text"
              placeholder="Search community events..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="community-search-input"
            />
          </div>

          {/* GRID */}
          <div className="community-album-grid">
            {filteredCommunity.length > 0 ? (
              filteredCommunity.map((item, index) => (
                <motion.div
                  key={index}
                  className="community-album-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Link href={item.links}>{item.title}</Link>
                </motion.div>
              ))
            ) : (
              <p className="text-center col-span-full text-sm opacity-60">
                No results found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
