import {api} from '../api'
import { setDefault, setUser } from './userSlice'

export const userApi = api.injectEndpoints({
    endpoints: build => ({
        Regis: build.mutation({
            query: (body) => ({
                url: '/regis',
                method: 'POST',
                body: body
            })
        }),
        Login: build.mutation({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body: body
            }),
            async onQueryStarted(args, {queryFulfilled, dispatch}){
                try {
                    const {data} = await queryFulfilled

                    localStorage.setItem('refresh', data.token.refresh)
                    localStorage.setItem('access', data.token.access)

                    dispatch(setUser({...data.user}))
                    
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        Refresh: build.query({
            query: () => ({
                url: '/refresh'
            }),
            async onQueryStarted(args, {queryFulfilled, dispatch}){
                try{
                    const {data} = await queryFulfilled

                    localStorage.setItem('refresh', data.token.refresh)
                    localStorage.setItem('access', data.token.access)

                    dispatch(setUser(data.user))

                    console.log(data)
                } catch(error){
                    dispatch(setDefault())
                }
            }
        })
    })
})