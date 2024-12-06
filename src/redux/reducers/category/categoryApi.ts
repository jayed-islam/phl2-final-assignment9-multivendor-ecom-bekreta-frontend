/* eslint-disable @typescript-eslint/no-unused-vars */

import { api } from "@/redux/api";
import { ICategory } from "@/types/category";

interface IGetAllCategoryListResponse {
  success: boolean;
  message: string;
  data: ICategory[];
}

export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<IGetAllCategoryListResponse, void>({
      query: (options) => ({
        url: `/category`,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
