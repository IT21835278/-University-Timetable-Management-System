import axios from "axios"
import {toast} from "react-toastify"
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL


export const AddTimeTable = async(formData)=>{
    try{
        const responce = await axios.post(`${BACKEND_URL}/api/time-table`,formData)
        if(responce.statusText ==="OK"){
            console.log("Time table created successfull");
            
        }

    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()
            toast.error(message)
    }
}