"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ByteSpaceLogo from "@/components/shared/ByteSpaceLogo";
import { HiBars3, HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Hide Navbar completely on auth pages (login, register)
  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  const isHomeActive = pathname === "/";
  const isCoursesActive =
    pathname.startsWith("/courses") ||
    pathname === "/search" ||
    pathname === "/course-details";
  const isCreatorsActive = pathname.startsWith("/creators");

  const NAV_LINKS = [
    { name: "Home", href: "/", active: isHomeActive },
    { name: "Courses", href: "/courses", active: isCoursesActive },
    { name: "Creators", href: "/creators", active: isCreatorsActive },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-40 w-full pt-5 sm:pt-6">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Left: Brand Logo */}
          <div className="flex items-center">
              <ByteSpaceLogo theme="light" />
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-9 lg:gap-11">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[16px] transition-colors duration-200 ${
                  link.active
                    ? "text-[#f5f5f6] font-medium"
                    : "text-[#f5f5f6]/75 hover:text-[#f5f5f6] font-normal"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Auth & Cart Actions */}
          <div className="flex items-center gap-5 sm:gap-7">
            <div className="hidden sm:flex items-center gap-6">
              <Link
                href="/login"
                className="text-[16px] text-[#f5f5f6]/75 hover:text-[#f5f5f6] font-normal transition-colors duration-200"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="text-[16px] text-[#f5f5f6]/75 hover:text-[#f5f5f6] font-normal transition-colors duration-200"
              >
                Join Us
              </Link>
            </div>

            {/* Shopping Bag Icon */}
            <button
              type="button"
              aria-label="Shopping Cart"
              className="transition-colors duration-200 p-1.5 focus:outline-none cursor-pointer"
            >
              <Image
                src="/images/shopping-cart.svg"
                alt="shopping-cart"
                width={18}
                height={20}
                className="stroke-[1.8]"
              />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden text-white hover:text-lime-brand p-1.5 focus:outline-none transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <HiXMark className="w-6 h-6" />
              ) : (
                <HiBars3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 bg-[#003BE2]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base py-1.5 transition-colors ${
                  link.active
                    ? "text-lime-brand font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-white/15 flex items-center justify-between">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-sm font-medium hover:underline"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-lime-brand text-black font-semibold px-4 py-1.5 rounded-full text-sm shadow-xs"
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
