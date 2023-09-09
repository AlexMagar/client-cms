import { getAdminInfo } from "../../helper/axios"
import { toast } from "react-toastify";


export const getAdminAction = async () =>{
    const {status, message} = await getAdminInfo()

    console.log(status)

    
}