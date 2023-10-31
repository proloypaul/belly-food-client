import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
// baseUrl deployed link https://belly-food-server.onrender.com/

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://belly-food-server.onrender.com/' }),
  tagTypes: ["maintancePostAndGet"],
  endpoints: (builder) => ({
    postUserReview: builder.mutation({
        query: ({data}) => ({
            url: "/reviews",
            method: 'POST',
            body: data
        }),
        invalidatesTags: ["maintancePostAndGet"],
    }),
    getUserReview: builder.query({
        query: () => `/reviews`,
        providesTags: ["maintancePostAndGet"],
    }),
    // search food 
    getSearchFood: builder.query({
      query: (name) => `/searchfoods?searchTerm=${name}`,
    }),
    // post food from add food section
    postFoodData: builder.mutation({
      query: ({data}) => ({
          url: "/foods",
          method: 'POST',
          body: data
      }),
      invalidatesTags: ["maintancePostAndGet"],
    }),
    // get food
    getfoodData: builder.query({
      query: () => `/foods`,
      providesTags: ["maintancePostAndGet"],
    }),
    // post cart data from cartCollection
    postCartData: builder.mutation({
      query: ({data}) => ({
        url: "/carts",
        method: 'POST',
        body: data
      }),
      invalidatesTags: ["maintancePostAndGet"]
    }),
    // get cart data from cart Collection
    getCartData: builder.query({
      query: (email) => `/carts/${email}`,
      providesTags: ["maintancePostAndGet"]
    }),
    // manage user order
    postOrderInformation: builder.mutation({
      query: ({data}) => ({
        url: "/orderinformation",
        method: 'POST',
        body: data
      })
    })
  }),
})

export const {useGetUserReviewQuery, useGetSearchFoodQuery, usePostUserReviewMutation, usePostFoodDataMutation, useGetfoodDataQuery, usePostCartDataMutation, useGetCartDataQuery, usePostOrderInformationMutation} = apiSlice