import React from "react";
import Image from "next/image";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "sarah",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar:
      "/images/testimonial/client-img1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: "james",
    name: "James L.",
    role: "Lifelong Learner",
    avatar:
      "/images/testimonial/client-img2.png",
    quote:
      "I\u2019ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: "alex",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar:
      "/images/testimonial/client-img3.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\u2019s fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden bg-white">
      {/* ========================================================================= */}
      {/* Ambient background glows using exact 3 Figma Ellipse SVGs                 */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* 1. Top-Center Lime Glow (Ellipse 12.svg): Centered glow radiating from top edge */}
        <div className="absolute -top-20 sm:-top-28 left-[38%] sm:left-[42%] lg:left-[44%] -translate-x-1/2 w-[550px] sm:w-[680px] lg:w-[752px] opacity-90">
          <Image
            src="/images/testimonial/Ellipse%2012.svg"
            alt=""
            width={752}
            height={574}
            unoptimized
            priority
            className="w-full h-auto"
          />
        </div>

        {/* 2. Top-Right Lime Glow (Ellipse 11.svg): Large vibrant lime glow entering from right edge */}
        <div className="absolute -top-16 sm:-top-10 -right-16 sm:-right-8 lg:right-0 w-[500px] sm:w-[580px] lg:w-[638px] opacity-95">
          <Image
            src="/images/testimonial/Ellipse%2011.svg"
            alt=""
            width={638}
            height={784}
            unoptimized
            priority
            className="w-full h-auto"
          />
        </div>

        {/* 3. Bottom-Left Blue Glow (Ellipse 8.svg): Soft blue glow in bottom-left corner */}
        <div className="absolute -bottom-24 sm:-bottom-16 -left-20 sm:-left-12 lg:left-0 w-[550px] sm:w-[680px] lg:w-[735px] opacity-80">
          <Image
            src="/images/testimonial/Ellipse%208.svg"
            alt=""
            width={735}
            height={675}
            unoptimized
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16">
          <div className="lg:col-span-5">
            <h2 className="font-bold text-black text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.15] font-heading tracking-tight">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-7 flex lg:justify-end">
            <p className="text-[#4f4f4f] text-[14px] sm:text-[15px] lg:text-[18px] leading-[1.65] font-body max-w-[540px]">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[28px] p-7 sm:p-8 lg:p-9 border border-gray-100/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start"
            >
              {/* Person Avatar */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 mb-5">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              {/* Person Info */}
              <div className="mb-5">
                <h3 className="font-bold text-black text-[19px] sm:text-[20px] font-heading leading-tight">
                  {item.name}
                </h3>
                <span className="block mt-1 text-[14px] sm:text-[15px] lg:text-[18px] font-medium text-[#003BE2] font-body">
                  {item.role}
                </span>
              </div>

              {/* Quote */}
              <p className="text-[#4f4f4f] text-[14px] sm:text-[15px] lg:text-[18px] leading-[1.65] font-body">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
