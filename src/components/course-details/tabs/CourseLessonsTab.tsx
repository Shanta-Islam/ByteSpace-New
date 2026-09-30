import React from "react";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { CourseLessonModule } from "@/types/course";

interface CourseLessonsTabProps {
  modules: CourseLessonModule[];
  learningProgress?: number;
  className?: string;
}

export default function CourseLessonsTab({
  modules,
  learningProgress = 55,
  className = "",
}: CourseLessonsTabProps) {
  return (
    <div
      id="course-tabpanel-lesson"
      role="tabpanel"
      aria-labelledby="course-tab-lesson"
      className={`flex flex-col gap-9 pt-2 ${className}`}
    >
      {/* 1. Explore the Modules Heading */}
      <div>
        <h2 className="font-medium text-black text-[20px] font-heading tracking-tight mb-2">
          Explore the Modules
        </h2>
        <p className="text-[#4b4c53] text-[14px] sm:text-[16px] leading-relaxed font-body">
          Immerse yourself in the course content as we break down each module
          into comprehensive lessons, providing practical insights and hands-on
          experiences.
        </p>
      </div>

      {/* 2. Lesson Modules List */}
      <div>
        <h3 className="font-semibold text-[#242528] text-[20px] font-heading tracking-tight mb-5">
          Lesson List
        </h3>
        <ol className="space-y-4 list-none p-0 m-0">
          {modules.map((mod) => (
            <li
              key={mod.id}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 transition-colors shadow-2xs"
            >
              <div
                className="w-10 h-10 rounded-full bg-lime-brand flex items-center justify-center shrink-0 mt-0.5"
                aria-hidden="true"
              >
                <HiOutlineVideoCamera className="w-5 h-5 text-gray-950" />
              </div>
              <div>
                <h4 className="font-medium text-[#242528] text-[16px] font-heading">
                  {mod.title}
                </h4>
                <p className="mt-1 text-[#4b4c53] text-[13px] sm:text-[16px] leading-relaxed font-body">
                  {mod.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* 3. Lesson Content Description */}
      <div>
        <h3 className="font-semibold text-[#242528] text-[20px] font-heading tracking-tight mb-2">
          Lesson Content
        </h3>
        <p className="text-[#4b4c53] text-[14px] sm:text-[16px] leading-relaxed font-body">
          Engage with each lesson through captivating video content, detailed
          textual explanations, and interactive elements. Download resources,
          complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      {/* 4. Lesson Progress Tracking */}
      <div>
        <h3 className="font-semibold text-[#242528] text-[20px] font-heading tracking-tight mb-2">
          Lesson Progress Tracking
        </h3>
        <p className="text-[#4b4c53] text-[14px] sm:text-[16px] leading-relaxed font-body mb-4">
          Witness your growth as you complete lessons, with an intuitive
          progress tracking feature guiding you through your learning journey.
        </p>

        <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 bg-white shadow-2xs max-w-xl">
          <span className="text-[14px] font-medium text-[#242528] block mb-1">
            Learning Progress
          </span>
          <span className="text-4xl font-semibold font-heading text-[#242528] block mb-3">
            {learningProgress}%
          </span>
          <div
            className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={learningProgress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Course completion progress"
          >
            <div
              className="h-full bg-lime-brand rounded-full transition-all duration-500"
              style={{ width: `${learningProgress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
