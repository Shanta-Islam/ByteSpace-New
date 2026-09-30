"use client";

import React from "react";
import Image from "next/image";
import HeroNavbar from "./HeroNavbar";
import HeroSearch from "./HeroSearch";
import HeroDecorations from "./HeroDecorations";
import {
  UiUxCard,
  LearningProgressCard,
  HappyStudentsCard,
} from "./HeroCards";

export default function HeroLanding() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <section className="relative w-full bg-primary overflow-hidden flex flex-col justify-between selection:bg-lime-brand selection:text-black">
      {/* 1. Seamless Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none bg-blueprint-grid"
        aria-hidden="true"
      />

      {/* 2. Top Navigation Bar */}
      <HeroNavbar />

      {/* 3. Floating 3D Geometric Decorations */}
      <HeroDecorations />

      {/* 4. Main Hero Typography & Search */}
      <div className="relative z-20 max-w-310 mx-auto px-4 sm:px-6 lg:px-8 pt-7 sm:pt-9 md:pt-11 text-center">
        {/* Main Headline */}
        <h1 className="text-white font-semibold text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] leading-[1.14] tracking-tight font-heading max-w-4xl mx-auto">
          Get Access to Hundreds
          <br className="hidden sm:inline" /> Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-[#e5e6e8] text-[14px] sm:text-[16px] md:text-[18px] font-normal max-w-162.5 mx-auto leading-relaxed font-body">
          Unlock your creativity, gain valuable knowledge, and grow your business
          with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="mt-6 sm:mt-7">
          <HeroSearch onSearch={handleSearch} />
        </div>
      </div>

      {/* 5. Central Visual: Giant Lime Circle Anchor, Student, & Floating Cards */}
      <div className="relative z-20 lg:z-0  w-full max-w-240 mx-auto mt-6 sm:mt-8 flex justify-center items-end h-90 sm:h-105 md:h-120">
        {/* The Giant Lime Circle Anchor */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-13.75 sm:top-17.5 md:top-21.25 w-125 h-125 sm:w-160 sm:h-160 md:w-185 md:h-185 lg:w-300 lg:h-300 rounded-full bg-lime-brand pointer-events-none select-none z-0"
          aria-hidden="true"
        />

        {/* Student Image */}
        <div className="relative z-10 w-105 sm:w-130 md:w-150 lg:w-157.5 aspect-722/515 flex items-end justify-center select-none pointer-events-none">
          <Image
            src="/images/hero/hero-student.png"
            alt="Smiling student with headphones using laptop"
            fill
            priority
            sizes="(max-width: 640px) 420px, (max-width: 768px) 520px, 630px"
            className="object-contain object-bottom pointer-events-none"
          />
        </div>

        {/* Card 1: UI/UX Design (Left of Student Shoulder) */}
        <div className="absolute left-[2%] sm:left-[6%] md:left-[12%] lg:left-[15%] top-25 sm:top-31.25 md:top-36.25 z-20">
          <UiUxCard />
        </div>

        {/* Card 2: Learning Progress (Right of Student Shoulder) */}
        <div className="absolute right-[2%] sm:right-[6%] md:right-[12%] lg:right-[15%] top-30 sm:top-36.25 md:top-42.5 z-20">
          <LearningProgressCard />
        </div>

        {/* Card 3: Happy Students (Bottom-Left of Student) */}
        <div className="absolute left-[1%] sm:left-[4%] md:left-[9%] lg:left-[12%] bottom-5 sm:bottom-7.5 md:bottom-10 z-20">
          <HappyStudentsCard />
        </div>
      </div>
    </section>
  );
}
