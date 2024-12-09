/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from "@/redux/api";
import { IGetUpdateUSERProfileResponse, IUser } from "@/types/user";
import { IGetUpdateVendorProfileResponse, IVendor } from "@/types/vendor";

export const vendorApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateUserProfile: builder.mutation<
      IGetUpdateUSERProfileResponse,
      Partial<IUser>
    >({
      query: ({ _id, ...data }) => ({
        url: `/user/me/update/${_id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user-me"],
    }),
    updateUserProfilePicture: builder.mutation<
      IGetUpdateUSERProfileResponse,
      { body: FormData; id: string }
    >({
      query: ({ id, body }) => ({
        url: `/user/me/update/profile-picture/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["user-me"],
    }),
  }),
});

export const {
  useUpdateUserProfilePictureMutation,
  useUpdateUserProfileMutation,
} = vendorApi;
