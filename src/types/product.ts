import { ICategory } from "./category";
import { IUser } from "./user";
import { IVendor } from "./vendor";

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  inventoryCount: number;
  category: ICategory;
  reviews: IReview[];
  qualities: string[];
  images: string[];
  isFeatured: boolean;
  discount?: number;
  rating: number;
  vendor: string | IVendor;
  isOnSale: boolean;
  isPublished: boolean;
}

export type IPagination = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
};

export interface IReview {
  product: string;
  customer: IUser;
  rating: number;
  comment: string;
  image: string;
  createdAt: Date;
}
