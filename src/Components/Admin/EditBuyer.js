import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import LeftBar from "./Bar/LeftBar";


const EditBuyer=(props)=> {

    const [inputs,setInputs] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/admin/files/showBuyer/${id}`).then((res)=>{
            setInputs({
                b_id:res.data.b_id,
                b_name:res.data.b_name,
                b_phn:res.data.b_phn,
                b_mail:res.data.b_mail,
                b_pass:res.data.b_pass,
                b_add:res.data.b_add,
                
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
        axios.post(`http://localhost:8000/api/admin/files/showBuyer`, inputs).then((rsp)=>{
            navigate('/Admin/Buyer');
        });
        
    }


    return (

        <div>
             <LeftBar />
             <div class="container">
                 <div class="content">
                     <div class="content-3">
                         <h1>UPDATE BUYER</h1>                           
                           <label>BUYER ID</label><br/>
                           <input type="text" name="b_id" id="id" value={inputs.b_id || '' } onChange={handleChange} /><br/>
                           <label>BUYER NAME</label><br/>
                           <input type="text" name="b_name" id="name" value={inputs.b_name || '' } onChange={handleChange} /><br/>                        
                           <label>PHONE NUMBER</label><br/>
                           <input type="text" name="b_phn" id="phn" value={inputs.b_phn || '' } onChange={handleChange} /><br/>                        
                           <label>EMAIL</label><br/>
                           <input type="text" name="b_mail" id="email" value={inputs.b_mail || '' } onChange={handleChange} /><br/>                        
                           <label>PASSWORD</label><br/>
                           <input type="text" name="b_pass" id="pass" value={inputs.b_pass || '' } onChange={handleChange} /><br/>                        
                           <label>ADDRESS</label><br/>
                           <input type="text" name="b_add" id="add" value={inputs.b_add || '' } onChange={handleChange} /><br/>                        
                           <button type="button" onClick={submitForm}>UPDATE</button>                                        
                     </div>
                 </div>
             </div>
         </div>
    )
}

export default EditBuyer;