"use client";

import React from "react";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";

interface CourseMediaPreviewProps {
  imageSrc: string;
  alt?: string;
  onPlayClick?: () => void;
  className?: string;
}

export default function CourseMediaPreview({
  imageSrc,
  alt = "Course Video Preview",
  onPlayClick,
  className = "",
}: CourseMediaPreviewProps) {
  return (
    <div
      className={`relative w-full aspect-16/10 rounded-[28px] overflow-hidden bg-[#e6e8eb] shadow-xl border border-white/40 group ${className}`}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 66vw"
        className="object-cover object-top"
      />

      {/* Play Button Overlay */}
      <button
        type="button"
        onClick={onPlayClick}
        aria-label="Play course preview video"
        className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-gray-900 group-hover:scale-110 group-hover:bg-white/90 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.18)] cursor-pointer"
      >
        <FiPlay className="w-7 h-7 sm:w-8 sm:h-8 fill-gray-900 ml-1" />
      </button>
    </div>
  );
}
