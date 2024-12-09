import { IPagination, IProduct } from "./product";
import { IVendor } from "./vendor";

export const ORDER_STATUS = [
  { value: "pending", label: "Pending" },
  { value: "confirmed", label: "Confirmed" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface ICoupon {
  _id: string;
  code: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  expiryDate: Date;
  usageLimit: number;
  usedCount: number;
  isActive: boolean;
  applicableProducts?: string[];
  applicableCategories?: string[];
}

export interface IOrderItem {
  product: string;
  quantity: number;
  price: number;
}

export interface IOrderedItem {
  product: IProduct;
  quantity: number;
  price: number;
}

export interface IOrder {
  _id?: string;
  user: string;
  vendor: IVendor;
  name: string;
  phone: string;
  deliveryCharge: number;
  address: string;
  status: "pending" | "shipped" | "delivered" | "canceled";
  items: IOrderedItem[];
  totalPrice: number;
  shippingAddress: string;
  paymentStatus: "paid" | "unpaid";
  paymentMethod: "cashOnDelivery" | "aamarpay";
  discount: number;
  coupon: string;
  isCouponApplied: boolean;
  createdAt: Date;
}

export interface ICreateOrder {
  _id?: string;
  name: string;
  phone: string;
  deliveryCharge: number;
  address: string;
  items: IOrderItem[];
  totalPrice: number;
  paymentMethod: "cashOnDelivery" | "aamarpay";
  discount?: number;
  coupon?: string;
  isCouponApplied?: boolean;
}

export type OrderStatusMeta = {
  pending: number;
  confirmed: number;
  shipped: number;
  delivered: number;
  cancelled: number;
};

export interface IGetOrderListResponse {
  data: {
    pagination: IPagination;
    orders: IOrder[];
    meta: OrderStatusMeta;
  };
}

export interface IGetFeaturedOrderBody {
  page: number;
  limit: number;
  startDate: Date | null;
  endDate: Date | null;
  searchTerm: string;
  status: OrderStatus;
  sortBy: "latest" | "oldest";
  vendor?: string;
  admin?: string;
}

export type IOrderTableFilterValue = string | string[];

export interface IOrderFilters {
  status: OrderStatus;
  searchTerm: string;
  page: number;
  limit: number;
  startDate: Date | null;
  endDate: Date | null;
  sortBy: "latest" | "oldest";
  vendor?: string;
  admin?: string;
}
