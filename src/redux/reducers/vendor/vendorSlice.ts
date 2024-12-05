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
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user-me"],
    }),
  }),
});

export const { useUpdateVendorProfileMutation } = vendorApi;
