"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CourseCard from "@/components/shared/CourseCard";
import { CourseItem } from "@/types/course";

const BASE_COURSES: CourseItem[] = [
  {
    id: "figma-basic-1",
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
    id: "digital-asset-1",
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    category: "Drawing & Painting",
    image: "/images/course_discovery/img-2.jpg",
  },
  {
    id: "big-data-1",
    title: "The Power of Big Data",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    category: "Marketing",
    image: "/images/course_discovery/img-3.jpg",
  },
  {
    id: "productivity-1",
    title: "Balancing Productivity and...",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    category: "Creative Marketing",
    image: "/images/course_discovery/img-4.jpg",
  },
  {
    id: "money-management-1",
    title: "Mastering Money Manage...",
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
    id: "startup-success-1",
    title: "From Idea to Startup Succ...",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    category: "Social Media",
    image: "/images/course_discovery/img-6.jpg",
  },
];

const ALL_COURSES: CourseItem[] = [
  ...BASE_COURSES.map((c, i) => ({ ...c, id: `${c.id}-r1-${i}` })),
  ...BASE_COURSES.map((c, i) => ({ ...c, id: `${c.id}-r2-${i}` })),
  ...BASE_COURSES.map((c, i) => ({ ...c, id: `${c.id}-r3-${i}` })),
];

