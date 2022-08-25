import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosConfig from '../axiosConfig';
import swal from 'sweetalert';
import NavBar from "./NavBar/NavBar";

const AddEmployee = ()=>{

    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const[err,setErr] = useState("");


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = (e) =>{
        
        axiosConfig.post("/employee/AddEmployee",inputs)
        .then((rsp)=>{
            if (rsp.data.status === 200) {
                swal('Success', rsp.data.msg, 'success')
                navigate('/EmployeeProfile');
            } else if (rsp.data.status === 422) {
                setErr(rsp.data.errors)
            }
        });
                
    }
    

    return(
        <div><NavBar/>
        <div className="w-25 p-3 justify-content-center">

                <h4>Add Employee</h4>
                <br/>
                
                <label>Name</label>
                <input type="text" name="e_name" value={inputs.e_name || '' } onChange={handleChange}  className="form-control" placeholder="Enter Your Name"/>
                <p className="text-danger">{err.e_name? err.e_name[0]:''}</p>
               
                <label>Email</label>
                <input type="text" name="e_mail" value={inputs.e_mail || '' } onChange={handleChange} className="form-control" placeholder="Enter Your Email"/>
                <p className="text-danger">{err.e_mail? err.e_mail[0]:''}</p>
               
                
                <label>Phone</label>
                <input type="text" name="e_phn" value={inputs.e_phn || '' } onChange={handleChange} className="form-control" placeholder="Enter your phone number"/>
                <p className="text-danger">{err.e_phn? err.e_phn[0]:''}</p>
                

                <label>Address</label>
                <input type="text" name="e_add" value={inputs.e_add || '' } onChange={handleChange} className="form-control" placeholder="Enter your present address"/>
                <p className="text-danger">{err.e_add? err.e_add[0]:''}</p>
                

                <label>Password</label>
                <input type="password" name="e_pass" vvalue={inputs.e_pass || '' } onChange={handleChange} className="form-control" placeholder="Enter Password"/>
                <p className="text-danger">{err.e_pass? err.e_pass[0]:''}</p>
                
                <br/>
                <button type="submit" onClick={submitForm} className="btn btn-primary">Add</button>

        </div>
        </div>
    )
}
export default AddEmployee;