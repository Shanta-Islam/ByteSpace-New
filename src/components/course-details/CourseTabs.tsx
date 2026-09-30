"use client";

import React from "react";

export type CourseTabType = "about" | "lesson" | "reviews";

interface CourseTabsProps {
  activeTab: CourseTabType;
  onTabChange: (tab: CourseTabType) => void;
  className?: string;
}

const TABS: { id: CourseTabType; label: string }[] = [
  { id: "about", label: "About" },
  { id: "lesson", label: "Lesson" },
  { id: "reviews", label: "Reviews" },
];

export default function CourseTabs({
  activeTab,
  onTabChange,
  className = "",
}: CourseTabsProps) {
  return (
    <nav
      role="tablist"
      aria-label="Course Sections"
      className={`flex items-center gap-2.5 pt-2 mt-16 ${className}`}
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            id={`course-tab-${tab.id}`}
            role="tab"
            aria-selected={isActive}
            aria-controls={`course-tabpanel-${tab.id}`}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`px-6 py-2 rounded-3xl text-xs sm:text-[14px] lg:text-[16px] font-medium transition-all cursor-pointer ${
              isActive
                ? "bg-lime-brand text-[#242528] shadow-xs"
                : "bg-[#f5f5f6] text-[#4f4f4f] hover:text-black hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
