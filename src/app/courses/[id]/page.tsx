"use client";

import React, { useState } from "react";
import { getCourseDetails } from "@/data/mockCourseDetails";
import CourseHero from "@/components/course-details/CourseHero";
import CourseMediaPreview from "@/components/course-details/CourseMediaPreview";
import CourseTabs, { CourseTabType } from "@/components/course-details/CourseTabs";
import CourseAboutTab from "@/components/course-details/tabs/CourseAboutTab";
import CourseLessonsTab from "@/components/course-details/tabs/CourseLessonsTab";
import CourseReviewsTab from "@/components/course-details/tabs/CourseReviewsTab";
import CourseSidebar from "@/components/course-details/CourseSidebar";

interface CourseDetailsPageProps {
  params?: Promise<{ id?: string }> | { id?: string };
}

export default function CourseDetailsPage({ params }: CourseDetailsPageProps) {
  // Support both Next.js 15+ Promise params and legacy synchronous params
  const resolvedParams = params
    ? params instanceof Promise
      ? React.use(params)
      : params
    : undefined;

  const course = getCourseDetails(resolvedParams?.id);
  const [activeTab, setActiveTab] = useState<CourseTabType>("about");

  return (
    <main className="w-full min-h-screen bg-white flex flex-col selection:bg-lime-brand selection:text-black">
      {/* 1. Hero Banner with Course Metadata & Share Action */}
      <CourseHero course={course} />

      {/* 2. Main Course Content & Sidebar Enrollment Card */}
      <section className="relative z-30 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[280px] sm:-mt-[480px] lg:-mt-[520px] pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Media Preview, Tab Switcher, and Active Tab Content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <CourseMediaPreview
              imageSrc={course.previewImage}
              alt={`${course.title} Preview`}
            />

            <CourseTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            {activeTab === "about" && (
              <CourseAboutTab
                descriptionParagraphs={course.descriptionParagraphs}
                sneakPeekImages={course.sneakPeekImages}
                keyPoints={course.keyPoints}
              />
            )}

            {activeTab === "lesson" && (
              <CourseLessonsTab
                modules={course.modules}
                learningProgress={course.learningProgress}
              />
            )}

            {activeTab === "reviews" && (
              <CourseReviewsTab
                averageRating={course.ratingsBreakdown.average}
                distribution={course.ratingsBreakdown.distribution}
                reviews={course.reviews}
              />
            )}
          </div>

          {/* Right Column: Sticky Enrollment & Instructor Card */}
          <div className="lg:col-span-4">
            <CourseSidebar
              course={course}
              onViewMoreLessons={() => setActiveTab("lesson")}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
