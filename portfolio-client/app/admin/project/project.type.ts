export interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;

  thumbnail: string;
  images: string[];
  videoDemo?: string;

  technologies: string[];
  stackType?: "frontend" | "backend" | "fullstack" | "mobile";

  liveLink?: string;
  githubClient?: string;
  githubServer?: string;

  features: string[];
  challenges: string[];
  solutions: string[];

  status: "ongoing" | "completed" | "planned";
  featured: boolean;
}