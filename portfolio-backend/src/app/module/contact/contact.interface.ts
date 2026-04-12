export interface IContact {
  name: string;
  phone: string;
  email: string;
  message: string;

  // optional
  isRead?: boolean;

  // system
  createdAt?: Date;
  updatedAt?: Date;
}