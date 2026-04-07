export interface IBlog {
  // 🔹 Basic Info
  title: string;
  slug: string;
  excerpt: string;
  content: string;

  // 🔹 Media
  thumbnail: string;
  coverImage?: string;
  images?: string[];

  // 🔹 Author Info
  authorName?: string;
  authorImage?: string;

  // 🔹 Categorization
  category: string;
  tags?: string[];

  // 🔹 SEO
  metaTitle?: string;
  metaDescription?: string;

  // 🔹 Status
  status: "draft" | "published";
  featured?: boolean;

  // 🔹 Engagement
  views?: number;
  likes?: number;

  // 🔹 System
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}