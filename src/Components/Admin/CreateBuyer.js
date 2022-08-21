import "./CSS/adminDashboard.css";
import LeftBar from './Bar/LeftBar';
//import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const CreateBuyer =()=>{
    const[b_name,setName] = useState("");
    const[b_phn,setPhn] = useState("");
    const[b_mail,setMail] = useState("");
    const[b_pass,setPass] = useState("");
    const[b_add,setAdd] = useState("");
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

        var data = {b_name:b_name,b_phn:b_phn, b_mail:b_mail,b_pass:b_pass,b_add:b_add};
        axios.post("http://localhost:8000/api/admin/files/createBuyer",data).then((rsp)=>{
            navigate('/Admin/Buyer');
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
            <div class="ad-container">
                <div class="ad-content">
                    <div class="ad-content-3">
                        <h1>CREATE A NEW BUYER</h1>
                             
                        <form action="" method="POST" onSubmit={handleForm}>
                         <h3>{msg}</h3>
                          
                          <label>BUYER NAME</label><br />
                          <input type="text" name="b_name" id="name" value={b_name} onChange={(e)=>{setName(e.target.value)}}/><span>{err.b_name? err.b_name[0]:''}</span><br/>
                          
                          <label>PHONE NUMBER</label><br/>
                          <input type="text" name="b_phn" id="phn" value={b_phn} onChange={(e)=>{setPhn(e.target.value)}} /><span>{err.b_phn? err.b_phn[0]:''}</span><br/>
                          
                          <label>EMAIL</label><br/>
                          <input type="text" name="b_mail" id="email" value={b_mail} onChange={(e)=>{setMail(e.target.value)}} /><span>{err.b_mail? err.b_mail[0]:''}</span><br/>
                          
                          <label>PASSWORD</label><br/>
                          <input type="password" name="b_pass" id="pass" value={b_pass} onChange={(e)=>{setPass(e.target.value)}}/><span>{err.b_pass? err.b_pass[0]:''}</span><br/>
                          
                          <label>ADDRESS</label><br/>
                          <input type="text" name="b_add" id="add" value={b_add} onChange={(e)=>{setAdd(e.target.value)}} /><span>{err.b_add? err.b_add[0]:''}</span><br/>
                          
                          <button>ADD</button>
                          <div class="ad-btn2"><a href="/Admin/Buyer">CANCEL</a></div>
                        </form>
                
                            
                    </div>
                </div>
            </div>
        </div>
        
    )

}
export default CreateBuyer;