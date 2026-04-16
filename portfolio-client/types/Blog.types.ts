export interface IBlog {
  _id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;

  thumbnail: string;
  coverImage?: string;
  images?: string[];

  authorName?: string;
  authorImage?: string;

  category: string;
  tags?: string[];

  metaTitle?: string;
  metaDescription?: string;

  status?: "draft" | "published";
  featured?: boolean;

  views?: number;
  likes?: number;

  isDeleted?: boolean;

  createdAt?: string;
  updatedAt?: string;
}