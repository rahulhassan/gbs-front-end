import "./CSS/adminDashboard.css";
import LeftBar from './Bar/LeftBar';
//import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const CreateSeller =()=>{
    const[s_name,setName] = useState("");
    const[s_phn,setPhn] = useState("");
    const[s_mail,setMail] = useState("");
    const[s_pass,setPass] = useState("");
    const[s_add,setAdd] = useState("");
    const navigate = useNavigate();


    const handleForm=(event)=>{
        event.preventDefault();
        setName('');
        setPhn('');
        setMail('');
        setPass('');
        setAdd('');

        var data = {s_name:s_name,s_phn:s_phn, s_mail:s_mail,s_pass:s_pass,s_add:s_add};
        axios.post("http://localhost:8000/api/admin/files/createSeller",data).then((rsp)=>{
            navigate('/Admin/Seller');
        });
        
        
    }

    return (
        <div>
            <LeftBar />
            <div class="container">
                <div class="content">
                    <div class="content-3">
                        <h1>CREATE A NEW SELLER</h1>
                             
                        <form action="" method="POST" onSubmit={handleForm}>
                          
                          <label>SELLER NAME</label><br />
                          <input type="text" name="s_name" id="name" value={s_name} onChange={(e)=>{setName(e.target.value)}}/><br/>
                          
                          <label>PHONE NUMBER</label><br/>
                          <input type="text" name="s_phn" id="phn" value={s_phn} onChange={(e)=>{setPhn(e.target.value)}} /><br/>
                          
                          <label>EMAIL</label><br/>
                          <input type="text" name="s_mail" id="email" value={s_mail} onChange={(e)=>{setMail(e.target.value)}} /><br/>
                          
                          <label>PASSWORD</label><br/>
                          <input type="password" name="s_pass" id="pass" value={s_pass} onChange={(e)=>{setPass(e.target.value)}}/><br/>
                          
                          <label>ADDRESS</label><br/>
                          <input type="text" name="s_add" id="add" value={s_add} onChange={(e)=>{setAdd(e.target.value)}} /><br/>
                          
                          <button>ADD</button>
                        </form>
                
                            
                    </div>
                </div>
            </div>
        </div>
        
    )

}
export default CreateSeller;