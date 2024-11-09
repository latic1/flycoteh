import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row w-full text-white">
      {/* Left Section */}
      <div className="w-full lg:w-2/5 bg-black p-6">
        <Image alt="" src="/images/logo.png" width={50} height={50} />
        <p className="mt-4">Call Us Today</p>
        <p className="mb-4">+ 1 634 7638 654</p>
        <div className="flex gap-3 flex-wrap">
          <Link href="">
            {/* SVG icon */}
          </Link>
          <Link href="">
            {/* SVG icon */}
          </Link>
          <Link href="">
            {/* SVG icon */}
          </Link>
          <Link href="">
            {/* SVG icon */}
          </Link>
        </div>
        <p className="mt-4">
          Fusce eu magna quis velit efficitur rhoncus. Vivamus vehicula, neque a
          velit
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row lg:flex-grow bg-blue-600 py-6 px-4">
        {/* Quick Links */}
        <div className="my-4 w-full sm:w-1/3 px-4">
          <h2 className="mb-4 text-2xl">Quick Links</h2>
          <ul className="leading-8">
            <li>
              <a href="mailto:admin@francisandorful.org" className="hover:text-primary">
                About Company
              </a>
            </li>
            <li>
              <a href="mailto:partners@francisandorful.org" className="hover:text-primary">
                Our Services
              </a>
            </li>
            <li>
              <a href="mailto:apostle@francisandorful.org" className="hover:text-primary">
                Pricings
              </a>
            </li>
          </ul>
        </div>

        {/* Clients Support */}
        <div className="my-4 w-full sm:w-1/3 px-4">
          <h2 className="mb-4 text-2xl">Clients Support</h2>
          <ul className="leading-8">
            <li>
              <a href="mailto:admin@francisandorful.org" className="hover:text-primary">
                admin@francisandorful.org
              </a>
            </li>
            <li>
              <a href="mailto:partners@francisandorful.org" className="hover:text-primary">
                partners@francisandorful.org
              </a>
            </li>
            <li>
              <a href="mailto:apostle@francisandorful.org" className="hover:text-primary">
                apostle@francisandorful.org
              </a>
            </li>
          </ul>
        </div>

        {/* Our News */}
        <div className="my-4 w-full sm:w-1/3 px-4">
          <h2 className="mb-4 text-2xl">Our News</h2>
          <div>
            <p>Agile Construction Management Building</p>
            <div className="flex items-center justify-between">
              <p>20 Nov 2020</p>
              <p>by merkulove</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
