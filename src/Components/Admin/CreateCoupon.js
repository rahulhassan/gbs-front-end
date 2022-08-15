import "./CSS/adminDashboard.css";
import LeftBar from './Bar/LeftBar';
//import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const CreateCoupon =()=>{
    const[cpn_name,setName] = useState("");
    const[discount,setDis] = useState("");
    const navigate = useNavigate();


    const handleForm=(event)=>{
        event.preventDefault();
        setName('');
        setDis('');

        var data = {cpn_name:cpn_name,discount:discount};
        axios.post("http://localhost:8000/api/admin/files/addCoupon",data).then((rsp)=>{
            navigate('/Admin/Coupon');
        });
        
        
    }

    return (
        <div>
            <LeftBar />
            <div class="container">
                <div class="content">
                    <div class="content-3">
                        <h1>CREATE A NEW COUPON</h1>
                             
                        <form action="" method="POST" onSubmit={handleForm}>
                          
                          <label>COUPON NAME</label><br />
                          <input type="text" name="cpn_name" id="name" value={cpn_name} onChange={(e)=>{setName(e.target.value)}}/><br/>
                          
                          <label>DISCOUNT</label><br/>
                          <input type="text" name="discount" id="discount" value={discount} onChange={(e)=>{setDis(e.target.value)}} /><br/>
                        
                          <button>ADD</button>
                        </form>
                
                            
                    </div>
                </div>
            </div>
        </div>
        
    )

}
export default CreateCoupon;