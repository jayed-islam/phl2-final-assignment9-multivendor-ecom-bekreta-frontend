export interface IVendor {
  _id: string;
  user: string;
  shopName: string;
  logo?: string;
  contactPhone: string;
  description?: string;
  products: string[];
  followers: string[];
  address: string;
  isBlacklisted: boolean;
  isVerified: boolean;
  rating?: number;
  totalSales?: number;
}

export interface IGetUpdateVendorProfileResponse {
  success: boolean;
  message: string;
  data: IVendor;
}
