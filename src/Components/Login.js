import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosConfig from './axiosConfig';
const Login =()=>{
    const navigate = useNavigate();
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const[msg,setMsg]=useState("");

    const Submit=(event)=>{
        event.preventDefault();
        const login = document.getElementById("signin");
        login.className = "btn btn-secondary btn-block mb-4";
        login.innerHTML= "Please wait...";

        var data={email:email, pass:pass};
        axiosConfig.post("/login",data)
        .then((rsp)=>{
            setMsg(rsp.data.msg);
            localStorage.setItem('_authToken',rsp.data.token);
            
            if (rsp.data.user === "seller") {
    
                axiosConfig.get(`/seller/info/${localStorage.getItem("_authToken")}`)
                .then((rsp)=>{
                    localStorage.setItem("user_id", rsp.data[0].seller.s_id);
                    localStorage.setItem("user_img", rsp.data[0].seller.s_image);
                    localStorage.setItem("user_name", rsp.data[0].seller.s_name);
                    navigate('/seller/dashboard');
                })
            }
            login.className = "btn btn-primary btn-block mb-4";
            login.innerHTML= "Sign Up";
        });

    }
    
    return(
        <div>
        <br></br>
        <br></br>
        <br></br>
        <div className="col d-flex justify-content-center">
            
            <form onSubmit={Submit}>
            <h3>Login</h3>
            
            <p className="text-danger">{msg}</p>
            
            <div className="form-outline mb-4">
                <input type="text" className="form-control" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <label className="form-label">Email address</label>
            </div>
        
            <div className="form-outline mb-4">
                <input type="password" className="form-control" name="pass" onChange={(e)=>setPass(e.target.value)} value={pass} ></input>
                <label className="form-label">Password</label>
            </div>

            <button type="submit" id="signin" className="btn btn-primary btn-block mb-4" value="Sign in">Sign in</button>
        
            
            <div className="text-center">
                <p>Not a member? <Link to="/signup">sign up</Link></p>
            </div>
            </form>
        </div>
        </div>
    )
}

export default Login;