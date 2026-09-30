"use client";

import React, { useState } from "react";
import Link from "next/link";
import ByteSpaceLogo from "@/components/shared/ByteSpaceLogo";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 sm:pt-20 pb-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Newsletter on left, Navigation Links on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-14 sm:pb-16 border-b border-gray-100">
          {/* Left Column: Brand & Newsletter (5 cols) */}
          <div className="lg:col-span-5 max-w-[420px]">
            <ByteSpaceLogo theme="dark" />

            <p className="mt-4 text-[#242528] text-[14px] leading-relaxed font-body">
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Pill Form */}
            <form onSubmit={handleSubscribe} className="mt-5">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-white border border-gray-200 rounded-full px-5 py-2.5 sm:py-3 text-[16px] text-[#242528] placeholder:text-gray-400 outline-none focus:border-[#003BE2] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#D4FB20] hover:bg-[#c2e917] active:scale-[0.98] text-[#242528] font-medium text-xs sm:text-[13px] lg:text-[18px]  font-heading tracking-tight transition-all duration-150 shadow-xs shrink-0 cursor-pointer"
                >
                  Search
                </button>
              </div>

              <p className="mt-2.5 text-[10px] sm:text-[12px] text-[#242528] leading-normal font-body">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </form>
          </div>

          {/* Right Column: 3 Link Columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            {/* Column 1 */}
            <div className="space-y-3 font-body">
              <Link
                href="/courses"
                className="block text-[14px] text-[#242528] hover:text-[#003BE2] transition-colors font-medium"
              >
                Featured Courses
              </Link>
              <Link
                href="/categories"
                className="block text-[14px] text-[#242528] hover:text-[#003BE2] transition-colors font-medium"
              >
                Featured Categories
              </Link>
              <Link
                href="/categories/business"
                className="block text-[14px] text-[#242528] hover:text-[#003BE2] transition-colors font-medium"
              >
                Business
              </Link>
              <Link
                href="/categories/it"
                className="block text-[14px] text-[#242528] hover:text-[#003BE2] transition-colors font-medium"
              >
                IT
              </Link>
              <Link
                href="/categories/design"
                className="block text-[14px] text-[#242528] hover:text-[#003BE2] transition-colors font-medium"
              >
                Design
              </Link>
            </div>

            {/* Column 2 */}
            <div className="space-y-3 font-body">
              <Link
                href="/categories/development"
                className="block text-[14px] text-[#242528] hover:text-[#003BE2] transition-colors font-medium"
              >
                Development
              </Link>
              <Link
                href="/categories/marketing"
                className="block text-[14px] text-[#242528] hover:text-[#003BE2] transition-colors font-medium"
              >
                Marketing
              </Link>
              <Link
                href="/categories/photography"
                className="block text-[14px] text-[#242528] hover:text-[#003BE2] transition-colors font-medium"
              >
                Photography
              </Link>
              <Link
                href="/categories/finance"
                className="block text-[14px] text-[#242528] hover:text-[#003BE2] transition-colors font-medium"
              >
                Finance
              </Link>
              <Link
                href="/categories/sport"
                className="block text-[14px] text-[#242528] hover:text-[#003BE2] transition-colors font-medium"
              >
                Sport
              </Link>
            </div>

            {/* Column 3 */}
            <div className="space-y-3 font-body">
              <Link
                href="/creators"
                className="block text-[14px] text-[#242528] hover:text-[#003BE2] transition-colors font-medium"
              >
                Become a Creator
              </Link>
              <Link
                href="/affiliate"
                className="block text-[14px] text-[#242528] hover:text-[#003BE2] transition-colors font-medium"
              >
                Affiliate Program
              </Link>
              <Link
                href="/contact"
                className="block text-[14px] text-[#242528] hover:text-[#003BE2] transition-colors font-medium"
              >
                Contact
              </Link>
              <Link
                href="/help"
                className="block text-[14px] text-[#242528] hover:text-[#003BE2] transition-colors font-medium"
              >
                Help
              </Link>
              <Link
                href="/about"
                className="block text-[14px] text-[#242528] hover:text-[#003BE2] transition-colors font-medium"
              >
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-gray-400 font-body">
          <div>&copy; 2025 ByteSpace. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-gray-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-600 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-gray-600 transition-colors"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
