import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
    name: 'customers',
    initialState: {
        customers: [],
    },
    reducers: {
        addCustomer: (state, action) => {
            state.customers = [...state.customers, action.payload]
        },
        getCustomers: (state, action) => {
            state.customers = [...action.payload]
        },
    },
})

export const { addCustomer, getCustomers } = customerSlice.actions

export default customerSlice.reducer
