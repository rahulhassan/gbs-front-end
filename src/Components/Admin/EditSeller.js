import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import LeftBar from "./Bar/LeftBar";


const EditSeller=(props)=> {

    const [inputs,setInputs] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();



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
    }

    const submitForm = (e) =>{
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Updating";
        console.log(inputs);
        axios.post(`http://localhost:8000/api/admin/files/showSeller`, inputs).then((rsp)=>{
            navigate('/Admin/Seller');
        });
        
    }


    return (

        <div>
             <LeftBar />
             <div class="container">
                 <div class="content">
                     <div class="content-3">
                         <h1>UPDATE SELLER</h1>                           
                           <label>SELLER ID</label><br/>
                           <input type="text" name="s_id" id="id" value={inputs.s_id || '' } onChange={handleChange} /><br/>
                           <label>SELLER NAME</label><br/>
                           <input type="text" name="s_name" id="name" value={inputs.s_name || '' } onChange={handleChange} /><br/>                        
                           <label>PHONE NUMBER</label><br/>
                           <input type="text" name="s_phn" id="phn" value={inputs.s_phn || '' } onChange={handleChange} /><br/>                        
                           <label>EMAIL</label><br/>
                           <input type="text" name="s_mail" id="email" value={inputs.s_mail || '' } onChange={handleChange} /><br/>                        
                           <label>PASSWORD</label><br/>
                           <input type="text" name="s_pass" id="pass" value={inputs.s_pass || '' } onChange={handleChange} /><br/>                        
                           <label>ADDRESS</label><br/>
                           <input type="text" name="s_add" id="add" value={inputs.s_add || '' } onChange={handleChange} /><br/>                        
                           <button type="button" onClick={submitForm}>UPDATE</button>                                        
                     </div>
                 </div>
             </div>
         </div>
    )
}

export default EditSeller;