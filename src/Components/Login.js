import { useState } from "react";
import axiosConfig from './axiosConfig';
const Login =()=>{
    const[name,setName]=useState("");
    const[pass,setPass]=useState("");

    const Submit=(event)=>{
        event.preventDefault();
        var data={uname:name, pass:pass};
        axiosConfig.post("/login",data)
        .then((rsp)=>{
            localStorage.setItem('_authToken',rsp.data.token);
        },(err)=>{
            
        });


    }
    
    return(
        <div className="col d-flex justify-content-center">
        <form onSubmit={Submit}>
            <h3>Login</h3>
            <br></br>
            
            <div className="form-outline mb-4">
                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} value={name}/><br/>
                <label className="form-label">Email address</label>
            </div>
        
            <div className="form-outline mb-4">
                <input type="password" className="form-control" onChange={(e)=>setPass(e.target.value)} value={pass} ></input><br/>
                <label className="form-label">Password</label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4" value="Sign in">Sign in</button>
        
            
            <div className="text-center">
                <p>Not a member? <a href="#">Register</a></p>
            </div>
        </form>
    </div>
    )
}

export default Login;