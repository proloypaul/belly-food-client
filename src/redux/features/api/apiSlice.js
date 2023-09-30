import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
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
  }),
})

export const {useGetUserReviewQuery, usePostUserReviewMutation} = apiSlice