import axios from "axios";
import useAuth from "../use-auth/useAuth";
import { useEffect } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    // baseURL: 'https://task-management-server-side-nine.vercel.app',
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure?.interceptors?.response?.use(res => {
            return res;
        }, error => {
            console.log('Error intercepted', error?.response);
            if(error?.response?.status === 401 || error?.response?.status === 403){
                logOut()
                    .then(() => swal(`Info`, `You've sign out successfully`, 'info'))
                    .catch(error => swal('Error', `${error?.message}`, 'error'));
                navigate('/login');
        }
    })
    }, [])
    return axiosSecure;
};

export default useAxiosSecure;