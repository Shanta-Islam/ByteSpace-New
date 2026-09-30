"use client"
import Image from "next/image";
import React from "react";


export default function PartnersLogoStrip() {
  const logos = [
    {
      src: "/images/partner/img-1.png",
      alt: "Partner logo 1",
    },
    {
      src: "/images/partner/img-2.png",
      alt: "Partner logo 2",
    },
    {
      src: "/images/partner/img-3.png",
      alt: "Partner logo 3",
    },
    {
      src: "/images/partner/img-4.png",
      alt: "Partner logo 4",
    },
    {
      src: "/images/partner/img-5.png",
      alt: "Partner logo 5",
    },
  ];
  return (
    <section className="w-full bg-[#f5f5f6] border-b border-gray-100 py-9 sm:py-11">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 opacity-75 hover:opacity-100 transition-opacity duration-300">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={45}
                className="w-auto h-[32px] sm:h-[38px] md:h-[42px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
