import { CourseDetailData } from "@/types/course";

export const DEFAULT_COURSE_DETAILS: CourseDetailData = {
  id: "build-digital-asset",
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  instructor: "purepearl studio",
  instructorRole: "Professional Creator",
  instructorAvatar: "/images/testimonial/client-img2.png",
  instructorBioSnippet:
    "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  level: "Intermediate",
  rating: 4.8,
  reviewCount: 172,
  studentsCount: 199,
  price: "$25",
  billingPeriod: "/lifetime",
  previewImage: "/images/hero/hero-student.png",
  descriptionParagraphs: [
    "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, “Build Digital Assets: A Comprehensive Guide.” This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeekImages: [
    "/images/course_discovery/img-1.jpg",
    "/images/course_discovery/img-4.jpg",
    "/images/course_discovery/img-3.jpg",
    "/images/course_discovery/img-2.jpg",
  ],
  keyPoints: [
    "Foundational Concept",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  modules: [
    {
      id: "mod-1",
      title: "Module 1: Introduction to Digital Assets",
      desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      id: "mod-2",
      title: "Module 2: Design Principles for Impact",
      desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      id: "mod-3",
      title: "Module 4: User-Centric Design Strategies",
      desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      id: "mod-4",
      title: "Module 5: Interactive Media and Engagement",
      desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      id: "mod-5",
      title: "Module 6: Project Showcase and Critique",
      desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      id: "mod-6",
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ],
  lessonCount: 112,
  totalDuration: "24 hours",
  sampleLessons: [
    { title: "01 Introduction to Digital Assets", duration: "12 mins" },
    { title: "02 Design Principles for Impact", duration: "21 mins" },
    { title: "03 Advanced Techniques in Digital Creation", duration: "16 mins" },
  ],
  learningProgress: 55,
  ratingsBreakdown: {
    average: 4.7,
    distribution: [
      { stars: 5, fill: "85%", count: 720 },
      { stars: 4, fill: "50%", count: 120 },
      { stars: 3, fill: "20%", count: 21 },
      { stars: 2, fill: "10%", count: 12 },
      { stars: 1, fill: "5%", count: 16 },
    ],
  },
  reviews: [
    {
      id: "rev-1",
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "/images/avatars/student-1.png",
      rating: 5,
      quote:
        "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    },
    {
      id: "rev-2",
      name: "Albert Flores",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "/images/avatars/student-2.png",
      rating: 5,
      quote:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      id: "rev-3",
      name: "Cody Fisher",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "/images/avatars/student-3.png",
      rating: 4,
      quote:
        "The project showcases and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      id: "rev-4",
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "/images/avatars/student-4.png",
      rating: 5,
      quote:
        "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ],
  features: [
    "Learning Resources",
    "Quality Lesson Videos",
    "Certificate of Completion",
    "Private Consultation",
  ],
};

/**
 * Returns course details for a given course ID, falling back to DEFAULT_COURSE_DETAILS
 */
export function getCourseDetails(id?: string): CourseDetailData {
  if (!id) return DEFAULT_COURSE_DETAILS;
  // If exact match or variation, return default with ID or tailored title
  if (id === "figma-basic" || id === "figma-basic-1") {
    return {
      ...DEFAULT_COURSE_DETAILS,
      id,
      title: "Learn Figma from Basic: Modern UI/UX Masterclass",
      subtitle: "Master Components, Auto-Layout, and Interactive Prototyping",
      level: "Beginner",
      previewImage: "/images/course_discovery/img-1.jpg",
    };
  }
  if (id === "big-data" || id === "big-data-1") {
    return {
      ...DEFAULT_COURSE_DETAILS,
      id,
      title: "The Power of Big Data: Strategic Analytics",
      subtitle: "Transforming Raw Data into Actionable Business Intelligence",
      level: "Intermediate",
      previewImage: "/images/course_discovery/img-3.jpg",
    };
  }
  return {
    ...DEFAULT_COURSE_DETAILS,
    id,
  };
}
