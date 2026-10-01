"use client";

import React from "react";
import CourseCard from "@/components/shared/CourseCard";
import { CourseItem } from "@/types/course";

interface CourseGridProps {
  courses: CourseItem[];
  emptyMessage?: string;
  onResetFilters?: () => void;
  className?: string;
  columns?: 2 | 3 | 4;
}

export default function CourseGrid({
  courses,
  emptyMessage = "No courses found matching your criteria.",
  onResetFilters,
  className = "",
  columns = 3,
}: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="w-full text-center py-16 sm:py-20 bg-gray-50/50 rounded-3xl border border-dashed border-gray-200">
        <p className="text-gray-500 text-base sm:text-lg font-medium">
          {emptyMessage}
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="mt-4 px-6 py-2.5 bg-lime-brand hover:bg-[#cbf702] text-black font-semibold rounded-full text-sm transition-all shadow-xs cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>
    );
  }

  const gridColsClass =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : columns === 4
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridColsClass} gap-6 lg:gap-7 ${className}`}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
