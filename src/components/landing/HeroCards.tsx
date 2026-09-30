import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export function UiUxCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white rounded-[18px] px-4 sm:px-5 py-3 sm:py-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-white/80 select-none transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)] ${className}`}
    >
      <h3 className="font-medium text-[#242528] text-xs sm:text-sm lg:text-base tracking-tight leading-snug font-heading">
        UI/UX Design
      </h3>
      <p className="text-[10px] sm:text-[11px] lg:text-[12px] text-[#82868e] font-normal mt-0.5 tracking-tight whitespace-nowrap font-body">
        200 Courses <span className="mx-1">•</span> 1000+ Students
      </p>
    </div>
  );
}

export function LearningProgressCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white rounded-[18px] px-4 sm:px-5 py-3 sm:py-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-white/80 select-none min-w-37.5 sm:min-w-43.75 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)] ${className}`}
    >
      <span className="block text-[10px] sm:text-[11px] sm:text-[14px] text-[#242528] font-medium font-body">
        Learning Progress
      </span>
      <div className="font-semibold text-[#242528] text-2xl sm:text-[32px] lg:text-[48px] leading-none my-1.5 tracking-tight font-heading">
        55%
      </div>
      {/* Progress Track */}
      <div className="w-full h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden mt-2">
        <div
          className="h-full bg-lime-brand rounded-full transition-all duration-500"
          style={{ width: "55%" }}
        />
      </div>
    </div>
  );
}

const AVATAR_LIST = [
  "/images/avatars/student-1.png",
  "/images/avatars/student-2.png",
  "/images/avatars/student-3.png",
  "/images/avatars/student-4.png",
  "/images/avatars/student-5.png",
  "/images/avatars/student-6.png",
  "/images/avatars/student-7.png",
];

export function HappyStudentsCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white rounded-[18px] px-3.5 sm:px-4 py-3 sm:py-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-white/80 select-none transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)] ${className}`}
    >
      <h3 className="font-medium text-[#242528] text-xs sm:text-sm lg:text-base tracking-tight leading-snug font-heading">
        Happy Students
      </h3>
      <div className="flex items-center gap-1 mt-0.5 font-body">
        <span className="text-[11px] sm:text-xs font-semibold text-[#242528]">
          4.5
        </span>
        <span className="text-[10px] sm:text-[11px] text-[#82868e]">
          (240)
        </span>
        <FaStar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-lime-brand ml-0.5" />
      </div>

      {/* Avatar Stack */}
      <div className="flex items-center -space-x-2 mt-2">
        {AVATAR_LIST.map((src, idx) => (
          <div
            key={idx}
            className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white overflow-hidden bg-gray-200 shrink-0 shadow-xs"
          >
            <Image
              src={src}
              alt={`Student ${idx + 1}`}
              fill
              sizes="28px"
              className="object-cover"
            />
          </div>
        ))}
        {/* End Badge: 2K+ */}
        <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-lime-brand text-[#242528] text-[9px] sm:text-[10px] lg:text-[12px]  font-bold flex items-center justify-center border-2 border-white shrink-0 shadow-xs font-heading">
          2K+
        </div>
      </div>
    </div>
  );
}
