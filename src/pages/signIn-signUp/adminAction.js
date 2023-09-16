import { getAdminInfo } from "../../helper/axios"
import { setAdmin } from "../admin-user/AdminSlice"


//get admin 
export const getAdmin = () => async (dispatch) => {

    //call the api to get the user
    const {status, user} = await getAdminInfo()

    console.log("admin Action: ", user)

    //mount the state with the user data
    if(status === 'success'){
        dispatch(setAdmin(user))
    }
}