import { ICategory } from "./category";
import { IVendor } from "./vendor";

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  inventoryCount: number;
  category: ICategory;
  reviews: string[];
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
