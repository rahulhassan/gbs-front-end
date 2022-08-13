import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import LeftBar from "./Bar/LeftBar";


const EditEmployee=(props)=> {

    const [inputs,setInputs] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/admin/files/show/${id}`).then((res)=>{
            setInputs({
                e_id:res.data.e_id,
                e_name:res.data.e_name,
                e_phn:res.data.e_phn,
                e_mail:res.data.e_mail,
                e_pass:res.data.e_pass,
                e_add:res.data.e_add,
                
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
        axios.post(`http://localhost:8000/api/admin/files/show`, inputs).then((rsp)=>{
            navigate('/Admin/Employee');
        });
        
    }


    return (

        <div>
             <LeftBar />
             <div class="container">
                 <div class="content">
                     <div class="content-3">
                         <h1>UPDATE EMPLOYEE</h1>                           
                           <label>EMPLOYEE ID</label><br/>
                           <input type="text" name="e_id" id="id" value={inputs.e_id || '' } onChange={handleChange} /><br/>
                           <label>EMPLOYEE NAME</label><br/>
                           <input type="text" name="e_name" id="name" value={inputs.e_name || '' } onChange={handleChange} /><br/>                        
                           <label>PHONE NUMBER</label><br/>
                           <input type="text" name="e_phn" id="phn" value={inputs.e_phn || '' } onChange={handleChange} /><br/>                        
                           <label>EMAIL</label><br/>
                           <input type="text" name="e_mail" id="email" value={inputs.e_mail || '' } onChange={handleChange} /><br/>                        
                           <label>PASSWORD</label><br/>
                           <input type="text" name="e_pass" id="pass" value={inputs.e_pass || '' } onChange={handleChange} /><br/>                        
                           <label>ADDRESS</label><br/>
                           <input type="text" name="e_add" id="add" value={inputs.e_add || '' } onChange={handleChange} /><br/>                        
                           <button type="button" onClick={submitForm}>UPDATE</button>                                        
                     </div>
                 </div>
             </div>
         </div>
    )
}

export default EditEmployee;