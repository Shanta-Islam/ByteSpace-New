"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiShare2 } from "react-icons/fi";
import { BsBarChartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { CourseDetailData } from "@/types/course";

interface CourseHeroProps {
  course: CourseDetailData;
  className?: string;
}

export default function CourseHero({ course, className = "" }: CourseHeroProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(false);
    }
  };

  return (
    <section
      className={`relative w-full bg-primary pb-[300px] sm:pb-[500px] lg:pb-[560px] overflow-hidden ${className}`}
    >
      {/* Seamless Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none bg-blueprint-grid opacity-90"
        aria-hidden="true"
      />

      {/* Hero Course Header Info */}
      <div className="relative z-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <h1 className="text-white font-semibold text-[30px] sm:text-[36px] font-heading leading-tight tracking-tight">
              {course.title}
            </h1>
            <p className="mt-2.5 text-[#d5d5d5] text-[15px] sm:text-[20px] font-semibold font-body">
              {course.subtitle}
            </p>
            <p className="mt-2 text-lg font-medium text-[#f1f4fe]">
              by{" "}
              <Link
                href="/creator"
                className="text-lime-brand font-medium hover:underline transition-colors cursor-pointer"
              >
                {course.instructor}
              </Link>
            </p>

            {/* Meta Badges Row */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-2 bg-white text-[#242528] px-3.5 py-1.5 rounded-3xl text-xs sm:text-[13px] lg:text-[16px] font-medium shadow-2xs">
                <BsBarChartFill className="w-3.5 h-3.5 text-primary" />
                <span>{course.level}</span>
              </div>

              <div className="inline-flex items-center gap-2 bg-white text-[#242528] px-3.5 py-1.5 rounded-3xl text-xs sm:text-[13px] lg:text-[16px] font-medium shadow-2xs">
                <FaStar className="w-3.5 h-3.5 text-primary" />
                <span>
                  {course.rating.toFixed(1)} ({course.reviewCount} reviews)
                </span>
              </div>

              <div className="inline-flex items-center gap-2 bg-white text-[#242528] px-3.5 py-1.5 rounded-3xl text-xs sm:text-[13px] lg:text-[16px] font-medium shadow-2xs">
                <HiOutlineUsers className="w-4 h-4 text-primary" />
                <span>{course.studentsCount} Students</span>
              </div>
            </div>
          </div>

          {/* Share Pill Button */}
          <div className="shrink-0 self-start">
            <button
              type="button"
              onClick={handleShare}
              aria-label={copied ? "Link copied to clipboard" : "Share this course"}
              className="inline-flex items-center gap-2 bg-lime-brand hover:bg-[#c5ec19] text-black font-semibold text-xs sm:text-[13px] px-5 py-2.5 rounded-full transition-all duration-150 shadow-xs active:scale-95 cursor-pointer"
            >
              <FiShare2 className="w-4 h-4 stroke-[2.2]" />
              <span>{copied ? "Copied!" : "Share"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
