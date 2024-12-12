import { IProduct } from "./product";
import { IUser } from "./user";
import { IVendor } from "./vendor";

export interface ICreateReviewRequest {
  content: string;
  product: string;
  author: string;
}

export interface IUpdateReviewRequest {
  content: string;
}

export interface ICreateReviewResponse {
  success: boolean;
  message: string;
  data: IReview;
}

export interface IGetReviewResponse {
  success: boolean;
  message: string;
  data: IReview[];
}

export enum ReviewType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
}

export interface IReview {
  _id: string;
  product: IProduct;
  customer: IUser;
  vendor: IVendor;
  rating: number;
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}
