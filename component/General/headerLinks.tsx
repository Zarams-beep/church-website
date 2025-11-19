"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
interface HeaderType {
  id: number;
  name: string;
  path: string;
  protected?: boolean;
}

const HeaderBarLinks = () => {
  const pathname = usePathname();

 const links: HeaderType[] = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about-us" },
    { id: 3, name: "Semon", path: "/semon" },
    { id: 4, name: "Community", path: "/community" },
    { id: 5, name: "Contact", path: "/contact" },
    
  ];

  return(
    <div className="">
         <div className="navigatePages">
              {links.map((item) => (
                <Link
                  key={item.path}
                href={item.path}
                className={`nav-link ${pathname === item.path ? "active" : ""}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
    </div>
  )
}

export default HeaderBarLinks;