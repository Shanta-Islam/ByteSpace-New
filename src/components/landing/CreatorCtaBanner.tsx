import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CreatorCtaBanner() {
  return (
    <section className="relative w-full bg-primary py-20 sm:py-24 lg:py-28 overflow-hidden selection:bg-lime-brand selection:text-black">
      {/* Seamless Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none bg-blueprint-grid opacity-90"
        aria-hidden="true"
      />

      {/* Floating 3D Geometric Decorations */}
      {/* 1. Top-Left: Lime Wavy Spiral */}
      <div className="absolute top-[-23%] w-30 sm:w-42 lg:w-96.25 aspect-267/387 select-none pointer-events-none z-0">
        <Image
          src="/images/cta_banner/frame.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* 2. Mid-Left: White Pyramid / Tetrahedron */}
      <div className="absolute left-[-2%] bottom-[14%] w-[65px] sm:w-[95px] lg:w-[188px] aspect-square select-none pointer-events-none z-0">
        <Image
          src="/images/cta_banner/frame-5.svg"
          alt=""
          fill
          className="object-contain "
        />
      </div>

      {/* 3. Bottom-Left: Lime Donut / Torus */}
      <div className="absolute left-[11%] bottom-[-16%] w-[140px] sm:w-[342px] aspect-square select-none pointer-events-none z-0 brightness-110">
        <Image
          src="/images/cta_banner/frame-7.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* 4. Top-Right: Lime Triangle / Cylinder */}
      <div className="absolute right-[16%] top-[5%] sm:top-0 w-[90px] sm:w-[188px] aspect-square select-none pointer-events-none z-0">
        <Image
          src="/images/cta_banner/Frame-3.svg"
          alt=""
          fill
          className="object-contain "
        />
      </div>

      {/* 5. Far Top-Right: White Cylinder */}
      <div className="absolute -right-0 top-1.5 w-[110px] sm:w-[250px] aspect-[213/372] select-none pointer-events-none z-0">
        <Image
          src="/images/cta_banner/frame-4.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* 6. Bottom-Right: Lime Wavy Spiral */}
      <div className="absolute -right-8 bottom-[-26%] w-[130px] sm:w-[305px] aspect-[267/387] select-none pointer-events-none z-0 rotate-6">
        <Image
          src="/images/cta_banner/frame-6.svg"
          alt=""
          fill
          className="object-contain "
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[964px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white font-semibold text-[32px] sm:text-[42px] lg:text-[44px] leading-[1.18] font-heading tracking-tight">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        <p className="mt-5 text-[#f5f5f6] text-[14px] sm:text-[15px] lg:text-[18px] sm:leading-[1.7] leading-relaxed font-body max-w-[964px] mx-auto">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <div className="mt-8 sm:mt-10">
          <Link
            href="/register?role=creator"
            className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#D4FB20] hover:bg-[#c2e917] active:scale-[0.98] text-gray-950 font-medium text-sm sm:text-[15px] sm:text-[18px] font-heading tracking-tight transition-all duration-200 cursor-pointer"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
