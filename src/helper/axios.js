
import axios from 'axios'

const rootAPI = process.env.REACT_APP_ROOTAPI
const adminAPI = rootAPI + '/admin'

const axiosProcessor = async ({method, url, obj}) =>{

    try {
        const {data} = await axios({
            method,
            url,
            data: obj
        })
        return data
    } catch (error) {
        return {
            status: 'error',
            message: error.response ? error?.response?.data?.message : error.message
        }
    }
}

// =========== get admins ==========
export const getAdminInfo = () =>{
    const obj = {
        method: 'get',
        url: adminAPI
    }
    return axiosProcessor(obj)
}

// ============ product info ============
export const getProducts = () =>{
    const obj = {
        method: 'get',
        url: rootAPI + "/product",
        isPrivate: true
    }
    return axiosProcessor(obj)
}

