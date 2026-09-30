"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaCheck } from "react-icons/fa";

const CHECKLIST_ITEMS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const AVATAR_LIST = [
  "/images/avatars/student-1.png",
  "/images/avatars/student-2.png",
  "/images/avatars/student-3.png",
  "/images/avatars/student-4.png",
];

export default function CourseManagementSection() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none select-none opacity-40">
        <div className="absolute inset-0 bg-radial from-[#D4FB20]/20 via-[#003BE2]/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Visual Composition with Female Creator & Stats (7 cols) */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex justify-center items-center min-h-[460px] sm:min-h-[520px] order-2 lg:order-1">
            {/* Soft Ambient Radial Glow */}
            <div className="absolute w-[460px] h-[460px] sm:w-[520px] sm:h-[520px] rounded-full bg-radial from-[#D4FB20]/30 via-[#003BE2]/10 to-transparent blur-2xl pointer-events-none" />

            {/* Lime 3D Squiggle floating on upper right */}
            <div className="absolute right-[8%] top-[12%] w-[110px] sm:w-[135px] aspect-[267/387] select-none pointer-events-none z-0">
              <Image
                src="/images/hero/hero-decoration-01.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Female Creator Cutout / Photo */}
            <div className="relative z-10 w-[300px] sm:w-[380px] md:w-[420px] aspect-[4/5] rounded-[30px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Smiling course creator with tablet and headphones"
                fill
                sizes="(max-width: 768px) 300px, 420px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Card 1: Total Revenue (Top-Left) */}
            <div className="absolute left-[0%] sm:left-[4%] top-[25px] sm:top-[35px] z-20 bg-[#003BE2] text-white rounded-[16px] p-3 sm:p-3.5 shadow-[0_12px_32px_rgba(0,59,226,0.35)] min-w-[145px] sm:min-w-[165px] transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-between text-[10px] text-white/75 font-body">
                <span>Total Revenue</span>
              </div>
              <span className="text-[9px] text-white/60 block font-body">Aug 2, 2024</span>
              <div className="font-semibold text-white text-lg sm:text-[22px] leading-tight mt-1 font-heading">
                $120.29
              </div>
              <div className="w-full h-1 bg-white/20 rounded-full mt-2 overflow-hidden">
                <div className="w-2/3 h-full bg-[#D4FB20]" />
              </div>
            </div>

            {/* Floating Card 2: Year to Date (Mid-Left) */}
            <div className="absolute left-[0%] sm:left-[2%] top-[140px] sm:top-[160px] z-20 bg-[#0034c7] text-white rounded-[16px] p-3 sm:p-3.5 shadow-[0_12px_32px_rgba(0,59,226,0.35)] min-w-[155px] sm:min-w-[175px] transition-transform hover:-translate-y-1">
              <span className="text-[10px] text-white/75 block font-body">
                Year to Date
              </span>
              <span className="text-[9px] text-white/60 block font-body">2024</span>
              <div className="font-semibold text-white text-lg sm:text-[22px] leading-tight mt-1 font-heading">
                $1,200.38
              </div>
              <div className="mt-2 inline-flex items-center gap-1 bg-[#D4FB20] text-gray-950 px-2 py-0.5 rounded-full text-[9px] font-bold font-heading">
                +11%
              </div>
            </div>

            {/* Floating Card 3: Happy Students (Bottom-Right) */}
            <div className="absolute right-[0%] sm:right-[4%] bottom-[20px] sm:bottom-[30px] z-20 bg-white rounded-[18px] px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-gray-100 min-w-[175px] transition-transform hover:-translate-y-1">
              <h4 className="font-semibold text-gray-900 text-xs tracking-tight leading-snug font-heading">
                Happy Students
              </h4>
              <div className="flex items-center gap-1 mt-0.5 font-body">
                <span className="text-[11px] font-semibold text-gray-700">
                  4.6
                </span>
                <span className="text-[10px] text-gray-400">(240)</span>
                <FaStar className="w-2.5 h-2.5 text-[#facc15] ml-0.5" />
              </div>
              <div className="flex items-center -space-x-2 mt-1.5">
                {AVATAR_LIST.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative w-5 h-5 rounded-full border border-white overflow-hidden bg-gray-200 shrink-0"
                  >
                    <Image
                      src={src}
                      alt="Student"
                      fill
                      sizes="20px"
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="relative w-5 h-5 rounded-full bg-[#D4FB20] text-gray-950 text-[8px] font-bold flex items-center justify-center border border-white shrink-0 font-heading">
                  2K+
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist (5 cols) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center order-1 lg:order-2">
            <h2 className="font-semibold text-gray-950 text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.18] font-heading tracking-tight">
              Create & Manage
              <br />
              Courses Easily.
            </h2>
            <p className="mt-5 text-gray-500 text-[15px] sm:text-[16px] leading-[1.7] font-body">
              <strong className="text-gray-900 font-semibold">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Checklist */}
            <ul className="mt-8 space-y-4">
              {CHECKLIST_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0 shadow-xs">
                    <FaCheck className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900 text-[15px] sm:text-[16px] font-heading">
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
