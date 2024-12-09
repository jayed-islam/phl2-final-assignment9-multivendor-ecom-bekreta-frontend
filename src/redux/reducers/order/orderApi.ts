/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICoupon, ICreateOrder, IOrder } from "@/types/order";
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
  }),
  overrideExisting: true,
});

export const {
  useCreateOrderMutation,
  useGetUserOrderByIdQuery,
  useGetSingleOrderQuery,
  useVerifyCouponMutation,
} = orderApi;
