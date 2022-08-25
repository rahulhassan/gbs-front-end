import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import {useState,useEffect} from 'react';
import axiosConfig from "../../axiosConfig";

const NavBar=()=>{
    const [count, setCount] = useState("");

    useEffect(()=>{
        
        axiosConfig.get(`/seller/orderscount/${localStorage.getItem("user_id")}`)
        .then((rsp)=>{
            setCount(rsp.data);
        },(err)=>{
    
        }) 
    },[]);
    var option ="";
    const myCss= {
        position: "absolute",
        top: "1px",
        right: "-4px",
        padding: "1px 5px",
        borderRadius:" 50%",
        background: "red",
        color: "white",
        fontSize:"10px"
    }

    if(count!=0){
        option=
        <span style={myCss}>{count}</span>
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <MenuItems url="/seller/dashboard" title="Dashboard"/>
                    <MenuItems url="/seller/profile" title="Profile"/>
                    
                    <MenuItems url="/seller/post" title="Post Product"/>
                    <div style={{position: "relative"}}>
                    <MenuItems url="/seller/orders" title="Orders" />
                    {option}
                    </div>
                    <MenuItems url="/seller/statement" title="Statement"/>
                </div>
                <Link to="/signout" style={{marginLeft:"600px"}}><button type="button" className="btn btn-outline-primary">Sign Out</button></Link>
                <h5 className="nav-item" style={{marginLeft: "20px"}}>Welcome, {localStorage.getItem("user_name")}</h5>
                <Link to="/seller/profile">{localStorage.getItem("user_img") === "null" ? <img src="http://127.0.0.1:8000/dummy/profile.png" style={{marginLeft:"20px", width:"45px", height:"45px", borderRadius:"50%"}} alt=""></img>:<img src= {`http://127.0.0.1:8000/images/seller/${localStorage.getItem("user_img")}`} alt="Avatar" style={{marginLeft:"20px", width:"45px", height:"45px", borderRadius:"50%"}}></img>}</Link> 
            </div>
        </nav>
    )
}
export default NavBar;