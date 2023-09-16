import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./pages/product/productSlice";
import adminReducer from "./pages/admin-user/AdminSlice";

const store = configureStore({
    reducer: {
        productInfo: productReducer,
        adminInfo: adminReducer,
    }
})

export default store