import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col text-white lg:flex-row">
      {/* Left Section */}
      <div className="w-full bg-black p-6 lg:w-2/5">
        <Image
          alt="Flycotec logo"
          src="/images/logo.png"
          width={50}
          height={50}
        />
        <p className="mt-4">Contact Us</p>
        <p className="mb-2">0303 966 546 | 0546 826 268 </p>
        <p className="mb-4"> 0249 969 008 | 0533 831 959</p>
        <div className="flex flex-wrap gap-3">
          <Link href="https://facebook.com">{/* Facebook SVG icon */}</Link>
          <Link href="https://twitter.com">{/* Twitter SVG icon */}</Link>
          <Link href="https://linkedin.com">{/* LinkedIn SVG icon */}</Link>
          <Link href="https://instagram.com">{/* Instagram SVG icon */}</Link>
        </div>
        <p className="mt-4">
          Flycotec is committed to delivering exceptional real estate solutions,
          helping you find a serene and luxurious space in Ghana.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col bg-blue-600 px-4 py-6 sm:flex-row lg:flex-grow">
        {/* Quick Links */}
        <div className="my-4 w-full px-4 sm:w-1/3">
          <h2 className="mb-4 text-2xl">Quick Links</h2>
          <ul className="leading-8">
            <li>
              <Link href="/about" className="hover:text-primary">
                About Flycotec
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-primary">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Clients Support */}
        <div className="my-4 w-full px-4 sm:w-1/3">
          <h2 className="mb-4 text-2xl">Client Support</h2>
          <ul className="leading-8">
            <li>
              <a href="mailto:info@flycotec.com" className="hover:text-primary">
                info@flycotec.com
              </a>
            </li>
            {/* <li>
              <a
                href="mailto:support@flycotec.com"
                className="hover:text-primary"
              >
                @flycotec.com
              </a>
            </li> */}
          </ul>
        </div>

        {/* Latest News */}
        <div className="my-4 w-full px-4 sm:w-1/3">
          <h2 className="mb-4 text-2xl">Latest News</h2>
          <div>
            <p>Expanding Our Property Portfolio in Ghana</p>
            <div className="flex items-center justify-between">
              <p>30 Oct 2024</p>
              <p>by Flycotec</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
