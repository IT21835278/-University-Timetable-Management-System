import axios from "axios"
import {toast} from "react-toastify"
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL


export const CreateCourse = async(formData)=>{
    try{
        const responce = await axios.post(`${BACKEND_URL}/api/course/`,formData)
        if(responce.statusText ==="OK"){
            console.log("Success full paid!");
            
        }

    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()
            toast.error(message)
    }
}


export const getAllCoures = async()=>{
    try{
        const responce = await axios.get(`${BACKEND_URL}/api/course/`)
        return responce.data;

    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()
            toast.error(message)
    }
}


export const getbyIdCoures = async(courseid)=>{
    try{
        const responce = await axios.get(`${BACKEND_URL}/api/course/${courseid}`)
        return responce.data;

    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()
            toast.error(message)
    }
}


export const updateCoures = async(formData,courseid)=>{
    try{
        const responce = await axios.patch(`${BACKEND_URL}/api/course/${courseid}`,formData)
        return responce.data;

    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()
            toast.error(message)
    }
}


