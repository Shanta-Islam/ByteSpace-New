"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiCheck, FiUserPlus } from "react-icons/fi";
import { CreatorProfile } from "@/types/course";

interface CreatorHeroProps {
  creator: CreatorProfile;
  onFollowToggle?: (isFollowing: boolean) => void;
  className?: string;
}

export default function CreatorHero({
  creator,
  onFollowToggle,
  className = "",
}: CreatorHeroProps) {
  const [isFollowing, setIsFollowing] = useState(creator.isFollowing || false);
  const [followersCount, setFollowersCount] = useState(creator.followersCount);

  const handleFollowClick = () => {
    const nextState = !isFollowing;
    setIsFollowing(nextState);
    setFollowersCount((prev) => (nextState ? prev + 1 : prev - 1));
    if (onFollowToggle) {
      onFollowToggle(nextState);
    }
  };

  return (
    <section
      className={`relative w-full bg-primary overflow-hidden pb-12 sm:pb-14 lg:pb-16 selection:bg-lime-brand selection:text-black ${className}`}
    >
      {/* 1. Seamless Blueprint Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none bg-blueprint-grid opacity-90"
        aria-hidden="true"
      />

      {/* 2. Main Creator Header Container */}
      <div className="relative z-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32">
        {/* Creator Identity: Avatar + Name + Tag + Tagline */}
        <div className="flex items-start sm:items-center gap-4 sm:gap-6">
          {/* Avatar with rounded corners & soft border */}
          <div className="relative w-18 h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-white/20 shrink-0 bg-[#E88E81]">
            <Image
              src={creator.avatarUrl}
              alt={creator.name}
              fill
              priority
              sizes="(max-width: 640px) 72px, (max-width: 768px) 88px, 96px"
              className="object-cover"
            />
          </div>

          {/* Name, Creator Pill, and Tagline */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <h1 className="text-[#f5f5f6] font-semibold text-[24px] sm:text-[30px] md:text-[36px] font-heading tracking-tight leading-tight">
                {creator.name}
              </h1>
              <span className="bg-lime-brand text-[#242528] font-medium text-[11px] sm:text-[16px] px-3 py-0.5 sm:py-1 rounded-full shadow-2xs font-heading">
                {creator.role || "Creator"}
              </span>
            </div>
            <p className="mt-1 text-[#f5f5f6] text-xs sm:text-sm md:text-[18px] font-normal font-body">
              {creator.tagline}
            </p>
          </div>
        </div>

        {/* Bio Narrative Description */}
        <div className="mt-6 sm:mt-8 max-w-4xl text-[#f5f5f6] text-xs sm:text-sm md:text-[18px] leading-relaxed font-body space-y-2.5">
          {creator.bioParagraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {/* Bottom Metrics Pills & Follow Action CTA */}
        <div className="mt-7 sm:mt-9 flex flex-wrap items-center justify-between gap-4">
          {/* Left: Stats Badges (Products & Followers) */}
          <div className="flex items-center gap-3">
            {/* Products Badge */}
            <div className="inline-flex items-center gap-1.5 bg-white text-gray-900 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-xs transition-transform hover:scale-[1.02]">
              <span className="font-medium text-sm sm:text-lg font-heading text-primary">
                {creator.productsCount}
              </span>
              <span className="text-[#242528] text-xs sm:text-lg font-medium font-body">
                Products
              </span>
            </div>

            {/* Followers Badge */}
            <div className="inline-flex items-center gap-1.5 bg-white text-gray-900 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-xs transition-transform hover:scale-[1.02]">
              <span className="font-medium text-sm sm:text-lg font-heading text-primary">
                {followersCount}
              </span>
              <span className="text-[#242528] text-xs sm:text-lg font-medium font-body">
                Followers
              </span>
            </div>
          </div>

          {/* Right: Interactive Follow Action Button */}
          <button
            type="button"
            onClick={handleFollowClick}
            aria-pressed={isFollowing}
            className={`inline-flex items-center justify-center gap-2 font-medium text-xs sm:text-sm md:text-[18px] px-7 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-200 cursor-pointer font-heading active:scale-95 ${
              isFollowing
                ? "bg-white text-[#040819]  hover:bg-gray-100 shadow-md"
                : "bg-lime-brand hover:bg-[#cbf702] text-[#040819] shadow-md hover:shadow-lg"
            }`}
          >
            {isFollowing ? (
              <>
                <span>Following</span>
              </>
            ) : (
              <>
                <span>Follow</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
