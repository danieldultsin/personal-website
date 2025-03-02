"use client";

import Link from "next/link";
import { useState } from "react";
import StatusBar from "./status-bar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="pt-24 md:pt-12 pb-8 mb-12 px-8 w-full">
      <StatusBar />
      <h1 className="md:mb-8 md:mt-28 mb-4 text-center w-full">
        Daniel Dultsin
      </h1>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-8 right-6 z-50 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-8 h-[2px] bg-foreground mb-2"></div>
        <div className="w-8 h-[2px] bg-foreground mb-2"></div>
        <div className="w-8 h-[2px] bg-foreground"></div>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex nav-container">
        <Link href="/consulting" className="nav-link">
          Consulting
        </Link>
        <Link href="#" className="nav-link">
          Resources
        </Link>
        <Link href="/" className="nav-link">
          About
        </Link>
        <Link href="#" className="nav-link">
          Portfolio
        </Link>
        <Link href="#" className="nav-link">
          Articles
        </Link>
        <Link href="/contact" className="nav-link">
          Contact
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`
        fixed inset-0 bg-background/95 z-40 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        md:hidden
      `}
      >
        <nav className="bg-background flex flex-col items-center justify-center h-full space-y-8">
          <Link href="/consulting" className="nav-link">
            Consulting
          </Link>
          <Link href="/resources" className="nav-link">
            Resources
          </Link>
          <Link href="/" className="nav-link">
            About
          </Link>
          <Link href="/portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link href="/articles" className="nav-link">
            Articles
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
