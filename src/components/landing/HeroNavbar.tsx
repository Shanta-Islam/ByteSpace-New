"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ByteSpaceLogo from "@/components/shared/ByteSpaceLogo";
import { HiBars3, HiXMark } from "react-icons/hi2";

const NAV_LINKS = [
  { name: "Home", href: "/", active: true },
  { name: "Courses", href: "/courses", active: false },
  { name: "Creators", href: "/creators", active: false },
];

export default function HeroNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-40 w-full pt-5 sm:pt-6">
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
                className={`text-[16px] transition-colors duration-200 ${link.active
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
              className="transition-colors duration-200 p-1.5 focus:outline-none"
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
              className="md:hidden text-white hover:text-[#D4FB20] p-1.5 focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? (
                <HiXMark className="w-6 h-6" />
              ) : (
                <HiBars3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 bg-[#0034c7]/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-[15px] transition-colors ${link.active
                    ? "text-[#D4FB20] font-semibold"
                    : "text-white/80 hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-[15px] text-white/90 hover:text-white"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-center text-sm font-semibold rounded-full bg-[#D4FB20] text-gray-950 hover:bg-[#c2e917] transition-colors"
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
