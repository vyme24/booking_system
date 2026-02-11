import {createApi} from '@reduxjs/toolkit/query/react'
import { baseQuery } from './baseApi'

export const authService = createApi({
    reducerPath : "AuthAPI",
    baseQuery:baseQuery,
    endpoints : builder => ({
         register : builder.mutation({
            query : (body) => ({
                url :"/auth/register",
                method:"POST",
                body
            })
        }),
        login : builder.mutation({
            query : (body) => ({
                url :"/auth/login",
                method:"POST",
                body
            })
        })
    })

})

export const {useLoginMutation, useRegisterMutation } = authService