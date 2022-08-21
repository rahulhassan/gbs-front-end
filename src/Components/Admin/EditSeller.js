import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LeftBar from "./Bar/LeftBar";


const EditSeller=(props)=> {

    const [inputs,setInputs] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const[msg,setMsg] = useState("");
    const[err,setErr] = useState("");



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/admin/files/showSeller/${id}`).then((res)=>{
            setInputs({
                s_id:res.data.s_id,
                s_name:res.data.s_name,
                s_phn:res.data.s_phn,
                s_mail:res.data.s_mail,
                s_pass:res.data.s_pass,
                s_add:res.data.s_add,
                
            });
        });
    },[id]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
        setMsg('');
        setErr('');
    }

    const submitForm = (e) =>{
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Updating";
        console.log(inputs);
        axios.post(`http://localhost:8000/api/admin/files/showSeller`, inputs).then((rsp)=>{
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
             <div class="ad-container">
                 <div class="ad-content">
                     <div class="ad-content-3">
                         <h1>UPDATE SELLER</h1>
                         <h1>{msg}</h1> 
                         <form>                          
                           <label>SELLER ID</label><br/>
                           <input readOnly name="s_id" id="id" value={inputs.s_id || '' } onChange={handleChange} /><br/>
                           <label>SELLER NAME</label><br/>
                           <input type="text" name="s_name" id="name" value={inputs.s_name || '' } onChange={handleChange} /><span>{err.s_name? err.s_name[0]:''}</span><br/>                        
                           <label>PHONE NUMBER</label><br/>
                           <input type="text" name="s_phn" id="phn" value={inputs.s_phn || '' } onChange={handleChange} /><span>{err.s_phn? err.s_phn[0]:''}</span><br/>                        
                           <label>EMAIL</label><br/>
                           <input type="text" name="s_mail" id="email" value={inputs.s_mail || '' } onChange={handleChange} /><span>{err.s_mail? err.s_mail[0]:''}</span><br/>                        
                           <label>PASSWORD</label><br/>
                           <input type="text" name="s_pass" id="pass" value={inputs.s_pass || '' } onChange={handleChange} /><span>{err.s_pass? err.s_pass[0]:''}</span><br/>                        
                           <label>ADDRESS</label><br/>
                           <input type="text" name="s_add" id="add" value={inputs.s_add || '' } onChange={handleChange} /><span>{err.s_add? err.s_add[0]:''}</span><br/>                        
                           <button type="button" onClick={submitForm}>UPDATE</button>  
                           <div class="ad-btn2"><a href="/Admin/Seller">CANCEL</a></div>
                        </form>                                    
                     </div>
                 </div>
             </div>
         </div>
    )
}

export default EditSeller;