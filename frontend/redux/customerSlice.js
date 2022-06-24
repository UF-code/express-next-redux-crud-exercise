import { createSlice } from '@reduxjs/toolkit'
import axios from '../axios.js'

let customers = []
axios(`/getAllCustomers`)
    .then((res) => {
        console.log(res.status)
        console.log(res.data)
        console.log(res.data[0].id)
        console.log(res.data[0].first_name)
        console.log(res.data[0].last_name)
        console.log(res.data[0].email)
        console.log(res.data[0].birthdate)
        console.log(res.data[0].createdAt)
        console.log(res.data[0].updatedAt)
        customers = [...res.data]
        console.log(customers)
    })
    .catch((err) => console.log(err))

export const customerSlice = createSlice({
    name: 'customers',
    initialState: {
        customers,
    },
    reducers: {
        addCustomer: (state, action) => {
            state.customers = [...state.customers, action.payload]
        },
    },
})

export const { addCustomer } = customerSlice.actions

export default customerSlice.reducer
