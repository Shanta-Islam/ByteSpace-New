import React from "react";
import Image from "next/image";

const CATEGORIES = [
  {
    id: "design",
    name: "Design",
    image: "/images/category_path/icon-1.png",
  },
  {
    id: "development",
    name: "Development",
    image: "/images/category_path/icon-2.png",
  },
  {
    id: "it-software",
    name: "IT & Software",
    image: "/images/category_path/icon-3.png",
  },
  {
    id: "business",
    name: "Business",
    image: "/images/category_path/icon-4.png",
  },
  {
    id: "marketing",
    name: "Marketing",
    image: "/images/category_path/icon-5.png",
  },
  {
    id: "photography",
    name: "Photography",
    image: "/images/category_path/icon-6.png",
  },
];

export default function CategoryPathsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[950px] mx-auto">
          <h2 className="font-semibold text-[#040819] text-[28px] sm:text-[38px] lg:text-[44px] leading-[1.2] font-heading tracking-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-[#82868e] text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.6] font-body max-w-[950px] mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring
            there&apos;s something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-5">
          {CATEGORIES.map((cat) => {
            return (
              <div
                key={cat.id}
                className="bg-white rounded-[22px] border border-[#c3d0d3] p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 group cursor-pointer aspect-square sm:aspect-auto sm:min-h-[160px]"
              >
                {/* Circular Lime Icon Badge */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-lime-brand flex items-center justify-center text-gray-950 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                {/* Category Name */}
                <span className="mt-3.5 whitespace-nowrap font-medium text-[#242528] text-[14px] sm:text-[15px] lg:text-[20px] font-heading group-hover:text-[#003BE2] transition-colors">
                  {cat.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
