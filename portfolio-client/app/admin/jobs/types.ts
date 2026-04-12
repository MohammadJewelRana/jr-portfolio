export interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}