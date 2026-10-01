"use client";

import React, { useState, useMemo } from "react";
import CreatorHero from "@/components/creator/CreatorHero";
import FilterToolbar from "@/components/shared/FilterToolbar";
import CourseGrid from "@/components/shared/CourseGrid";
import { DEFAULT_CREATOR, CREATOR_COURSES } from "@/data/mockCourses";

export default function CreatorProfilePage() {
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Most relevant");

  // Derive unique categories from creator's courses
  const categories = useMemo(() => {
    const set = new Set<string>();
    set.add("All");
    CREATOR_COURSES.forEach((c) => set.add(c.category));
    return Array.from(set);
  }, []);

  // Filter & sort creator courses
  const filteredCourses = useMemo(() => {
    let result = CREATOR_COURSES.filter((course) => {
      const matchesLevel =
        selectedLevel === "All" || course.level.toLowerCase() === selectedLevel.toLowerCase();
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;
      return matchesLevel && matchesCategory;
    });

    if (selectedSort === "Highest Rated") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "Price: Low to High") {
      result = [...result].sort(
        (a, b) =>
          parseFloat(a.price.replace(/[^0-9.]/g, "")) -
          parseFloat(b.price.replace(/[^0-9.]/g, ""))
      );
    } else if (selectedSort === "Price: High to Low") {
      result = [...result].sort(
        (a, b) =>
          parseFloat(b.price.replace(/[^0-9.]/g, "")) -
          parseFloat(a.price.replace(/[^0-9.]/g, ""))
      );
    }

    return result;
  }, [selectedLevel, selectedCategory, selectedSort]);

  const handleResetFilters = () => {
    setSelectedLevel("All");
    setSelectedCategory("All");
    setSelectedSort("Most relevant");
  };

  return (
    <main className="w-full min-h-screen bg-white flex flex-col selection:bg-lime-brand selection:text-black">
      {/* 1. Blue Header with Blueprint Grid & Creator Hero Details */}
      <CreatorHero creator={DEFAULT_CREATOR} />

      {/* 2. Filter & Sort Toolbar Section */}
      <section className="w-full bg-white pt-8 sm:pt-10 pb-6">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <FilterToolbar
            selectedLevel={selectedLevel}
            onLevelChange={setSelectedLevel}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedSort={selectedSort}
            onSortChange={setSelectedSort}
            categories={categories}
            onFilterClick={() => {
              // Quick toggle to show all if filtered, or toggle level
              if (selectedLevel !== "All" || selectedCategory !== "All") {
                handleResetFilters();
              }
            }}
          />
        </div>
      </section>

      {/* 3. Courses Grid (3 Columns) */}
      <section className="w-full pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <CourseGrid
            courses={filteredCourses}
            emptyMessage="No courses found matching the selected filters."
            onResetFilters={handleResetFilters}
            columns={3}
          />
        </div>
      </section>
    </main>
  );
}
