"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  // Categories list for the "All Courses" hover/dropdown menu
  const categories = [
    { title: "Banking & Finance", link: "/courses/banking-and-finance" },
    { title: "Supply Chain", link: "/courses/operations-and-supply-chain" },
    { title: "Marketing & Sales", link: "/courses/marketing-and-sales" },
    { title: "Technology & Analytics", link: "/courses/technology-and-analytics" },
    { title: "Healthcare", link: "/courses/healthcare" },
    { title: "Hospitality", link: "/courses/hospitality" },
    { title: "General Management", link: "/courses/general-management" },
    { title: "Leadership & Strategy", link: "/courses/leadership-and-strategy" },
    { title: "MBA / Law / Web 3.0", link: "/courses" },
  ];

  const handleTalkToUsClick = (e) => {
    // Scroll to the Request a Callback form on the homepage
    const element = document.getElementById("callback-section");
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 h-[88px] bg-white border-b border-zinc-100 shadow-sm z-50 flex items-center transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/icons/Timespro_logo.svg"
              alt="TimesPro"
              width={140}
              height={55}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-times-dark">
            <Link href="/" className="hover:text-times-blue py-4">Home</Link>
            <Link href="/privacy-policy" className="hover:text-times-blue py-4">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-times-blue py-4">Terms of Use</Link>
          </nav>
        </div>

        {/* Middle: Search Bar (Desktop) - removed for simplicity since search requires course directories */}
        <div className="hidden md:flex items-center flex-1 max-w-xs mx-4"></div>

        {/* Right Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:18001202020" className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-times-blue">
            <svg className="w-4 h-4 text-times-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.158-.441.008-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            1800 120 2020
          </a>
          <a
            href="#callback-section"
            onClick={handleTalkToUsClick}
            className="bg-times-red text-white text-xs font-bold px-5 py-3.5 rounded hover:bg-red-700 hover:shadow transition-all uppercase tracking-wide cursor-pointer"
          >
            Talk to Us
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700 rounded-md outline-none hover:bg-zinc-100"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[88px] left-0 right-0 bg-white border-b border-zinc-200 shadow-md py-4 px-6 flex flex-col gap-4 animate-fade-in z-50">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="font-semibold text-times-dark hover:text-times-blue border-b border-zinc-100 pb-2"
          >
            Home
          </Link>
          <Link 
            href="/privacy-policy" 
            onClick={() => setMobileMenuOpen(false)}
            className="font-semibold text-times-dark hover:text-times-blue border-b border-zinc-100 pb-2"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms-of-use" 
            onClick={() => setMobileMenuOpen(false)}
            className="font-semibold text-times-dark hover:text-times-blue border-b border-zinc-100 pb-2"
          >
            Terms of Use
          </Link>
          <div className="flex flex-col gap-3 pt-2">
            <a href="tel:18001202020" className="flex items-center gap-1.5 text-sm font-semibold text-zinc-700">
              <svg className="w-4 h-4 text-times-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.158-.441.008-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              1800 120 2020
            </a>
            <a
              href="#callback-section"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleTalkToUsClick(e);
              }}
              className="bg-times-red text-white text-center text-xs font-bold py-3 rounded hover:bg-red-700 hover:shadow transition-all uppercase tracking-wide cursor-pointer"
            >
              Talk to Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
