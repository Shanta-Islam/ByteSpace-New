export interface CourseItem {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  lessons: string;
  duration: string;
  comments: string;
  level: "Beginner" | "Intermediate" | "Advanced" | string;
  price: string;
  billingPeriod?: string;
  image: string;
  category: string;
  href?: string;
  enrolledCount?: string;
  studentAvatars?: string[];
}

export interface CreatorProfile {
  id: string;
  name: string;
  tagline: string;
  role: string;
  bioParagraphs: string[];
  avatarUrl: string;
  productsCount: number;
  followersCount: number;
  isFollowing?: boolean;
}

export interface CourseLessonModule {
  id: string;
  title: string;
  desc: string;
}

export interface CourseReviewItem {
  id: string;
  name: string;
  role: string;
  time: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface RatingBreakdownItem {
  stars: number;
  fill: string;
  count: number;
}

export interface CourseDetailData {
  id: string;
  title: string;
  subtitle: string;
  instructor: string;
  instructorRole?: string;
  instructorAvatar?: string;
  instructorBioSnippet?: string;
  level: string;
  rating: number;
  reviewCount: number;
  studentsCount: number | string;
  price: string;
  billingPeriod?: string;
  previewImage: string;
  descriptionParagraphs: string[];
  sneakPeekImages: string[];
  keyPoints: string[];
  modules: CourseLessonModule[];
  lessonCount: number;
  totalDuration: string;
  sampleLessons: { title: string; duration: string }[];
  learningProgress: number;
  ratingsBreakdown: {
    average: number;
    distribution: RatingBreakdownItem[];
  };
  reviews: CourseReviewItem[];
  features: string[];
}
