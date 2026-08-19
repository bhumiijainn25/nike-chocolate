"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
     <div className="navbar-logo">
      <Image
        src="/chocolate-logo.png"
        alt="Nike Chocolate"
        width={145}
        height={50}
        className="navbar-logo-image"
        priority
      />
     </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? "menu-open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#collection" onClick={() => setMenuOpen(false)}>
          Collection
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>

      <a
        href="#collection"
        className="navbar-button"
        onClick={() => setMenuOpen(false)}
      >
        Shop Now
      </a>
    </nav>
  );
}