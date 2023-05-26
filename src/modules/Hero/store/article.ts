import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Summary} from "@/modules/Hero/domain/types";

const radpiApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', radpiApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query<Summary, string>({
            query: (articleUrl: string) => `/summarize?url=${encodeURIComponent(articleUrl)}&length=3`
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;