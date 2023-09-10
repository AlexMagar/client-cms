import { getAdminInfo } from "../../helper/axios"


export const getAdminAction = async () =>{
    const result = await getAdminInfo()

    console.log("Hello Action: ",result)

    
}