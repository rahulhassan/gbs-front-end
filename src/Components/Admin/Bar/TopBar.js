import "../CSS/adminDashboard.css";
import {useState, useEffect} from 'react';
import axios from 'axios';
import LeftBar from "./LeftBar";


const TopBar=()=>{
    const [admin,setAdmin] = useState({});
    useEffect(()=>{
        axios.get("http://localhost:8000/api/admin/files/profile")
        .then((rsp)=>{
            setAdmin(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);

    return (
        <div>
            <LeftBar />
            <div class="ad-container">
              <div class="ad-header">
                  <div class="ad-nav">
                        <div class="ad-user">
                          <div class="ad-img-case">
                            {<img src={`http://localhost:8000/images/${admin.a_image}`} width="30px" height="30px" alt=""></img> }
                            <div class="ad-header-name">{admin.a_name}</div>
                          </div>
                          <div class="ad-btn"><a href="/logout">LOG OUT</a></div>
      
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default TopBar;