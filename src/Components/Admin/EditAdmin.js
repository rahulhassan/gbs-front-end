import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const EditAdmin=()=> {
    const [inputs,setInputs] = useState({});
    const navigate = useNavigate();
    const[msg,setMsg] = useState("");
    const[err,setErr] = useState("");


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
        axios.post(`http://localhost:8000/api/admin/files/profile`, inputs).then((rsp)=>{
            navigate('/Admin/Profile');
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
             <div class="ad-p-sec">
                 
                <h2>UPDATE PASSWORD</h2>
                <h1>{msg}</h1>  
                <div class="ad-min">
                                        
                    <label>OLD PASSWORD</label><br/>
                    <input type="text" name="o_pass" id="pass" value={inputs.o_pass || '' } onChange={handleChange} /><span class="ad-err">{err.o_pass? err.o_pass[0]:''}</span><br/>
                    <label>NEW PASSWORD</label><br/>
                    <input type="password" name="a_pass" id="pass" value={inputs.a_pass || '' } onChange={handleChange} /><span class="ad-err">{err.a_pass? err.a_pass[0]:''}</span><br/>                        
                    <label>RE-TYPE PASSWORD</label><br/>
                    <input type="password" name="r_pass" id="pass" value={inputs.r_pass || '' } onChange={handleChange} /><span class="ad-err">{err.r_pass? err.r_pass[0]:''}</span><br/>                        
                    <button type="button" onClick={submitForm}>UPDATE</button>          

                 </div>                            
                     
             </div>
         </div>
    )
}

export default EditAdmin;