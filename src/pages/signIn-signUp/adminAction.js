import { getAdminInfo } from "../../helper/axios"
import { setAdmin } from "../admin-user/AdminSlice"
import { toast } from "react-toastify";


//get admin 
export const getAdmin = () => async (dispatch) => {

    const pendingResponse = await getAdminInfo()

    console.log(pendingResponse)
    
    const { status, message, user} = await pendingResponse;

    if(status === 'success'){
        dispatch(setAdmin(user))
    }
}