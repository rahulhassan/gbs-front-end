import MenuItem from "./MenuItem";
import {useState,useEffect} from 'react';
import axiosConfig from '../../axiosConfig';

const TopMenu=()=>{

    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark ">
                <div className="collapse navbar-collapse ">

                    <h5 className="nav-item" style={{marginLeft: "20px"}}>GBS</h5>
                    
                        <div className="navbar-nav " style={{marginLeft: "20px"}}>
                            <MenuItem url="/dashboard" title="Dashboard"/>
                            <MenuItem url="/profile" title="Profile"/>
                            <MenuItem url="/updateProfile" title="Update Profile"/>
                            <MenuItem url="/orders" title="Orders"/>
                            <MenuItem url="/logout" title="Logout"/>
                        </div>
                
           
                </div>
        </nav>
        </div>
    )
}
export default TopMenu;