import { useEffect } from "react";
import axiosConfig from './axiosConfig';
const Logout =()=>{

    const token = localStorage.getItem("_authToken");
    var data = {token:token}
    useEffect(()=>{
        axiosConfig.post("/logout", data)
        .then((rsp)=>{
            localStorage.clear();
            window.location.href="/signin";
        });
    },[])   
}

export default Logout;