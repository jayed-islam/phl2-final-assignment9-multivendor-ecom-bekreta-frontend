/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICreateReviewResponse, IGetReviewResponse } from "@/types/review";
import { api } from "../../api";

export const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReviewAllReviewsForVendor: builder.query<
      IGetReviewResponse,
      { vendorId: string }
    >({
      query: ({ vendorId }) => ({
        url: `//vendor-reviews/${vendorId}`,
      }),
      providesTags: ["reviews"],
    }),
    addReview: builder.mutation<ICreateReviewResponse, FormData>({
      query: (body) => ({
        url: `/review`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["reviews"],
    }),

    updateReview: builder.mutation<
      ICreateReviewResponse,
      { reviewId: string; body: FormData }
    >({
      query: ({ reviewId, body }) => ({
        url: `/review/update/${reviewId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["reviews"],
    }),

    deleteRreview: builder.mutation<
      ICreateReviewResponse,
      { reviewId: string }
    >({
      query: ({ reviewId }) => ({
        url: `/review/delete/${reviewId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
  overrideExisting: true,
});

export const { useAddReviewMutation, useGetReviewAllReviewsForVendorQuery } =
  reviewApi;
