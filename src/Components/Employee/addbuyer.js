
//import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const AddBuyer =()=>{
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
        axios.post("http://localhost:8000/api/employee/AddBuyer",data).then((rsp)=>{
            navigate('/Employee/employeeprofile');
            setMsg(rsp.data.msg);
        },(err)=>{
            if(err.response.status===422) //for data validation
            {
                setErr(err.response.data);
            }else{
                setMsg("Server Error Occured");
            }
        });
        
        
    }

    return (
        <div>
            
            <div className="ad-container">
                <div className="ad-content">
                    <div className="ad-content-3">
                        <h1>Add A Buyer</h1>
                             
                        <form action="" method="POST" onSubmit={handleForm}>
                            <h1>{msg}</h1>
                          
                          <label>EMPLOYEE NAME</label><br />
                          <input type="text" name="e_name" id="name" value={b_name} onChange={(e)=>{setName(e.target.value)}}/><span className="ad-err">{err.e_name? err.e_name[0]:''}</span><br/>
                          
                          <label>PHONE NUMBER</label><br/>
                          <input type="text" name="e_phn" id="phn" value={b_phn} onChange={(e)=>{setPhn(e.target.value)}} /><span className="ad-err">{err.e_phn? err.e_phn[0]:''}</span><br/>
                          
                          <label>EMAIL</label><br/>
                          <input type="text" name="e_mail" id="email" value={b_mail} onChange={(e)=>{setMail(e.target.value)}} /><span className="ad-err">{err.e_mail? err.e_mail[0]:''}</span><br/>
                          
                          <label>PASSWORD</label><br/>
                          <input type="password" name="e_pass" id="pass" value={b_pass} onChange={(e)=>{setPass(e.target.value)}}/><span className="ad-err">{err.e_pass? err.e_pass[0]:''}</span><br/>
                          
                          <label>ADDRESS</label><br/>
                          <input type="text" name="e_add" id="add" value={b_add} onChange={(e)=>{setAdd(e.target.value)}} /><span className="ad-err">{err.e_add? err.e_add[0]:''}</span><br/>
                          
                          <button>ADD</button>
                          <div className="ad-btn2"><a href="/Employee/buyerlist">CANCEL</a></div>

                        </form>
                
                            
                    </div>
                </div>
            </div>
        </div>
        
    )

}
export default AddBuyer;