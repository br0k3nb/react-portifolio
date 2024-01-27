import axios from 'axios';
import { useEffect } from 'react'

// const api = axios.create({ baseURL: `http://localhost:3001/` });
const api = axios.create({ baseURL: `https://portfolio-backend-nine-jet.vercel.app/` });

const AxiosInterceptor = ({ children }: { children: JSX.Element }) => {
    useEffect(() => {
        const responseInterceptor = api.interceptors.response.use(
            response => response,
            error => {
                const errorStatus = error?.response?.status;

                if ((errorStatus >= 500 && errorStatus <= 599)){
                    //(500 - 599) = Server error responses
                    return Promise.reject({ message: "Server error, please try again or later" });
                } 
        
                if(error?.code === "ERR_NETWORK") {
                    return Promise.reject({ message: "Connection to server failed, please verify your internet connection" });
                }

                return Promise.reject(error?.response?.data);
            },
        );

        return () => (
            api.interceptors.response.eject(responseInterceptor)
        )

    }, [])

    return children;
}


export default api;
export { AxiosInterceptor }