/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ICoupon,
  ICreateOrder,
  IGetFeaturedOrderBody,
  IGetOrderListResponse,
  IOrder,
  IPayment,
} from "@/types/order";
import { api } from "../../api";
import { IPagination } from "@/types/product";

interface IGetCreateOrderResponse {
  data: IOrder | { payment_url: string };
  message: string;
  success: boolean;
}

interface IValidateCouponRespnse {
  data: ICoupon;
  message: string;
  success: boolean;
}

interface IGetPaymentList {
  data: IPayment[];
  message: string;
  success: boolean;
}

interface IGetUserOrderResponse {
  data: {
    orders: IOrder[];
    pagination: IPagination;
  };
  message: string;
  success: boolean;
}

interface IGetSingleOrderResponse {
  data: IOrder;
  message: string;
  success: boolean;
}

export interface IDashboardResponse {
  message: string;
  success: boolean;
  data: {
    summary: ISummary;
    chartData: IChartData;
    lastWeekOrders: IOrder[];
  };
}

export interface ISummary {
  orders: number;
  revenue: number;
  products: number;
}

export interface IChartData {
  salesOverview: ISalesOverview[];
  categoryDistribution: ICategoryDistribution[];
}

export interface ISalesOverview {
  day: number;
  totalSales: number;
}

export interface ICategoryDistribution {
  category: string; // Category ID
  count: number; // Count of products in this category
}

interface IGetSingleOrderResponse {
  data: IOrder;
  message: string;
  success: boolean;
}

export interface IFeatureOrderUpdateBody {
  orderId: string;
  status: string;
}

export const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<IGetCreateOrderResponse, ICreateOrder>({
      query: (body: ICreateOrder) => ({
        url: "/order",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Orders"],
    }),
    getUserOrderById: builder.query<
      IGetUserOrderResponse,
      { userId: string; page: number }
    >({
      query: ({ page, userId }) => ({
        url: `/order/user/${userId}`,
        method: "POST",
        body: { page },
      }),
      providesTags: ["Orders"],
    }),
    getSingleOrder: builder.query<IGetSingleOrderResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/order/${id}`,
        method: "GET",
      }),
      providesTags: ["single-order"],
    }),
    verifyCoupon: builder.mutation<IValidateCouponRespnse, { code: string }>({
      query: (body) => ({
        url: "/coupon/validate",
        method: "POST",
        body,
      }),
    }),
    getAdminOrderList: builder.query<
      IGetOrderListResponse,
      IGetFeaturedOrderBody
    >({
      query: (body: IGetFeaturedOrderBody) => ({
        url: "/order/get-order-list",
        method: "POST",
        body,
      }),
      providesTags: ["admin-orders"],
    }),
    updateOrderStatus: builder.mutation<
      IGetSingleOrderResponse,
      IFeatureOrderUpdateBody
    >({
      query: ({ orderId, status }) => ({
        url: `/order/update-status`,
        method: "PATCH",
        body: { orderId, status },
      }),
      invalidatesTags: ["admin-orders"],
    }),
    getTransactionList: builder.query<IGetPaymentList, void>({
      query: () => ({
        url: "/payment/get-list",
      }),
      providesTags: ["admin-payments"],
    }),
    updatePaymentStatus: builder.mutation<
      IGetPaymentList,
      { transactionId: string; newStatus: string }
    >({
      query: (body) => ({
        url: `/payment/update-status`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["admin-payments"],
    }),
    getSummary: builder.query<IDashboardResponse, { vendorId?: string }>({
      query: ({ vendorId }) => ({
        url: "/order/get-summary",
        method: "POST",
        body: { vendorId },
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useCreateOrderMutation,
  useGetUserOrderByIdQuery,
  useGetSingleOrderQuery,
  useVerifyCouponMutation,
  useGetAdminOrderListQuery,
  useUpdateOrderStatusMutation,
  useGetTransactionListQuery,
  useUpdatePaymentStatusMutation,
  useGetSummaryQuery,
} = orderApi;
