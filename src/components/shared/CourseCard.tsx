"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { CourseItem } from "@/types/course";

const DEFAULT_STUDENT_AVATARS = [
  "/images/avatars/student-1.png",
  "/images/avatars/student-2.png",
  "/images/avatars/student-3.png",
  "/images/avatars/student-4.png",
];

interface CourseCardProps {
  course: CourseItem;
  className?: string;
  priorityImage?: boolean;
}

export default function CourseCard({
  course,
  className = "",
  priorityImage = false,
}: CourseCardProps) {
  const avatars = course.studentAvatars && course.studentAvatars.length > 0
    ? course.studentAvatars
    : DEFAULT_STUDENT_AVATARS;

  const cardHref = course.href || `/courses/${course.id}`;
  const billingText = course.billingPeriod || "/lifetime";
  const enrolledBadge = course.enrolledCount || "26+";

  return (
    <Link
      href={cardHref}
      className={`bg-white rounded-[22px] p-3.5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer block ${className}`}
    >
      {/* 1. Card Thumbnail Image with Frosted Metadata Badges */}
      <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-gray-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          priority={priorityImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Frosted badges row inside image */}
        <div className="absolute inset-x-2 bottom-2.5 flex items-center justify-between gap-1.5 px-1">
          <span className="bg-[#f6f6f6]/60 backdrop-blur-md text-[#4f4f4f] text-[11px] sm:text-[12px] font-medium px-2.5 py-1 rounded-3xl whitespace-nowrap">
            {course.lessons}
          </span>
          <span className="bg-[#f6f6f6]/60 backdrop-blur-md text-[#4f4f4f] text-[11px] sm:text-[12px] font-medium px-2.5 py-1 rounded-3xl whitespace-nowrap">
            {course.duration}
          </span>
          <span className="bg-[#f6f6f6]/60 backdrop-blur-md text-[#4f4f4f] text-[11px] sm:text-[12px] font-medium px-2.5 py-1 rounded-3xl whitespace-nowrap">
            {course.comments}
          </span>
        </div>
      </div>

      {/* 2. Card Content Body */}
      <div className="pt-4 px-2 pb-2">
        {/* Title & Star Rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-black text-[18px] sm:text-[20px] leading-[1.3] font-heading group-hover:text-primary transition-colors line-clamp-1">
            {course.title}
          </h3>
          <div className="flex items-center gap-1 text-[16px] sm:text-[18px] text-[#4f4f4f] shrink-0 font-normal font-body">
            <span>{course.rating.toFixed(1)}</span>
            <FaStar className="w-3.5 h-3.5 text-[#ced0d3]" />
          </div>
        </div>

        {/* Instructor */}
        <p className="mt-1 text-xs text-[#4f4f4f] font-normal font-body">
          by{" "}
          <span className="text-primary font-normal">
            {course.instructor}
          </span>
        </p>

        {/* Level badge & Enrolled Students Stack */}
        <div className="mt-3.5 flex items-center gap-3 pt-1">
          {/* Level Pill */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-3xl bg-[#f5f5f6] text-[#4b4c53] text-[11px] font-medium font-body">
            <BsBarChartFill className="w-2.5 h-2.5 text-[#4b4c53]" />
            <span className="text-[#4b4c53]">{course.level}</span>
          </div>

          {/* Avatar Stack */}
          <div className="flex items-center -space-x-2">
            {avatars.map((src, idx) => (
              <div
                key={idx}
                className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white overflow-hidden bg-gray-200 shrink-0 shadow-2xs"
              >
                <Image
                  src={src}
                  alt={`Enrolled student ${idx + 1}`}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
            ))}
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-lime-brand text-gray-950 text-[8px] sm:text-[9px] font-bold flex items-center justify-center border border-white shrink-0 font-heading">
              {enrolledBadge}
            </div>
          </div>
        </div>

        {/* Price & Billing Cycle */}
        <div className="mt-3.5 pt-3 border-t border-gray-100 flex items-baseline gap-1.5">
          <span className="font-semibold text-primary text-[20px] font-heading tracking-tight">
            {course.price}
          </span>
          <span className="text-gray-700 text-xs font-normal font-body">
            {billingText}
          </span>
        </div>
      </div>
    </Link>
  );
}
