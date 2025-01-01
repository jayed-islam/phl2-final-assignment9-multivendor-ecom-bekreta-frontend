/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from "@/redux/api";
import {
  IGetAllVendorResponse,
  IGetUpdateVendorProfileResponse,
  IVendor,
} from "@/types/vendor";

export const vendorApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateVendorProfile: builder.mutation<
      IGetUpdateVendorProfileResponse,
      Partial<IVendor>
    >({
      query: ({ _id, ...data }) => ({
        url: `/vendor/${_id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user-me"],
    }),
    updateVandorLogo: builder.mutation<
      IGetUpdateVendorProfileResponse,
      { body: FormData; id: string }
    >({
      query: ({ id, body }) => ({
        url: `/vendor/logo/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["user-me"],
    }),
    toggleFollowUnfollwVendor: builder.mutation<
      IGetUpdateVendorProfileResponse,
      string
    >({
      query: (id) => ({
        url: `/vendor/make-follow-unfollow/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["user-me", "single-vendor", "products"],
    }),
    getSingleVendor: builder.query<IGetUpdateVendorProfileResponse, string>({
      query: (id) => ({
        url: `/vendor/${id}`,
      }),
      providesTags: ["single-vendor"],
    }),
    getAllVendors: builder.query<IGetAllVendorResponse, void>({
      query: () => ({
        url: `/vendor`,
      }),
      providesTags: ["vendors"],
    }),
  }),
});

export const {
  useUpdateVendorProfileMutation,
  useUpdateVandorLogoMutation,
  useGetSingleVendorQuery,
  useToggleFollowUnfollwVendorMutation,
  useGetAllVendorsQuery,
} = vendorApi;