const STUDENT_AVATARS = [
  "/images/avatars/student-1.png",
  "/images/avatars/student-2.png",
  "/images/avatars/student-3.png",
  "/images/avatars/student-4.png",
];

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export default function CoursesSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [selectedType, setSelectedType] = useState("Courses");
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Most relevant");
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);


  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "Featured" || course.category === selectedCategory;

      const matchesLevel =
        selectedLevel === "All" || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchQuery, selectedCategory, selectedLevel]);

  return (
    <main className="w-full min-h-screen bg-white flex flex-col selection:bg-lime-brand selection:text-black">
      {/* ========================================================================= */}
      {/* 1. HERO & SEARCH BANNER (Blue background with Blueprint Grid)             */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-primary overflow-hidden pb-14 sm:pb-16 lg:pb-20">
        {/* Seamless Blueprint Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none bg-blueprint-grid opacity-90"
          aria-hidden="true"
        />

        {/* Hero Title & Search Form */}
        <div className="relative z-20 max-w-[850px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 text-center">
          <h1 className="text-[#f5f5f6] font-medium text-[36px] font-heading tracking-tight leading-tight">
            Find Your Next Course
          </h1>

          {/* Search Box with Courses Dropdown Pill */}
          <div className="mt-7 sm:mt-9 max-w-[461px] mx-auto relative flex items-center gap-2">
            <div className="w-full flex items-center bg-white rounded-3xl pl-5 pr-2 py-1.5 sm:py-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              {/* Search Icon */}
              <FiSearch className="w-4 h-4 text-gray-400 shrink-0 stroke-[2.2]" />

              {/* Text Input */}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full bg-transparent pl-3 pr-2 text-[#82868e] placeholder:text-gray-400 text-[14px] sm:text-[15px] lg:text-[18px]  font-normal outline-none border-none ring-0 focus:ring-0"
              />
            </div>
            {/* Lime Category/Type Pill Button */}
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}
                className="inline-flex items-center gap-2 bg-lime-brand hover:bg-[#cbf702] active:scale-[0.98] transition-all text-[#242528] font-medium text-[13px] sm:text-[15px] px-4 py-2.5 rounded-3xl cursor-pointer shadow-xs"
              >
                <span>{selectedType}</span>
                <FiChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              {/* Dropdown Menu */}
              {typeDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-40 text-left">
                  {["Courses", "Creators", "Topics"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setSelectedType(item);
                        setTypeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${selectedType === item
                        ? "bg-lime-brand/20 text-black font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FILTER TOOLBAR & CATEGORY PILLS                                        */}
      {/* ========================================================================= */}
      <section className="w-full bg-white pt-8 sm:pt-10 pb-6">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Row 1: Filter Buttons (Left) & Sort (Right) */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5">
            {/* Left Filter Actions */}
            <div className="flex items-center flex-wrap gap-2.5 sm:gap-3">
              {/* 1. Filter Button */}
              <button
                type="button"
                className="inline-flex items-center gap-2 border border-gray-200/90 rounded-3xl px-4 py-2 text-[13px] sm:text-[16px] text-[#4b4c53] font-medium hover:border-gray-300 hover:text-black transition-all bg-white shadow-2xs cursor-pointer"
              >
                <Image
                  src="/images/search/filter.svg"
                  alt="filter"
                  width={18}
                  height={18}
                />
                <span>Filter</span>
              </button>

              {/* 2. Level Button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLevelDropdownOpen(!levelDropdownOpen)}
                  className="inline-flex items-center gap-2 border border-gray-200/90 rounded-3xl px-4 py-2 text-[13px] sm:text-[16px] text-[#4b4c53] font-medium hover:border-gray-300 hover:text-black transition-all bg-white shadow-2xs cursor-pointer"
                >
                  <Image
                    src="/images/search/level.svg"
                    alt="level"
                    width={18}
                    height={18}
                  />
                  <span>Level</span>
                  {selectedLevel !== "All" && (
                    <span className="text-xs bg-lime-brand text-black font-bold px-1.5 py-0.5 rounded-full">
                      {selectedLevel}
                    </span>
                  )}
                </button>

                {levelDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-40 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-30">
                    {["All", "Beginner", "Intermediate", "Advanced"].map(
                      (lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => {
                            setSelectedLevel(lvl);
                            setLevelDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${selectedLevel === lvl
                            ? "bg-lime-brand/20 text-black font-semibold"
                            : "text-gray-700 hover:bg-gray-50"
                            }`}
                        >
                          {lvl}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* 3. Category Button */}
              <button
                type="button"
                className="inline-flex items-center gap-2 border border-gray-200/90 rounded-3xl px-4 py-2 text-[13px] sm:text-[16px] text-[#4b4c53] font-medium hover:border-gray-300 hover:text-black transition-all bg-white shadow-2xs cursor-pointer"
              >
                <Image
                  src="/images/search/category.svg"
                  alt="category"
                  width={18}
                  height={18}
                />
                <span>Category</span>
              </button>
            </div>

            {/* Right Sort Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="inline-flex items-center gap-2 border border-gray-200/90 rounded-3xl px-4 py-2 text-[13px] sm:text-[16px] text-[#4b4c53] font-medium hover:border-gray-300 hover:text-black transition-all bg-white shadow-2xs cursor-pointer"
              >
                <Image
                  src="/images/search/sort.svg"
                  alt="sort"
                  width={18}
                  height={18}
                />
                <span>{selectedSort}</span>
              </button>

              {sortDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-30">
                  {[
                    "Most relevant",
                    "Highest Rated",
                    "Newest",
                    "Price: Low to High",
                    "Price: High to Low",
                  ].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => {
                        setSelectedSort(s);
                        setSortDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${selectedSort === s
                        ? "bg-lime-brand/20 text-black font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Row 2: Category Filter Pills */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar pt-2 pb-1">
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${active
                    ? "bg-lime-brand text-black font-semibold shadow-xs"
                    : "bg-[#f5f5f6] text-[#4b4c53] hover:text-black hover:bg-gray-200"
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. COURSE CARDS GRID (18 cards in 3 columns)                              */}
      {/* ========================================================================= */}
      <section className="w-full pb-16 sm:pb-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No courses found matching your criteria.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Featured");
                  setSelectedLevel("All");
                }}
                className="mt-4 px-6 py-2.5 bg-lime-brand text-black font-semibold rounded-full text-sm cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}

          {/* ========================================================================= */}
          {/* 4. PAGINATION CONTROLS (< 1 2 3 4 5 >)                                    */}
          {/* ========================================================================= */}
          <div className="mt-14 sm:mt-18 flex items-center justify-center gap-2 sm:gap-3">
            {/* Prev Button */}
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              aria-label="Previous Page"
              className="w-11 h-11 rounded-full border border-[#ced0d3] flex items-center justify-center text-[#4b4c53] hover:border-gray-400 hover:text-black disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <FiChevronLeft className="w-4 h-4 stroke-[2.2]" />
            </button>

            {/* Page Numbers */}
            {[1, 2, 3, 4, 5].map((page) => {
              const active = currentPage === page;
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-[20px] transition-all cursor-pointer ${active
                    ? "font-semibold text-[#ced0d3] hover:bg-gray-100"
                    : "font-semibold text-[#242528] hover:text-black hover:bg-gray-50"
                    }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              type="button"
              disabled={currentPage === 5}
              onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
              aria-label="Next Page"
              className="w-11 h-11 rounded-full border border-[#ced0d3] flex items-center justify-center text-[#4b4c53] hover:border-gray-400 hover:text-black disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <FiChevronRight className="w-4 h-4 stroke-[2.2]" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
