"use client";

import React, { useState } from "react";
import CourseCard from "@/components/shared/CourseCard";
import { CourseItem } from "@/types/course";

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
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
