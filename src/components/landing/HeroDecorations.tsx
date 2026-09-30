import React from "react";
import Image from "next/image";

export default function HeroDecorations() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-10 lg:z-auto"
      aria-hidden="true"
    >
      {/* 1. Top-Left: Lime Wavy Spiral */}
      <div className="absolute -left-10 sm:-left-16 md:-left-20 lg:-left-0 top-[16%] sm:top-[18%] md:top-[20%] w-[150px] sm:w-[200px] md:w-[245px] lg:w-[267px] aspect-[267/387] select-none hidden lg:block">
        <Image
          src="/images/hero/hero-decoration-01.svg"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* 2. Mid-Left: White Small Spring */}
      <div className="absolute left-[5%] sm:left-[8%] md:left-[11%] lg:left-[12%] top-[39%] sm:top-[41%] md:top-[43%] w-[75px] sm:w-[105px] md:w-[130px] lg:w-[150px] aspect-square select-none hidden lg:block">
        <Image
          src="/images/hero/hero-decoration-03.svg"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* 3. Bottom-Left: White Torus / Donut */}
      <div className="absolute -left-8 sm:-left-12 md:-left-16 lg:-left-0 bottom-[1%] sm:bottom-[2%] md:bottom-[3%] w-[200px] sm:w-[260px] md:w-[310px] lg:w-[346px] aspect-square select-none hidden lg:block">
        <Image
          src="/images/hero/hero-decoration-06.svg"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* 4. Top-Right: Lime Angled Cylinder */}
      <div className="absolute -right-8 sm:-right-12 md:-right-14 lg:-right-0 top-[13%] sm:top-[15%] md:top-[17%] w-[135px] sm:w-[175px] md:w-[205px] lg:w-[225px] aspect-[213/372] select-none hidden lg:block">
        <Image
          src="/images/hero/hero-decoration-02.svg"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* 5. Mid-Right: White Pyramid / Tetrahedron */}
      <div className="absolute right-[7%] sm:right-[10%] md:right-[12%] lg:right-[13%] top-[37%] sm:top-[39%] md:top-[41%] w-[80px] sm:w-[110px] md:w-[135px] lg:w-[160px] aspect-square select-none hidden lg:block">
        <Image
          src="/images/hero/hero-decoration-04.svg"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* 6. Bottom-Right: White Spiral Tube */}
      <div className="absolute -right-8 sm:-right-12 md:-right-16 lg:right-3 bottom-[1%] sm:bottom-[2%] md:bottom-[3%] w-[175px] sm:w-[230px] md:w-[275px] lg:w-[310px] aspect-square select-none hidden lg:block">
        <Image
          src="/images/hero/hero-decoration-05.svg"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
