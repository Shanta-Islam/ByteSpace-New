"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";

const FILTER_ROWS = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
    "+ More",
  ],
];

interface CourseItem {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  price: string;
  image: string;
  category: string;
}

const COURSES: CourseItem[] = [
  {
    id: "figma-basic",
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    category: "UI/UX Design",
    image: "/images/course_discovery/img-1.jpg",
  },
  {
    id: "digital-asset",
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    category: "Digital Illustration",
    image: "/images/course_discovery/img-2.jpg",
  },
  {
    id: "big-data",
    title: "The Power of Big Data",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    category: "Data Science",
    image: "/images/course_discovery/img-3.jpg",
  },
  {
    id: "productivity",
    title: "Balancing Productivity",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    category: "Productivity",
    image: "/images/course_discovery/img-4.jpg",
  },
  {
    id: "money-management",
    title: "Mastering Money Management",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    category: "Marketing",
    image: "/images/course_discovery/img-5.jpg",
  },
  {
    id: "startup-success",
    title: "From Idea to Startup Success",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    category: "Freelance & Entrepreneurship",
    image: "/images/course_discovery/img-6.jpg",
  },
];

const STUDENT_AVATARS = [
  "/images/avatars/student-1.png",
  "/images/avatars/student-2.png",
  "/images/avatars/student-3.png",
  "/images/avatars/student-4.png",
];

export default function CourseDiscoverySection() {
  const [selectedFilter, setSelectedFilter] = useState("Featured");

  const filteredCourses =
    selectedFilter === "Featured"
      ? COURSES
      : COURSES.filter((course) => course.category === selectedFilter);


  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto">
          <h2 className="font-semibold text-[#040819] text-[28px] sm:text-[38px] lg:text-[44px] leading-[1.2] font-heading tracking-tight">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-[#82868e] text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.6] font-body max-w-[900px] mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from
            technology to the arts, and make a difference in your career and
            life.
          </p>
        </div>

        {/* Category Filter Pills (3 Rows) */}
        <div className="mt-9 sm:mt-11 flex flex-col items-center gap-2.5 sm:gap-3">
          {FILTER_ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-2 sm:gap-2.5"
            >
              {row.map((item) => {
                const active = selectedFilter === item;
                const isMore = item === "+ More";

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      if (!isMore) {
                        setSelectedFilter(item);
                      }
                    }}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 ${active
                        ? "bg-lime-brand text-black shadow-xs"
                        : isMore
                          ? "bg-transparent text-primary font-semibold hover:underline"
                          : "bg-[#f5f5f5] text-[#4b4c53] hover:text-black border border-[#f5f5f5]"
                      }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* 6 Course Cards Grid */}
        <div className="mt-11 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-[22px] p-3.5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Card Thumbnail Image */}
              <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Frosted badges row inside image */}
                <div className="absolute inset-x-2 bottom-2.5 flex items-center justify-between gap-1.5 px-1">
                  <span className="bg-[#f6f6f6]/60 backdrop-blur-md text-[#4f4f4f] text-[12px] font-medium px-2.5 py-1 rounded-3xl whitespace-nowrap">
                    {course.lessons}
                  </span>
                  <span className="bg-[#f6f6f6]/60 backdrop-blur-md text-[#4f4f4f] text-[12px] font-medium px-2.5 py-1 rounded-3xl whitespace-nowrap">
                    {course.duration}
                  </span>
                  <span className="bg-[#f6f6f6]/60 backdrop-blur-md text-[#4f4f4f] text-[12px] font-medium px-2.5 py-1 rounded-3xl whitespace-nowrap">
                    {course.comments}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-4 px-2 pb-2">
                {/* Title & Rating */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-gray-950 text-[20px] leading-[1.3] font-heading group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[18px] text-[#4f4f4f] shrink-0 font-normal font-body">
                    <span>{course.rating.toFixed(1)}</span>
                    <FaStar className="w-3.75 h-3.75 text-[#ced0d3]" />
                  </div>
                </div>

                {/* Instructor */}
                <p className="mt-1 text-xs text-[#4f4f4f] font-normal font-body">
                  by <span className="text-primary">{course.instructor}</span>
                </p>

                {/* Level badge & Avatar stack */}
                <div className="mt-3.5 flex items-center gap-3 pt-1">
                  {/* Level Pill */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-3xl bg-[#f5f5f6] text-gray-600 text-[11px] font-medium font-body">
                    <BsBarChartFill className="w-2.5 h-2.5 text-[#4b4c53]" />
                    <span className="text-[#4b4c53]">{course.level}</span>
                  </div>

                  {/* Avatar Stack */}
                  <div className="flex items-center -space-x-2">
                    {STUDENT_AVATARS.map((src, idx) => (
                      <div
                        key={idx}
                        className="relative w-8 h-8 rounded-full border border-white overflow-hidden bg-gray-200 shrink-0 shadow-2xs"
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
                    <div className="relative w-8 h-8 rounded-full bg-lime-brand text-gray-950 text-[8px] font-bold flex items-center justify-center border border-white shrink-0 font-heading">
                      26+
                    </div>
                  </div>
                </div>

                {/* Price Divider & Value */}
                <div className="mt-3.5 pt-3 border-t border-gray-100 flex items-baseline gap-1.5">
                  <span className="font-semibold text-primary text-[20px] font-heading tracking-tight">
                    {course.price}
                  </span>
                  <span className="text-gray-700 text-xs font-normal font-body">
                    /lifetime
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
