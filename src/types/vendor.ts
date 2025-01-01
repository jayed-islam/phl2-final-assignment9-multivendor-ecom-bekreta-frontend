import { IProduct } from "./product";
import { IUser } from "./user";

export interface IVendor {
  _id: string;
  user: string;
  shopName: string;
  logo?: string;
  contactPhone: string;
  description?: string;
  products: IProduct[];
  followers: IUser[];
  address: string;
  isBlacklisted: boolean;
  isVerified: boolean;
  rating?: number;
  totalSales?: number;
  createdAt: Date;
}

export interface IGetUpdateVendorProfileResponse {
  success: boolean;
  message: string;
  data: IVendor;
}

export interface IGetAllVendorResponse {
  success: boolean;
  message: string;
  data: IVendor[];
}
