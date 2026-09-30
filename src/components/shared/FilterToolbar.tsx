"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

interface FilterToolbarProps {
  selectedLevel: string;
  onLevelChange: (level: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedSort: string;
  onSortChange: (sort: string) => void;
  onFilterClick?: () => void;
  levels?: string[];
  categories?: string[];
  sortOptions?: string[];
  className?: string;
}

const DEFAULT_LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];

const DEFAULT_CATEGORIES = [
  "All",
  "UI/UX Design",
  "Drawing & Painting",
  "Marketing",
  "Social Media",
  "Creative Marketing",
  "Freelance & Entrepreneurship",
];

const DEFAULT_SORT_OPTIONS = [
  "Most relevant",
  "Highest Rated",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];

export default function FilterToolbar({
  selectedLevel,
  onLevelChange,
  selectedCategory,
  onCategoryChange,
  selectedSort,
  onSortChange,
  onFilterClick,
  levels = DEFAULT_LEVELS,
  categories = DEFAULT_CATEGORIES,
  sortOptions = DEFAULT_SORT_OPTIONS,
  className = "",
}: FilterToolbarProps) {
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const levelRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (levelRef.current && !levelRef.current.contains(event.target as Node)) {
        setLevelDropdownOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setCategoryDropdownOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hasActiveFilters = selectedLevel !== "All" || selectedCategory !== "All";

  return (
    <div className={`w-full flex flex-wrap items-center justify-between gap-3 ${className}`}>
      {/* Left Filter Actions */}
      <div className="flex items-center flex-wrap gap-2.5 sm:gap-3">
        {/* 1. Filter Button */}
        <button
          type="button"
          onClick={onFilterClick}
          className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 text-[13px] sm:text-[15px] font-medium transition-all duration-150 cursor-pointer shadow-2xs ${
            hasActiveFilters
              ? "border-lime-brand bg-lime-brand/10 text-black font-semibold"
              : "border-gray-200/90 text-[#4b4c53] hover:border-gray-300 hover:text-black bg-white"
          }`}
        >
          <Image
            src="/images/search/filter.svg"
            alt="filter"
            width={18}
            height={18}
          />
          <span>Filter</span>
          {hasActiveFilters && (
            <span className="w-2 h-2 rounded-full bg-lime-brand inline-block" />
          )}
        </button>

        {/* 2. Level Dropdown */}
        <div className="relative" ref={levelRef}>
          <button
            type="button"
            onClick={() => {
              setLevelDropdownOpen(!levelDropdownOpen);
              setCategoryDropdownOpen(false);
              setSortDropdownOpen(false);
            }}
            className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 text-[13px] sm:text-[15px] font-medium transition-all duration-150 cursor-pointer shadow-2xs ${
              selectedLevel !== "All"
                ? "border-black/30 bg-gray-50 text-black font-semibold"
                : "border-gray-200/90 text-[#4b4c53] hover:border-gray-300 hover:text-black bg-white"
            }`}
          >
            <Image
              src="/images/search/level.svg"
              alt="level"
              width={18}
              height={18}
            />
            <span>Level</span>
            {selectedLevel !== "All" && (
              <span className="text-[11px] bg-lime-brand text-black font-bold px-2 py-0.5 rounded-full ml-0.5">
                {selectedLevel}
              </span>
            )}
          </button>

          {levelDropdownOpen && (
            <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-30 animate-in fade-in zoom-in-95 duration-100">
              <div className="px-3 py-1.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                Filter by Level
              </div>
              {levels.map((lvl) => {
                const active = selectedLevel === lvl;
                return (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => {
                      onLevelChange(lvl);
                      setLevelDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between text-left px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                      active
                        ? "bg-lime-brand/20 text-black font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{lvl}</span>
                    {active && <FiCheck className="w-3.5 h-3.5 text-black" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* 3. Category Dropdown */}
        <div className="relative" ref={categoryRef}>
          <button
            type="button"
            onClick={() => {
              setCategoryDropdownOpen(!categoryDropdownOpen);
              setLevelDropdownOpen(false);
              setSortDropdownOpen(false);
            }}
            className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 text-[13px] sm:text-[15px] font-medium transition-all duration-150 cursor-pointer shadow-2xs ${
              selectedCategory !== "All"
                ? "border-black/30 bg-gray-50 text-black font-semibold"
                : "border-gray-200/90 text-[#4b4c53] hover:border-gray-300 hover:text-black bg-white"
            }`}
          >
            <Image
              src="/images/search/category.svg"
              alt="category"
              width={18}
              height={18}
            />
            <span>Category</span>
            {selectedCategory !== "All" && (
              <span className="text-[11px] bg-lime-brand text-black font-bold px-2 py-0.5 rounded-full ml-0.5 max-w-[100px] truncate">
                {selectedCategory}
              </span>
            )}
          </button>

          {categoryDropdownOpen && (
            <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-30 max-h-64 overflow-y-auto animate-in fade-in zoom-in-95 duration-100">
              <div className="px-3 py-1.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                Select Category
              </div>
              {categories.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      onCategoryChange(cat);
                      setCategoryDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between text-left px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                      active
                        ? "bg-lime-brand/20 text-black font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="truncate">{cat}</span>
                    {active && <FiCheck className="w-3.5 h-3.5 text-black shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Right Sort Dropdown */}
      <div className="relative" ref={sortRef}>
        <button
          type="button"
          onClick={() => {
            setSortDropdownOpen(!sortDropdownOpen);
            setLevelDropdownOpen(false);
            setCategoryDropdownOpen(false);
          }}
          className="inline-flex items-center gap-2 border border-gray-200/90 rounded-full px-4 py-2 text-[13px] sm:text-[15px] text-[#4b4c53] font-medium hover:border-gray-300 hover:text-black transition-all bg-white shadow-2xs cursor-pointer"
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
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-30 animate-in fade-in zoom-in-95 duration-100">
            <div className="px-3 py-1.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
              Sort By
            </div>
            {sortOptions.map((s) => {
              const active = selectedSort === s;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    onSortChange(s);
                    setSortDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between text-left px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                    active
                      ? "bg-lime-brand/20 text-black font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span>{s}</span>
                  {active && <FiCheck className="w-3.5 h-3.5 text-black" />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
