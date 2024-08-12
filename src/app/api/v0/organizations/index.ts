import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrlV0 } from "@/app/api/axios-api-url";

export const organizationsApi = createApi({
  reducerPath: "API_V0_OrganizationsApi",
  tagTypes: ["Organizations"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrlV0}/organizations`,
    credentials: "include",
  }),
  endpoints: (build) => ({
    getOrgLists: build.query<any, void>({
      query: () => `/`,
    }),

    // Pages
    createPages: build.mutation({
      query: (body) => ({
        url: `/sites/pages`,
        method: "POST",
        body,
      }),
    }),
    getAllPages: build.query<any, void>({
      query: () => `/sites/pages`,
    }),
  }),
});

export const {
  useGetOrgListsQuery,
  useCreatePagesMutation,
  useGetAllPagesQuery,
} = organizationsApi;
