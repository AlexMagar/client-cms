import { getProduct } from "../../helper/axios"
import { setProducts } from "./productSlice"


export const getProductAction = () => async (dispatch) =>{
    const { status, products} = await getProduct()

    console.log("If success: ", status)

    if(status === 'success'){
        //mount data in the store
        dispatch(setProducts(products))
    }
}