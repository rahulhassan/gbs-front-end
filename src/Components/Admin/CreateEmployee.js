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
    const[msg,setMsg] = useState("");
    const[err,setErr] = useState("");


    const handleForm=(event)=>{
        event.preventDefault();
        setName('');
        setPhn('');
        setMail('');
        setPass('');
        setAdd('');
        setMsg('');
        setErr('');

        var data = {e_name:e_name,e_phn:e_phn, e_mail:e_mail,e_pass:e_pass,e_add:e_add};
        axios.post("http://localhost:8000/api/admin/files/createEmp",data).then((rsp)=>{
            navigate('/Admin/Employee');
            setMsg(rsp.data.msg);
        },(err)=>{
            if(err.response.status==422) //for data validation
            {
                setErr(err.response.data);
            }else{
                setMsg("Server Error Occured");
            }
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
                            <h1>{msg}</h1>
                          
                          <label>EMPLOYEE NAME</label><br />
                          <input type="text" name="e_name" id="name" value={e_name} onChange={(e)=>{setName(e.target.value)}}/><span>{err.e_name? err.e_name[0]:''}</span><br/>
                          
                          <label>PHONE NUMBER</label><br/>
                          <input type="text" name="e_phn" id="phn" value={e_phn} onChange={(e)=>{setPhn(e.target.value)}} /><span>{err.e_phn? err.e_phn[0]:''}</span><br/>
                          
                          <label>EMAIL</label><br/>
                          <input type="text" name="e_mail" id="email" value={e_mail} onChange={(e)=>{setMail(e.target.value)}} /><span>{err.e_mail? err.e_mail[0]:''}</span><br/>
                          
                          <label>PASSWORD</label><br/>
                          <input type="password" name="e_pass" id="pass" value={e_pass} onChange={(e)=>{setPass(e.target.value)}}/><span>{err.e_pass? err.e_pass[0]:''}</span><br/>
                          
                          <label>ADDRESS</label><br/>
                          <input type="text" name="e_add" id="add" value={e_add} onChange={(e)=>{setAdd(e.target.value)}} /><span>{err.e_add? err.e_add[0]:''}</span><br/>
                          
                          <button>ADD</button>
                        </form>
                
                            
                    </div>
                </div>
            </div>
        </div>
        
    )

}
export default CreateEmployee;