import React from "react";
import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";

interface CourseAboutTabProps {
  descriptionParagraphs: string[];
  sneakPeekImages: string[];
  keyPoints: string[];
  className?: string;
}

export default function CourseAboutTab({
  descriptionParagraphs,
  sneakPeekImages,
  keyPoints,
  className = "",
}: CourseAboutTabProps) {
  return (
    <div
      id="course-tabpanel-about"
      role="tabpanel"
      aria-labelledby="course-tab-about"
      className={`flex flex-col gap-9 pt-2 ${className}`}
    >
      {/* 1. Description */}
      <div>
        <h2 className="font-semibold text-black text-[20px] font-heading tracking-tight mb-4">
          Description
        </h2>
        <div className="space-y-4 text-[#4f4f4f] text-[14px] sm:text-[16px] leading-[1.7] font-body">
          {descriptionParagraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>

      {/* 2. Sneak Peek Gallery */}
      {sneakPeekImages.length > 0 && (
        <div>
          <h3 className="font-semibold text-black text-[20px] font-heading tracking-tight mb-4">
            Sneak Peek
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {sneakPeekImages.map((src, i) => (
              <div
                key={i}
                className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-100 shadow-2xs border border-gray-100 group"
              >
                <Image
                  src={src}
                  alt={`Sneak peek thumbnail ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Key Points */}
      {keyPoints.length > 0 && (
        <div>
          <h3 className="font-semibold text-black text-[20px] font-heading tracking-tight mb-4">
            Key Points
          </h3>
          <ul className="grid grid-cols-1 gap-3.5 list-none p-0 m-0">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-center gap-2.5">
                <BsCheckCircleFill className="w-4 h-4 text-primary shrink-0" />
                <span className="text-[14px] sm:text-[16px] text-[#4b4c53] font-body">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
