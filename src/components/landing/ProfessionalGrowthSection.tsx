"use client";

import React from "react";
import Image from "next/image";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const CHECKLIST_ITEMS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function ProfessionalGrowthSection() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* ========================================================================= */}
      {/* Ambient background glows using exact Figma Ellipse SVGs                   */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* 1. Top Lime Glow (Ellipse 11.svg): Wide vibrant radial glow across top center */}
        <div className="absolute left-38 top-0 -translate-x-[25%] sm:-translate-x-[15%] w-[800px] sm:w-[1000px] lg:w-[1200px] opacity-90">
          <Image
            src="/images/professional_growth/Ellipse%2011.svg"
            alt=""
            width={1025}
            height={711}
            unoptimized
            priority
            className="w-full h-auto"
          />
        </div>

        {/* 2. Top-Right Subtle Blue Glow (Ellipse 10.svg): Soft ambient tint behind student */}
        <div className="absolute top-0 right-0 w-[550px] sm:w-[680px] lg:w-[780px] opacity-80">
          <Image
            src="/images/professional_growth/Ellipse%2010.svg"
            alt=""
            width={669}
            height={719}
            unoptimized
            className="w-full h-auto"
          />
        </div>

        {/* 3. Middle-Left Blue Glow (Ellipse 9.svg): Anchored at left-0 blooming inward */}
        <div className="absolute top-45.75 -left-2.5 sm:left-0 w-[500px] sm:w-[650px] lg:w-[760px] opacity-85">
          <Image
            src="/images/professional_growth/Ellipse%209.svg"
            alt=""
            width={669}
            height={1217}
            unoptimized
            className="w-full h-auto "
          />
        </div>

        {/* 4. Bottom-Left Lime Glow (Ellipse 11.svg rotated): Vibrant lime aura in bottom-left corner */}
        <div className="absolute -bottom-16 sm:-bottom-24 -left-16 sm:-left-24 w-[500px] sm:w-[650px] lg:w-[680px] opacity-95">
          <Image
            src="/images/professional_growth/Ellipse%2012.svg"
            alt=""
            width={1025}
            height={711}
            unoptimized
            className="w-full h-auto"
          />
        </div>

        {/* 5. Bottom-Right Blue Glow (Ellipse 8.svg): Blue ambient glow behind course management */}
        <div className="absolute bottom-0 right-0 sm:-right-8 w-[600px] sm:w-[750px] lg:w-[900px] opacity-85">
          <Image
            src="/images/professional_growth/Ellipse%208.svg"
            alt=""
            width={758}
            height={712}
            unoptimized
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* ROW 1: Your Path to Professional Growth Starts Here! & Frame 11           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center justify-between">
          {/* Left Column: Heading, Description & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-[#242528] text-[34px] sm:text-[42px] lg:text-[44px] font-medium leading-[1.15] font-heading tracking-tight">
              Your Path to Professional
              <br className="hidden sm:inline" /> Growth Starts Here!
            </h2>

            <p className="mt-5 sm:mt-6 text-[#4b4c53] text-[15px] sm:text-[16px] lg:text-[18px]  leading-[1.7] font-normal max-w-[490px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats row */}
            <div className="mt-8 sm:mt-11 flex items-center gap-8 sm:gap-12 lg:gap-14">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-primary text-[36px] font-medium font-heading leading-none tracking-tight">
                    {stat.value}
                  </div>
                  <span className="mt-2 block text-[#4b4c53] text-[13px] sm:text-[14px] lg:text-[18px] font-normal font-body">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Frame 11 (Student with Laptop, Course & Progress Badges) */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            <div className="relative w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[620px] aspect-[703/697] mx-auto select-none pointer-events-none">
              <Image
                src="/images/professional_growth/Frame 11.png"
                alt="Your Path to Professional Growth"
                width={703}
                height={697}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROW 2: Frame 12 & Create & Manage Courses Easily                          */}
        {/* ========================================================================= */}
        <div className="mt-20 sm:mt-28 lg:mt-36 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Frame 12 (Instructor with Headset, Tablet & Revenue Badges) */}
          <div className="lg:col-span-6 flex justify-center items-center relative order-2 lg:order-1">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] aspect-[587/719] mx-auto select-none pointer-events-none">
              <Image
                src="/images/professional_growth/Frame 12.png"
                alt="Create & Manage Courses Easily"
                width={587}
                height={719}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* Right Column: Heading, Description & Feature Checklist */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-[#242528] text-[34px] sm:text-[42px] lg:text-[44px] font-medium leading-[1.15] font-heading tracking-tight">
              Create & Manage
              <br className="hidden sm:inline" /> Courses Easily.
            </h2>

            <p className="mt-5 sm:mt-6 text-[#4b4c53] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.7] font-normal max-w-[490px]">
              <strong className="font-bold text-[#242528]">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Checklist items */}
            <ul className="mt-8 sm:mt-10 space-y-4">
              {CHECKLIST_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3.5">
                  <div className="w-[22px] h-[22px] sm:w-6 sm:h-6 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0 shadow-xs">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5 text-white"
                    >
                      <path
                        d="M13.3334 4L6.00008 11.3333L2.66675 8"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-[#242528] text-[15px] sm:text-[16px] lg:text-[18px] font-body">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
