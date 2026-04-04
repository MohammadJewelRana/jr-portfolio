export interface IProject {
  // 🔹 Basic Info
  title: string;
  slug: string;
  category: string;
  description: string;

  // 🔹 Media
  thumbnail: string; // card image
  images?: string[]; // gallery
  videoDemo?: string; // optional demo video

  // 🔹 Tech Info
  technologies: string[];
  stackType?: "frontend" | "backend" | "fullstack" | "mobile";

  // 🔹 Links
  liveLink?: string;
  githubClient?: string;
  githubServer?: string;

  // 🔹 Project Details
  features?: string[]; // bullet points
  challenges?: string[];
  solutions?: string[];

  // 🔹 SEO + Routing
  metaTitle?: string;
  metaDescription?: string;

  // 🔹 Status
  status: "ongoing" | "completed" | "planned";

  // 🔹 Highlight Control
  featured?: boolean;
  priority?: number; // sorting (1 = top)

  // 🔹 Client / Business Info
  client?: string;
  duration?: string; // "2 months"
  teamSize?: number;

  // 🔹 Analytics (future use)
  views?: number;
  likes?: number;

  // 🔹 System
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}