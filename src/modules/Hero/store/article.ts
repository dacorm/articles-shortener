import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

export const articleApi = createApi({
    reducerPath: 'articleApi',
    endpoints(builder) {
        getSummary: builder.query<any, any>({
            query: (params) => `test`,
        })
    }
});