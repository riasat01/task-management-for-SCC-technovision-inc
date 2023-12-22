import axios from "axios";
import useAuth from "../use-auth/useAuth";
import { useEffect } from "react";
import swal from "sweetalert";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const {logOut} = useAuth();
    useEffect(() => {
        axiosSecure?.interceptors?.response?.use(res => {
            return res;
        }, error => {
            console.log('Error intercepted', error?.response);
            if(error?.response?.status === 401 || error?.response?.status === 403){
                logOut()
                    .then(() => swal(`Info`, `You've sign out successfully`, 'info'))
                    .catch(error => swal('Error', `${error?.message}`, 'error'));
        }
    })
    }, [])
    return axiosSecure;
};

export default useAxiosSecure;