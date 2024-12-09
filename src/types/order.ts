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

export interface IOrder {
  user: string;
  vendor: string;
  name: string;
  phone: string;
  deliveryCharge: number;
  address: string;
  status: "pending" | "shipped" | "delivered" | "canceled";
  items: IOrderItem[];
  totalPrice: number;
  shippingAddress: string;
  paymentStatus: "paid" | "unpaid";
  paymentMethods: "cashOnDelivery" | "aamarpay";
  discount: number;
  coupon: string;
  isCouponApplied: boolean;
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
