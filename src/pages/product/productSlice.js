import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []

}

const productsSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {
        setProducts: (state, {payload}) =>{
            if(state.products.length === 0 && payload.length === 0){
                return
            }
            state.products = payload
        }
    }
})

const {reducer, actions} = productsSlice

export const {setProducts} = actions

export default reducer;