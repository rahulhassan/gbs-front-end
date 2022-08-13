import "./CSS/adminDashboard.css";
import LeftBar from './Bar/LeftBar';
//import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const CreateEmployee =()=>{
    const[e_name,setName] = useState("");
    const[e_phn,setPhn] = useState("");
    const[e_mail,setMail] = useState("");
    const[e_pass,setPass] = useState("");
    const[e_add,setAdd] = useState("");
    const navigate = useNavigate();


    const handleForm=(event)=>{
        event.preventDefault();
        setName('');
        setPhn('');
        setMail('');
        setPass('');
        setAdd('');

        var data = {e_name:e_name,e_phn:e_phn, e_mail:e_mail,e_pass:e_pass,e_add:e_add};
        axios.post("http://localhost:8000/api/admin/files/createEmp",data).then((rsp)=>{
            navigate('/Admin/Employee');
        });
        
        
    }

    return (
        <div>
            <LeftBar />
            <div class="container">
                <div class="content">
                    <div class="content-3">
                        <h1>CREATE A NEW EMPLOYEE</h1>
                             
                        <form action="" method="POST" onSubmit={handleForm}>
                          
                          <label>EMPLOYEE NAME</label><br />
                          <input type="text" name="e_name" id="name" value={e_name} onChange={(e)=>{setName(e.target.value)}}/><br/>
                          
                          <label>PHONE NUMBER</label><br/>
                          <input type="text" name="e_phn" id="phn" value={e_phn} onChange={(e)=>{setPhn(e.target.value)}} /><br/>
                          
                          <label>EMAIL</label><br/>
                          <input type="text" name="e_mail" id="email" value={e_mail} onChange={(e)=>{setMail(e.target.value)}} /><br/>
                          
                          <label>PASSWORD</label><br/>
                          <input type="password" name="e_pass" id="pass" value={e_pass} onChange={(e)=>{setPass(e.target.value)}}/><br/>
                          
                          <label>ADDRESS</label><br/>
                          <input type="text" name="e_add" id="add" value={e_add} onChange={(e)=>{setAdd(e.target.value)}} /><br/>
                          
                          <button>ADD</button>
                        </form>
                
                            
                    </div>
                </div>
            </div>
        </div>
        
    )

}
export default CreateEmployee;