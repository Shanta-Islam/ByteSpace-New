"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiShare2,
  FiPlay,
  FiFileText,
  FiVideo,
  FiAward,
  FiMessageSquare,
} from "react-icons/fi";
import { BsBarChartFill, BsCheckCircleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { HiUsers, HiVideoCamera } from "react-icons/hi2";

export default function CourseDetailsPage() {
  const [activeTab, setActiveTab] = useState<"about" | "lesson" | "reviews">("about");
  const [reviewFilter, setReviewFilter] = useState("all");
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="w-full min-h-screen bg-white flex flex-col selection:bg-lime-brand selection:text-black">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER WITH NAVIGATION                                            */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-primary pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
        {/* Seamless Blueprint Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none bg-blueprint-grid opacity-90"
          aria-hidden="true"
        />

        {/* Hero Course Header Info */}
        <div className="relative z-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-white font-bold text-[30px] sm:text-[38px] lg:text-[42px] font-heading leading-tight tracking-tight">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="mt-2.5 text-[#e5e6e8] text-[15px] sm:text-[17px] font-normal font-body">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="mt-2 text-sm text-[#e5e6e8]">
                by{" "}
                <span className="text-lime-brand font-semibold hover:underline cursor-pointer">
                  purepearl studio
                </span>
              </p>

              {/* Meta Badges Row */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <div className="inline-flex items-center gap-2 bg-white text-gray-800 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium shadow-2xs">
                  <BsBarChartFill className="w-3.5 h-3.5 text-primary" />
                  <span>Intermediate</span>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-white text-gray-800 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium shadow-2xs">
                  <FaStar className="w-3.5 h-3.5 text-amber-400" />
                  <span>4.8 (172 reviews)</span>
                </div>

                <div className="inline-flex items-center gap-2 bg-white text-gray-800 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium shadow-2xs">
                  <HiUsers className="w-4 h-4 text-primary" />
                  <span>199 Students</span>
                </div>
              </div>
            </div>

            {/* Share Pill Button */}
            <div className="shrink-0 self-start">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-lime-brand hover:bg-[#c5ec19] text-black font-semibold text-xs sm:text-[13px] px-5 py-2.5 rounded-full transition-all duration-150 shadow-xs active:scale-95 cursor-pointer"
              >
                <FiShare2 className="w-4 h-4 stroke-[2.2]" />
                <span>{copied ? "Copied!" : "Share"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN COURSE CONTENT & SIDEBAR ENROLLMENT                                */}
      {/* ========================================================================= */}
      <section className="relative z-30 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 lg:-mt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ================= LEFT MAIN COLUMN ================= */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Video Player Preview Container */}
            <div className="relative w-full aspect-16/10 rounded-[28px] overflow-hidden bg-[#e6e8eb] shadow-xl border border-white/40 group">
              <Image
                src="/images/hero/hero-student.png"
                alt="Course Video Preview"
                fill
                priority
                className="object-cover object-top"
              />

              {/* Centered Frosted Play Button */}
              <button
                type="button"
                aria-label="Play course preview video"
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-gray-900 group-hover:scale-110 group-hover:bg-white/90 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.18)] cursor-pointer"
              >
                <FiPlay className="w-7 h-7 sm:w-8 sm:h-8 fill-gray-900 ml-1" />
              </button>
            </div>

            {/* Tab Navigation (About / Lesson / Reviews) */}
            <div className="flex items-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setActiveTab("about")}
                className={`px-6 py-2 rounded-full text-xs sm:text-[14px] font-medium transition-all cursor-pointer ${
                  activeTab === "about"
                    ? "bg-lime-brand text-black font-semibold shadow-xs"
                    : "bg-[#f5f5f6] text-[#4b4c53] hover:text-black hover:bg-gray-200"
                }`}
              >
                About
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("lesson")}
                className={`px-6 py-2 rounded-full text-xs sm:text-[14px] font-medium transition-all cursor-pointer ${
                  activeTab === "lesson"
                    ? "bg-lime-brand text-black font-semibold shadow-xs"
                    : "bg-[#f5f5f6] text-[#4b4c53] hover:text-black hover:bg-gray-200"
                }`}
              >
                Lesson
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("reviews")}
                className={`px-6 py-2 rounded-full text-xs sm:text-[14px] font-medium transition-all cursor-pointer ${
                  activeTab === "reviews"
                    ? "bg-lime-brand text-black font-semibold shadow-xs"
                    : "bg-[#f5f5f6] text-[#4b4c53] hover:text-black hover:bg-gray-200"
                }`}
              >
                Reviews
              </button>
            </div>

            {/* ================= TAB 1: ABOUT ================= */}
            {activeTab === "about" && (
              <div className="flex flex-col gap-9 pt-2">
                {/* Description */}
                <div>
                  <h2 className="font-bold text-gray-950 text-[22px] font-heading tracking-tight mb-4">
                    Description
                  </h2>
                  <div className="space-y-4 text-gray-600 text-[14px] sm:text-[15px] leading-[1.7] font-body">
                    <p>
                      Embark on an enlightening exploration into the world of
                      digital creation with our comprehensive course, &ldquo;Build
                      Digital Assets: A Comprehensive Guide.&rdquo; This
                      transformative learning experience invites you to delve deep
                      into the intricacies of crafting impactful digital content.
                      From laying the groundwork with foundational concepts to
                      mastering advanced techniques, this guide is meticulously
                      curated to empower you with the skills essential for
                      navigating the dynamic landscape of digital asset creation.
                    </p>
                    <p>
                      In the initial modules, you&apos;ll establish a solid
                      foundation by immersing yourself in the foundational
                      concepts that form the backbone of digital asset creation.
                      Understand the fundamental elements that constitute
                      compelling digital content and gain proficiency in
                      leveraging these elements to communicate effectively in the
                      digital realm.
                    </p>
                    <p>
                      As you progress through the course, you&apos;ll ascend to
                      higher levels of expertise, delving into the nuances of
                      design principles that drive impactful creations. Uncover
                      the secrets behind effective visual communication, exploring
                      color theory, typography, and layout strategies that elevate
                      your digital assets to new heights. Engage in hands-on
                      exercises that reinforce your understanding, allowing you
                      to apply these principles in practical scenarios.
                    </p>
                  </div>
                </div>

                {/* Sneak Peek */}
                <div>
                  <h3 className="font-bold text-gray-950 text-[20px] font-heading tracking-tight mb-4">
                    Sneak Peek
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {[
                      "/images/course_discovery/img-1.jpg",
                      "/images/course_discovery/img-4.jpg",
                      "/images/course_discovery/img-3.jpg",
                      "/images/course_discovery/img-2.jpg",
                    ].map((src, i) => (
                      <div
                        key={i}
                        className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-100 shadow-2xs border border-gray-100 group"
                      >
                        <Image
                          src={src}
                          alt="Sneak peek thumbnail"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Points */}
                <div>
                  <h3 className="font-bold text-gray-950 text-[20px] font-heading tracking-tight mb-4">
                    Key Points
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      "Foundational Concept",
                      "Design Principles Mastery",
                      "Advanced Techniques in Digital Creation",
                      "Project Showcase and Critique",
                      "Optimizing for Various Platforms",
                      "Digital Asset Management Best Practices",
                      "Monetization Strategies",
                      "Capstone Project: Building Your Portfolio",
                    ].map((point, index) => (
                      <div key={index} className="flex items-center gap-2.5">
                        <BsCheckCircleFill className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-[14px] sm:text-[15px] text-gray-800 font-medium font-body">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB 2: LESSON ================= */}
            {activeTab === "lesson" && (
              <div className="flex flex-col gap-9 pt-2">
                {/* Explore the Modules */}
                <div>
                  <h2 className="font-bold text-gray-950 text-[22px] font-heading tracking-tight mb-2">
                    Explore the Modules
                  </h2>
                  <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed font-body">
                    Immerse yourself in the course content as we break down each
                    module into comprehensive lessons, providing practical
                    insights and hands-on experiences.
                  </p>
                </div>

                {/* Lesson List */}
                <div>
                  <h3 className="font-bold text-gray-950 text-[20px] font-heading tracking-tight mb-5">
                    Lesson List
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Module 1: Introduction to Digital Assets",
                        desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
                      },
                      {
                        title: "Module 2: Design Principles for Impact",
                        desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
                      },
                      {
                        title: "Module 4: User-Centric Design Strategies",
                        desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
                      },
                      {
                        title: "Module 5: Interactive Media and Engagement",
                        desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
                      },
                      {
                        title: "Module 6: Project Showcase and Critique",
                        desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
                      },
                      {
                        title: "Module 7: Optimizing Digital Assets for Various Platforms",
                        desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
                      },
                    ].map((mod, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 transition-colors shadow-2xs"
                      >
                        <div className="w-10 h-10 rounded-full bg-lime-brand flex items-center justify-center shrink-0 mt-0.5">
                          <HiVideoCamera className="w-5 h-5 text-gray-950" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-950 text-[16px] font-heading">
                            {mod.title}
                          </h4>
                          <p className="mt-1 text-gray-600 text-[13px] sm:text-[14px] leading-relaxed font-body">
                            {mod.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lesson Content Description */}
                <div>
                  <h3 className="font-bold text-gray-950 text-[20px] font-heading tracking-tight mb-2">
                    Lesson Content
                  </h3>
                  <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed font-body">
                    Engage with each lesson through captivating video content,
                    detailed textual explanations, and interactive elements.
                    Download resources, complete assignments, and test your
                    understanding with quizzes.
                  </p>
                </div>

                {/* Lesson Progress Tracking */}
                <div>
                  <h3 className="font-bold text-gray-950 text-[20px] font-heading tracking-tight mb-2">
                    Lesson Progress Tracking
                  </h3>
                  <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed font-body mb-4">
                    Witness your growth as you complete lessons, with an intuitive
                    progress tracking feature guiding you through your learning
                    journey.
                  </p>

                  <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 bg-white shadow-2xs max-w-xl">
                    <span className="text-xs font-medium text-gray-500 block mb-1">
                      Learning Progress
                    </span>
                    <span className="text-3xl font-bold font-heading text-black block mb-3">
                      55%
                    </span>
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-lime-brand rounded-full transition-all duration-500"
                        style={{ width: "55%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB 3: REVIEWS ================= */}
            {activeTab === "reviews" && (
              <div className="flex flex-col gap-9 pt-2">
                {/* What Learners Are Saying */}
                <div>
                  <h2 className="font-bold text-gray-950 text-[22px] font-heading tracking-tight mb-2">
                    What Learners Are Saying
                  </h2>
                  <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed font-body">
                    Discover what our learners have to say about their experience
                    with &ldquo;Build Digital Assets: A Comprehensive Guide.&rdquo;
                    Read reviews and ratings from individuals who have embarked on
                    the transformative journey of mastering digital asset creation.
                  </p>
                </div>

                {/* Rating Summary Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-100 shadow-2xs flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
                  {/* Left Ratings Box */}
                  <div className="bg-lime-brand rounded-2xl p-6 text-center w-36 sm:w-40 shrink-0">
                    <span className="text-xs font-semibold text-gray-800 block">
                      Ratings
                    </span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-black font-heading mt-1 block">
                      4.7
                    </span>
                  </div>

                  {/* Right Rating Breakdown Bars */}
                  <div className="flex-1 w-full space-y-2">
                    {[
                      { stars: 5, fill: "85%", count: 120 },
                      { stars: 4, fill: "50%", count: 120 },
                      { stars: 3, fill: "20%", count: 31 },
                      { stars: 2, fill: "10%", count: 10 },
                      { stars: 1, fill: "5%", count: 14 },
                    ].map((row) => (
                      <div key={row.stars} className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-lime-brand rounded-full"
                            style={{ width: row.fill }}
                          />
                        </div>
                        <div className="flex items-center gap-0.5 text-gray-400">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`w-3 h-3 ${
                                i < row.stars ? "text-gray-900" : "text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="w-7 text-right font-medium text-gray-700">
                          {row.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews */}
                <div>
                  <h3 className="font-bold text-gray-950 text-[20px] font-heading tracking-tight mb-4">
                    Individual Reviews:
                  </h3>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-4">
                    {["all", "5", "4", "3", "2", "1"].map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setReviewFilter(f)}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          reviewFilter === f
                            ? "bg-lime-brand text-black font-semibold"
                            : "bg-[#f5f5f6] text-[#4b4c53] hover:text-black"
                        }`}
                      >
                        {f === "all" ? "All rating" : `★ ${f}`}
                      </button>
                    ))}
                  </div>

                  {/* Review Cards List */}
                  <div className="space-y-4 mt-2">
                    {[
                      {
                        name: "PurePearl Studio",
                        role: "UI/UX Designer",
                        time: "a year ago",
                        avatar: "/images/avatars/student-1.png",
                        quote:
                          "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
                      },
                      {
                        name: "Albert Flores",
                        role: "UI/UX Designer",
                        time: "a year ago",
                        avatar: "/images/avatars/student-2.png",
                        quote:
                          "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
                      },
                      {
                        name: "Cody Fisher",
                        role: "UI/UX Designer",
                        time: "a year ago",
                        avatar: "/images/avatars/student-3.png",
                        quote:
                          "The project showcases and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
                      },
                      {
                        name: "Brooklyn Simmons",
                        role: "UI/UX Designer",
                        time: "a year ago",
                        avatar: "/images/avatars/student-4.png",
                        quote:
                          "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
                      },
                    ].map((rev, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-2xs"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                              <Image
                                src={rev.avatar}
                                alt={rev.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-950 text-sm font-heading">
                                {rev.name}
                              </h4>
                              <span className="text-xs text-gray-400 block font-body">
                                {rev.role}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-400 font-body">
                            {rev.time}
                          </span>
                        </div>

                        {/* Stars */}
                        <div className="flex items-center gap-1 text-gray-900 mb-3">
                          {[...Array(5)].map((_, idx) => (
                            <FaStar key={idx} className="w-3.5 h-3.5" />
                          ))}
                        </div>

                        <p className="text-gray-600 text-[13px] sm:text-[14px] leading-relaxed font-body">
                          &ldquo;{rev.quote}&rdquo;
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ================= RIGHT SIDEBAR ENROLLMENT CARD ================= */}
          <aside className="lg:col-span-4 sticky top-6">
            <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-gray-100 shadow-xl flex flex-col gap-6">
              {/* Header: Lessons summary */}
              <div>
                <h3 className="font-bold text-gray-950 text-[18px] sm:text-[20px] font-heading tracking-tight">
                  112 Lessons (24 hours)
                </h3>

                {/* Sample Lessons */}
                <div className="mt-4 space-y-2.5 text-xs sm:text-[13px]">
                  <div className="flex items-center justify-between text-gray-800">
                    <span className="truncate pr-2">01 Introduction to Digital Assets</span>
                    <span className="text-primary font-semibold shrink-0">12 mins</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-800">
                    <span className="truncate pr-2">02 Design Principles for Impact</span>
                    <span className="text-primary font-semibold shrink-0">21 mins</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-800">
                    <span className="truncate pr-2">03 Advanced Techniques in Digital Creation</span>
                    <span className="text-primary font-semibold shrink-0">16 mins</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab("lesson")}
                  className="mt-3 text-xs text-gray-400 hover:text-primary transition-colors cursor-pointer font-medium"
                >
                  95 more videos
                </button>
              </div>

              {/* Ready to dive in & Price */}
              <div>
                <p className="text-xs text-gray-500 font-body leading-relaxed mb-3">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="font-bold text-primary text-[28px] font-heading tracking-tight">
                    $25
                  </span>
                  <span className="text-gray-500 text-xs font-normal font-body">
                    /lifetime
                  </span>
                </div>

                {/* Enroll CTA */}
                <button
                  type="button"
                  className="w-full py-3.5 rounded-full bg-lime-brand hover:bg-[#c5ec19] active:scale-[0.98] text-black font-semibold text-[15px] transition-all duration-150 shadow-xs cursor-pointer text-center"
                >
                  Enroll Now
                </button>
              </div>

              {/* This course include */}
              <div className="pt-2 border-t border-gray-100">
                <h4 className="font-bold text-gray-950 text-sm font-heading mb-3">
                  This course include
                </h4>
                <div className="space-y-2.5 text-xs text-gray-600 font-medium">
                  <div className="flex items-center gap-2.5">
                    <FiFileText className="w-4 h-4 text-primary shrink-0" />
                    <span>Learning Resources</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FiVideo className="w-4 h-4 text-primary shrink-0" />
                    <span>Quality Lesson Videos</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FiAward className="w-4 h-4 text-primary shrink-0" />
                    <span>Certificate of Completion</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FiMessageSquare className="w-4 h-4 text-primary shrink-0" />
                    <span>Private Consultation</span>
                  </div>
                </div>
              </div>

              {/* Creator Profile */}
              <div className="pt-5 border-t border-gray-100 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-200 shrink-0">
                    <Image
                      src="/images/testimonial/client-img2.png"
                      alt="PurePearl Studio"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-950 text-sm font-heading">
                      PurePearl Studio
                    </h5>
                    <span className="text-xs text-gray-500 font-body">
                      Professional Creator
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 font-body">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <button
                  type="button"
                  className="self-start px-4 py-1.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:border-gray-400 hover:text-black transition-all cursor-pointer shadow-2xs"
                >
                  See Full Profile
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
