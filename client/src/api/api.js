import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3500/api',
        prepareHeaders: (headers, { getState }) => {
            headers.set('refresh', localStorage.getItem('refresh')?localStorage.getItem('refresh'):'')
            headers.set('access', localStorage.getItem('access')?localStorage.getItem('access'):'')
          },
    }),
    endpoints: build => ({})
})