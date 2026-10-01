"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import StarRating from "@/components/shared/StarRating";
import { CourseReviewItem, RatingBreakdownItem } from "@/types/course";

interface CourseReviewsTabProps {
  averageRating: number;
  distribution: RatingBreakdownItem[];
  reviews: CourseReviewItem[];
  className?: string;
}

const FILTER_OPTIONS = [
  { value: "all", label: "All rating" },
  { value: "5", label: "★ 5" },
  { value: "4", label: "★ 4" },
  { value: "3", label: "★ 3" },
  { value: "2", label: "★ 2" },
  { value: "1", label: "★ 1" },
];

export default function CourseReviewsTab({
  averageRating,
  distribution,
  reviews,
  className = "",
}: CourseReviewsTabProps) {
  const [reviewFilter, setReviewFilter] = useState("all");

  const filteredReviews = useMemo(() => {
    if (reviewFilter === "all") return reviews;
    const targetRating = Number(reviewFilter);
    return reviews.filter((rev) => Math.round(rev.rating) === targetRating);
  }, [reviews, reviewFilter]);

  return (
    <div
      id="course-tabpanel-reviews"
      role="tabpanel"
      aria-labelledby="course-tab-reviews"
      className={`flex flex-col gap-9 pt-2 ${className}`}
    >
      {/* 1. Header & Intro */}
      <div>
        <h2 className="font-semibold text-black text-[20px] font-heading tracking-tight mb-2">
          What Learners Are Saying
        </h2>
        <p className="text-[#4b4c53] text-[14px] sm:text-[16px] leading-relaxed font-body">
          Discover what our learners have to say about their experience. Read
          reviews and ratings from individuals who have embarked on the
          transformative journey of mastering digital asset creation.
        </p>
      </div>

      {/* 2. Rating Summary Card */}
      <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-100 shadow-2xs flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        {/* Left Ratings Box */}
        <div className="bg-lime-brand rounded-2xl p-6 text-center w-36 sm:w-40 shrink-0">
          <span className="text-[14px] font-semibold text-[#242528] block">
            Ratings
          </span>
          <span className="text-4xl font-semibold text-[#242528] font-heading mt-1 block">
            {averageRating.toFixed(1)}
          </span>
        </div>

        {/* Right Rating Breakdown Bars */}
        <div className="flex-1 w-full space-y-2">
          {distribution.map((row) => (
            <div
              key={row.stars}
              className="flex items-center gap-3 text-xs text-gray-500"
            >
              <div
                className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={parseInt(row.fill, 10)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${row.stars} star reviews: ${row.count}`}
              >
                <div
                  className="h-full bg-lime-brand rounded-full transition-all duration-300"
                  style={{ width: row.fill }}
                />
              </div>

              {/* Star icons */}
              <StarRating
                rating={row.stars}
                maxRating={5}
                sizeClassName="w-3 h-3"
                activeColorClassName="text-[#4b4c53]"
                inactiveColorClassName="text-gray-200"
              />

              <span className="w-7 text-right font-medium text-gray-700">
                {row.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Individual Reviews with Active Filter */}
      <div>
        <h3 className="font-semibold text-[#242528] text-[20px] font-heading tracking-tight mb-4">
          Individual Reviews:
        </h3>

        {/* Filter Pills */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-4"
          role="group"
          aria-label="Filter reviews by rating"
        >
          {FILTER_OPTIONS.map((f) => {
            const isSelected = reviewFilter === f.value;
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => setReviewFilter(f.value)}
                aria-pressed={isSelected}
                className={`px-4 py-1.5 rounded-full text-base font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? "bg-lime-brand text-[#242528]"
                    : "bg-[#f5f5f6] text-[#4b4c53] hover:text-black"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Review Cards List */}
        <div className="space-y-4 mt-2">
          {filteredReviews.length === 0 ? (
            <div className="p-8 text-center bg-gray-50 rounded-2xl border border-gray-100 text-[#4b4c53]">
              No reviews found for this star rating filter.
            </div>
          ) : (
            filteredReviews.map((rev) => (
              <article
                key={rev.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-2xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                      <Image
                        src={rev.avatar}
                        alt={rev.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#242528] text-lg font-heading">
                        {rev.name}
                      </h4>
                      <span className="text-lg text-[#4b4c53] block font-body">
                        {rev.role}
                      </span>
                    </div>
                  </div>
                  <time className="text-base text-[#4b4c53] font-body">
                    {rev.time}
                  </time>
                </div>

                {/* Stars */}
                <div className="mb-3">
                  <StarRating
                    rating={rev.rating}
                    sizeClassName="w-3.5 h-3.5"
                    activeColorClassName="text-[#4b4c53]"
                    inactiveColorClassName="text-gray-200"
                  />
                </div>

                <p className="text-[#4b4c53] text-[13px] sm:text-[16px] leading-relaxed font-body">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
