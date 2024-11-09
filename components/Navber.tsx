"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navber = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="container mx-auto my-3 px-4">
      {/* Top Nav Links */}
      <div className="flex flex-col items-center justify-between border-b py-2 sm:flex-row">
        <div className="flex gap-4 text-sm uppercase">
          <Link href="/support" aria-label="Support">Support</Link>
          <Link href="/partners" aria-label="Partners">Partners</Link>
          <Link href="/careers" aria-label="Careers">Careers</Link>
        </div>
        <div className="mt-3 flex gap-3 sm:mt-0">
          <Link href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></Link>
          <Link href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg></Link>
          <Link href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></Link>
          <Link href=""><span className="icon-[mdi--instagram]"></span></Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex items-center justify-between py-4">
        <Link href="/" aria-label="Home">
          <Image alt="Company Logo" src="/images/logo.png" width={50} height={50} />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden flex items-center"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Drawer for Mobile */}
        <div
          className={`fixed top-0 left-0 z-40 h-full w-3/4 bg-white p-6 transition-transform transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } sm:hidden`}
        >
          <button
            className="mb-4"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="flex flex-col gap-6 text-lg uppercase">
            <Link href="/" aria-label="Home" onClick={() => setIsDrawerOpen(false)}>Home</Link>
            <Link href="/about-us" aria-label="About Us" onClick={() => setIsDrawerOpen(false)}>About</Link>
            <Link href="/portfolio" aria-label="Portfolio" onClick={() => setIsDrawerOpen(false)}>Portfolio</Link>
            <Link href="/services" aria-label="Services" onClick={() => setIsDrawerOpen(false)}>Services</Link>
            <Link href="/contact-us" aria-label="Contact Us" onClick={() => setIsDrawerOpen(false)}>Contact</Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-6 text-lg uppercase">
          <Link href="/" aria-label="Home">Home</Link>
          <Link href="/about-us" aria-label="About Us">About</Link>
          <Link href="/portfolio" aria-label="Portfolio">Portfolio</Link>
          <Link href="/services" aria-label="Services">Services</Link>
          <Link href="/contact-us" aria-label="Contact Us">Contact</Link>
        </div>
      </nav>
    </header>
  );
};
