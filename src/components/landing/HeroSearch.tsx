"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

interface HeroSearchProps {
  onSearch?: (query: string) => void;
  className?: string;
}

export default function HeroSearch({ onSearch, className = "" }: HeroSearchProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    } else {
      router.push(`/courses${query ? `?q=${encodeURIComponent(query)}` : ""}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative z-20 flex items-center justify-center gap-2.5 sm:gap-3 w-full max-w-[581px] mx-auto px-4 ${className}`}
    >
      {/* Input Pill Box */}
      <div className="flex-1 flex items-center gap-3 bg-white rounded-full px-5 py-3 sm:py-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
        <FiSearch className="w-4 h-4 text-gray-400 shrink-0 stroke-[2.2]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          className="w-full bg-transparent placeholder:text-[#b0b0b0] text-[13px] sm:text-sm lg:text-lg font-normal outline-none border-none ring-0 focus:ring-0"
        />
      </div>

      {/* Action Button Pill */}
      <button
        type="submit"
        className="h-[46px] sm:h-[49px] px-6 sm:px-7 rounded-full bg-lime-brand hover:bg-[#c5ec19] active:scale-[0.98] transition-all duration-150 text-gray-950 font-medium sm:font-semibold text-xs sm:text-sm shrink-0  cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
