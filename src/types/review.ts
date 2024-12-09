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
  product: string;
  customer: string;
  vendor: string;
  rating: number;
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
