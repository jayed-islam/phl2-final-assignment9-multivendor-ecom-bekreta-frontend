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
        url: `/review/vendor-reviews/${vendorId}`,
      }),
      providesTags: ["reviews"],
    }),

    addReview: builder.mutation<ICreateReviewResponse, FormData>({
      query: (body) => ({
        url: `/review`,
        method: "POST",
        body,
      }),
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
        url: `/review/${reviewId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["reviews"],
    }),
    getReviewForAdmin: builder.query<IGetReviewResponse, void>({
      query: () => ({
        url: `/review/get-list`,
      }),
      providesTags: ["reviews"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddReviewMutation,
  useGetReviewAllReviewsForVendorQuery,
  useGetReviewForAdminQuery,
  useDeleteRreviewMutation,
} = reviewApi;
