export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  inventoryCount: number;
  category: string;
  reviews: string[];
  qualities: string[];
  images: string[];
  isFeatured: boolean;
  discount?: number;
  rating: number;
  vendor: string;
  isOnSale: boolean;
  isPublished: boolean;
}

export type IPagination = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
};
