/* eslint-disable @typescript-eslint/no-unused-vars */

import { api } from "@/redux/api";
import { ICategory } from "@/types/category";

interface IGetAllCategoryListResponse {
  success: boolean;
  message: string;
  data: ICategory[];
}

interface ICategoryResponse {
  success: boolean;
  message: string;
  data: ICategory;
}

export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all categories
    getCategories: builder.query<IGetAllCategoryListResponse, void>({
      query: () => ({
        url: `/category`,
      }),
      providesTags: ["categories"],
    }),
    getAllCategoryForAdmin: builder.query<IGetAllCategoryListResponse, void>({
      query: () => ({
        url: `/category/get-list`,
      }),
      providesTags: ["categories"],
    }),

    // Create a new category
    createCategory: builder.mutation<ICategoryResponse, FormData>({
      query: (category) => ({
        url: `/category`,
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["categories"],
    }),

    // Update an existing category
    updateCategory: builder.mutation<
      ICategoryResponse,
      { id: string; data: Partial<ICategory> }
    >({
      query: ({ id, data }) => ({
        url: `/category/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["categories"],
    }),

    // Delete a category
    deleteCategory: builder.mutation<ICategoryResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["categories"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoryForAdminQuery,
} = categoryApi;
