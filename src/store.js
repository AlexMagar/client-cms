import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./pages/product/productSlice";


const store = configureStore({
    reducer: {
        productInfo: productReducer
    }
})

export default store