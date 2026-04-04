export interface IJob {
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
