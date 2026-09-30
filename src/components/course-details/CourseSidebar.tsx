"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiFileText,
  FiVideo,
  FiAward,
  FiMessageSquare,
} from "react-icons/fi";
import { CourseDetailData } from "@/types/course";

interface CourseSidebarProps {
  course: CourseDetailData;
  onViewMoreLessons?: () => void;
  className?: string;
}

export default function CourseSidebar({
  course,
  onViewMoreLessons,
  className = "",
}: CourseSidebarProps) {
  const moreVideosCount = Math.max(
    0,
    course.lessonCount - course.sampleLessons.length
  );

  return (
    <aside className={`sticky top-6 ${className}`}>
      <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-gray-100 shadow-xl flex flex-col gap-6">
        {/* 1. Header: Lessons summary & sample list */}
        <div>
          <h3 className="font-semibold text-black text-[18px] sm:text-[20px] font-heading tracking-tight">
            {course.lessonCount} Lessons ({course.totalDuration})
          </h3>

          {/* Sample Lessons */}
          <div className="mt-4 space-y-2.5 text-xs sm:text-[16px] font-medium">
            {course.sampleLessons.map((sample, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-[#242528]"
              >
                <span className="truncate pr-2">{sample.title}</span>
                <span className="text-primary font-semibold shrink-0">
                  {sample.duration}
                </span>
              </div>
            ))}
          </div>

          {moreVideosCount > 0 && (
            <button
              type="button"
              onClick={onViewMoreLessons}
              className="mt-3 text-lg text-[#4b4c53] hover:text-primary transition-colors cursor-pointer font-medium block"
            >
              {moreVideosCount} more videos
            </button>
          )}
        </div>

        {/* 2. Ready to dive in & Price & Enroll CTA */}
        <div>
          <p className="text-lg text-[#4b4c53] leading-relaxed mb-3">
            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
          </p>

          <div className="flex items-baseline gap-1.5 mb-4">
            <span className="font-bold text-primary text-[28px] font-heading tracking-tight">
              {course.price}
            </span>
            <span className="text-[#4b4c53] text-lg font-normal font-body">
              {course.billingPeriod || "/lifetime"}
            </span>
          </div>

          <button
            type="button"
            className="w-full py-3.5 rounded-full bg-lime-brand hover:bg-[#c5ec19] active:scale-[0.98] text-black font-semibold text-[15px] transition-all duration-150 shadow-xs cursor-pointer text-center"
          >
            Enroll Now
          </button>
        </div>

        {/* 3. This course includes checklist */}
        <div className="pt-2 border-t border-gray-100">
          <h4 className="font-medium text-gray-950 text-lg font-heading mb-3">
            This course include
          </h4>
          <ul className="space-y-2.5 text-[#4b4c53] list-none p-0 m-0">
            <li className="flex items-center gap-2.5">
              <FiFileText className="w-4 h-4 text-primary shrink-0" />
              <span>Learning Resources</span>
            </li>
            <li className="flex items-center gap-2.5">
              <FiVideo className="w-4 h-4 text-primary shrink-0" />
              <span>Quality Lesson Videos</span>
            </li>
            <li className="flex items-center gap-2.5">
              <FiAward className="w-4 h-4 text-primary shrink-0" />
              <span>Certificate of Completion</span>
            </li>
            <li className="flex items-center gap-2.5">
              <FiMessageSquare className="w-4 h-4 text-primary shrink-0" />
              <span>Private Consultation</span>
            </li>
          </ul>
        </div>

        {/* 4. Creator Profile Snippet */}
        <div className="pt-5 border-t border-gray-100 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-200 shrink-0">
              <Image
                src={
                  course.instructorAvatar ||
                  "/images/testimonial/client-img2.png"
                }
                alt={course.instructor}
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <h5 className="font-medium text-black text-lg font-heading">
                {course.instructor}
              </h5>
              <span className="text-lg text-[#4b4c53] font-body">
                {course.instructorRole || "Professional Creator"}
              </span>
            </div>
          </div>

          <p className="text-[16px] text-[#4b4c53] font-body">
            {course.instructorBioSnippet ||
              "Ready to Dive In? Enroll Now and Start Building Your Digital Future!"}
          </p>

          <Link
            href="/creator"
            className="self-start px-4 py-1.5 rounded-full border border-gray-200 text-[16px] text-[#4b4c53] font-medium hover:border-gray-400 hover:text-black transition-all cursor-pointer shadow-2xs inline-block"
          >
            See Full Profile
          </Link>
        </div>
      </div>
    </aside>
  );
}
