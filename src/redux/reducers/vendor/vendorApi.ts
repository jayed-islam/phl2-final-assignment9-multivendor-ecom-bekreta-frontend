/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from "@/redux/api";
import { IGetUpdateVendorProfileResponse, IVendor } from "@/types/vendor";

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
  }),
});

export const { useUpdateVendorProfileMutation, useUpdateVandorLogoMutation } =
  vendorApi;
