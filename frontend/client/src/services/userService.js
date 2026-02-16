import {createApi} from '@reduxjs/toolkit/query/react'
import { baseQuery } from './baseApi'

export const userService = createApi({
    reducerPath : "UserAPI",
    baseQuery:baseQuery,
    endpoints : builder => ({
         getUser : builder.query({
            query : () => ({
                url :"/user/get",
                method:"GET",
            })
        }),
       
    })

})

export const {useGetUserQuery} = userService