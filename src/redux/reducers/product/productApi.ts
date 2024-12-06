/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from "@/redux/api";
import { IPagination, IProduct } from "@/types/product";

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

interface IGetSingleProduct {
  success: boolean;
  message: string;
  data: IProduct;
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
      providesTags: ["admin-products"],
    }),
    createProduct: builder.mutation<IGetSingleProduct, FormData>({
      query: (body) => ({
        url: `/product`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["admin-products"],
    }),
    updateProduct: builder.mutation<
      IGetSingleProduct,
      { id: string; data: Partial<IProduct> }
    >({
      query: ({ id, data }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["admin-products"],
    }),
    softDeleteProduct: builder.mutation<IGetSingleProduct, { id: string }>({
      query: ({ id }) => ({
        url: `/product/delete/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["admin-products"],
    }),
    duplicateProduct: builder.mutation<IGetSingleProduct, { id: string }>({
      query: ({ id }) => ({
        url: `/product/duplicate/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["admin-products"],
    }),
  }),
});

export const {
  useGetAllProductForAdminQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useSoftDeleteProductMutation,
  useDuplicateProductMutation,
} = productApi;
