"use client"

import React, { useContext } from "react";
import "@/styles/header.css";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
const { theme, setTheme } = useTheme();
  return (
    <div className="toggle-container" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <div className='icon'>🔆</div>
      <div className='icon'>🌙</div>
      <div
        className='ball'
        style={theme === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;