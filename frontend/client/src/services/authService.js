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
        }),
        forgotPassword : builder.mutation({
            query : (body) => ({
                url :"/auth/forgot-password",
                method:"POST",
                body
            })
        }),
            resetPassword : builder.mutation({
            query : ({body,token}) => ({
                url :"/auth/reset-password",
                method:"POST",
                body,
                headers : { Authorization : `${token}` }
               
            })  
        })
    })

})

export const {useLoginMutation, useRegisterMutation, useForgotPasswordMutation, useResetPasswordMutation } = authService