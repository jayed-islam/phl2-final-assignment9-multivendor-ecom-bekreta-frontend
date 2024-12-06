/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from "@/redux/api";
import { IPagination, IProduct } from "@/types/product";
import { IGetUpdateVendorProfileResponse, IVendor } from "@/types/vendor";

export type IProductFilterOptions = {
  page?: number;
  limit?: number;
  searchTerm?: string;
  category?: string;
  isLowestFirst?: boolean;
  isOldestFirst?: boolean;
  vendorId?: string;
};

interface IGetAllProductListResponse {
  success: boolean;
  message: string;
  data: {
    products: IProduct[];
    pagination: IPagination;
  };
}

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProductForAdmin: builder.query<
      IGetAllProductListResponse,
      IProductFilterOptions
    >({
      query: (options) => ({
        url: `/product/get-product-list`,
        method: "POST",
        body: options,
      }),
    }),
  }),
});

export const { useGetAllProductForAdminQuery } = productApi;
