import { getProducts } from "../../helper/axios"
import { setProducts } from "./productSlice";

export const getProductAction = () => async (dispatch) =>{
    
    const pendingResponse = await getProducts()

    console.log("this is from the product Action", pendingResponse)

    const { status, message, products} = await pendingResponse

    if(status === "success"){
        dispatch(setProducts(products))
    }


}