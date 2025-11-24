"use client";

import { motion } from "framer-motion";
import { RiUserCommunityFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CommunityItem } from "@/types/communityItems";

const categories = [
  "Retreats",
  "Fellowships",
  "Conferences",
  "Workshops",
  "Outreaches",
  "Celebrations",
] as const;

export default function CommunityAlbum() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [communityItems, setCommunityItems] = useState<CommunityItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch items when category is selected
  useEffect(() => {
    if (!selectedCategory) {
      setCommunityItems([]);
      return;
    }

    async function fetchCommunityItems() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`/community/api?category=${selectedCategory}`);
        
        if (!res.ok) {
          throw new Error("Failed to fetch community items");
        }
        
        const data = await res.json();
        setCommunityItems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Failed to fetch community items:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCommunityItems();
  }, [selectedCategory]);

  // Filter items based on search
  const filteredItems = communityItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
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
                "How good and pleasant it is when God's people live together in
                unity."
              </p>
              <span className="verse-reference">– Psalm 133:1</span>
            </motion.div>
          </motion.div>

          {/* CATEGORY BUTTONS */}
          <div className="community-album-grid">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`community-album-card ${
                  selectedCategory === category ? "active" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedCategory(category)}
              >
                <span className="font-semibold text-lg">{category}</span>
              </motion.button>
            ))}
          </div>

        
          {selectedCategory && (
            <>
              {/* BACK BUTTON */}
              <div className="back-wrapper">
              <h3 className="">{selectedCategory}</h3>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearch("");
                  }}
                  className=""
                >
                  ← Back to Categories
                </button>

              </div>

              {/* SEARCH BAR */}
              <div className="community-search-wrapper">
                <input
                  type="text"
                  placeholder="Search in this category..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="community-search-input"
                />
              </div>

              {/* LOADING STATE */}
              {loading && (
                <div className="loading-state">
                  <p>Loading {selectedCategory.toLowerCase()}...</p>
                </div>
              )}

              {/* ERROR STATE */}
              {error && (
                <div className="error-state">
                  <p>{error}</p>
                </div>
              )}

              {/* ITEMS GRID */}
              {!loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                      <motion.div
                        key={item._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={`/community/${selectedCategory.toLowerCase()}/${item.slug}`}
                          className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-lg">
                              {item.title}
                            </h4>
                            <p className="text-sm opacity-70 mt-2 line-clamp-2">
                              {item.description}
                            </p>
                            <p className="text-xs opacity-50 mt-3">
                              {new Date(item.date).toLocaleDateString()}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))
                  ) : (
                    <p className="col-span-full text-center text-sm opacity-60">
                      No items found
                    </p>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}