import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://fakestoreapi.com"
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () =>  ({
        url: "/products"
      })
    }),
    providesTags: ["Product"]
  })
});

export const { useGetProductsQuery } = productApi;
