"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTalkToUsClick = (e) => {
    const element = document.getElementById("callback-section");
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 bg-white border-b border-zinc-100 shadow-sm z-50 transition-all duration-300">
      {/* Top Banner: Flagship Government School Safety Initiative */}
      <div className="bg-[#00008C] text-white text-[11px] md:text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#DA2128] text-white font-extrabold px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider">
              Flagship Initiative
            </span>
            <span className="font-medium text-zinc-100 hidden sm:inline">
              Uttar Pradesh School Safety Audit & Risk Assessment Project
            </span>
            <span className="text-zinc-300 hidden md:inline">•</span>
            <span className="text-yellow-300 font-semibold text-[10px] md:text-xs">
              1,40,555+ Schools Covered
            </span>
          </div>
          <div className="flex items-center gap-3 text-[10px] md:text-xs font-semibold ml-auto sm:ml-0">
            <a 
              href="#school-safety-audit" 
              onClick={() => handleScrollTo("school-safety-audit")}
              className="hover:text-yellow-300 underline underline-offset-2 transition-colors cursor-pointer"
            >
              View Audit Framework →
            </a>
            <a href="tel:18001202020" className="hover:text-yellow-300 transition-colors flex items-center gap-1">
              <svg className="w-3 h-3 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.158-.441.008-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              1800 120 2020
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between">
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
          <nav className="hidden xl:flex items-center gap-5 text-xs font-bold text-times-dark">
            <Link href="/" className="hover:text-times-blue py-4">Home</Link>
            <a 
              href="#school-safety-audit" 
              onClick={() => handleScrollTo("school-safety-audit")} 
              className="text-times-blue bg-blue-50/80 px-2.5 py-1 rounded border border-blue-200 hover:bg-blue-100 transition-all flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-times-red"></span>
              School Safety Audit
            </a>
            <a href="#courses-section" onClick={() => handleScrollTo("courses-section")} className="hover:text-times-blue py-4">
              All Courses
            </a>
            <a href="#enterprise-section" onClick={() => handleScrollTo("enterprise-section")} className="hover:text-times-blue py-4">
              Enterprise Solutions
            </a>
            <Link href="/privacy-policy" className="hover:text-times-blue py-4">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-times-blue py-4">Terms of Use</Link>
          </nav>
        </div>

        {/* Right Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:18001202020" className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-times-blue">
            <svg className="w-4 h-4 text-times-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.158-.441.008-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            1800 120 2020
          </a>
          <a
            href="#callback-section"
            onClick={handleTalkToUsClick}
            className="bg-times-red text-white text-xs font-bold px-5 py-2.5 rounded hover:bg-red-700 hover:shadow transition-all uppercase tracking-wide cursor-pointer"
          >
            Talk to Us
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center gap-3">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700 rounded-md outline-none hover:bg-zinc-100"
            aria-label="Toggle navigation menu"
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
        <div className="xl:hidden bg-white border-b border-zinc-200 shadow-md py-4 px-6 flex flex-col gap-3 animate-fade-in z-50">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="font-semibold text-times-dark hover:text-times-blue border-b border-zinc-100 pb-2 text-sm"
          >
            Home
          </Link>
          <a 
            href="#school-safety-audit" 
            onClick={() => handleScrollTo("school-safety-audit")}
            className="font-bold text-times-blue bg-blue-50 p-2 rounded border border-blue-200 text-sm flex items-center justify-between"
          >
            <span>School Safety Audit (1.40L+ Schools)</span>
            <span className="text-[10px] bg-times-red text-white px-1.5 py-0.5 rounded uppercase">Govt. UP</span>
          </a>
          <a 
            href="#courses-section" 
            onClick={() => handleScrollTo("courses-section")}
            className="font-semibold text-times-dark hover:text-times-blue border-b border-zinc-100 pb-2 text-sm"
          >
            All Programmes & Courses
          </a>
          <a 
            href="#enterprise-section" 
            onClick={() => handleScrollTo("enterprise-section")}
            className="font-semibold text-times-dark hover:text-times-blue border-b border-zinc-100 pb-2 text-sm"
          >
            Enterprise & Capacity Solutions
          </a>
          <Link 
            href="/privacy-policy" 
            onClick={() => setMobileMenuOpen(false)}
            className="font-semibold text-times-dark hover:text-times-blue border-b border-zinc-100 pb-2 text-sm"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms-of-use" 
            onClick={() => setMobileMenuOpen(false)}
            className="font-semibold text-times-dark hover:text-times-blue border-b border-zinc-100 pb-2 text-sm"
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
