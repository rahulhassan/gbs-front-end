import "./CSS/adminDashboard.css";
import LeftBar from './Bar/LeftBar';
import TopBar from './Bar/TopBar';
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

        var data = {s_name:s_name,s_phn:s_phn, s_mail:s_mail,s_pass:s_pass,s_add:s_add};
        axios.post("http://localhost:8000/api/admin/files/createSeller",data).then((rsp)=>{
            navigate('/Admin/Seller');
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
            <TopBar />
            <div class="ad-container">
                <div class="ad-content">
                    <div class="ad-content-3">
                        <h1>CREATE A NEW SELLER</h1>
                             
                        <form action="" method="POST" onSubmit={handleForm}>

                            <h1>{msg}</h1>
                          
                          <label>SELLER NAME</label><br />
                          <input type="text" name="s_name" id="name" value={s_name} onChange={(e)=>{setName(e.target.value)}}/><span>{err.s_name? err.s_name[0]:''}</span><br/>
                          
                          <label>PHONE NUMBER</label><br/>
                          <input type="text" name="s_phn" id="phn" value={s_phn} onChange={(e)=>{setPhn(e.target.value)}} /><span>{err.s_phn? err.s_pass[0]:''}</span><br/>
                          
                          <label>EMAIL</label><br/>
                          <input type="text" name="s_mail" id="email" value={s_mail} onChange={(e)=>{setMail(e.target.value)}} /><span>{err.s_mail? err.s_mail[0]:''}</span><br/>
                          
                          <label>PASSWORD</label><br/>
                          <input type="password" name="s_pass" id="pass" value={s_pass} onChange={(e)=>{setPass(e.target.value)}}/><span>{err.s_pass? err.s_pass[0]:''}</span><br/>
                          
                          <label>ADDRESS</label><br/>
                          <input type="text" name="s_add" id="add" value={s_add} onChange={(e)=>{setAdd(e.target.value)}} /><span>{err.s_add? err.s_add[0]:''}</span><br/>
                          
                          <button>ADD</button>
                          <div class="ad-btn2"><a href="/Admin/Seller">CANCEL</a></div>
                        </form>
                
                            
                    </div>
                </div>
            </div>
        </div>
        
    )

}
export default CreateSeller;