import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosConfig from './axiosConfig';
import swal from 'sweetalert';

const SignupUser = ()=>{

    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const[err,setErr] = useState("");


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = (e) =>{
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Signing Up...";
        
        axiosConfig.post("/registration",inputs)
        .then((rsp)=>{
            if (rsp.data.status === 200) {
                swal('Success', rsp.data.msg, 'success')
                navigate('/signin');
            } else if (rsp.data.status === 422) {
                setErr(rsp.data.errors)
                thisClicked.innerText = "Sign Up";
            }
        })
                
    }
    

    return(
        <div className="w-25 p-3 justify-content-center">

                <h3>Registration</h3>
                <hr/>
                <br/>
                
                <label>Name</label>
                <input type="text" name="name" value={inputs.name || '' } onChange={handleChange}  className="form-control" placeholder="Enter Your Name"/>
                <p className="text-danger">{err.name? err.name[0]:''}</p>
               
                <label>Email</label>
                <input type="text" name="email" value={inputs.email || '' } onChange={handleChange} className="form-control" placeholder="Enter Your Email"/>
                <p className="text-danger">{err.email? err.email[0]:''}</p>
               
                <label>Account Type</label>
                <select className="form-control" name="type" value={inputs.type || '' } onChange={handleChange}>
                    <option>Select account type</option>
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                </select>
                <p className="text-danger">{err.type? err.type[0]:''}</p>
                
                <label>Phone</label>
                <input type="text" name="phone" value={inputs.phone || '' } onChange={handleChange} className="form-control" placeholder="Enter your phone number"/>
                <p className="text-danger">{err.phone? err.phone[0]:''}</p>
                

                <label>Address</label>
                <input type="text" name="address" value={inputs.address || '' } onChange={handleChange} className="form-control" placeholder="Enter your present address"/>
                <p className="text-danger">{err.address? err.address[0]:''}</p>
                

                <label>Password</label>
                <input type="password" name="psw" vvalue={inputs.psw || '' } onChange={handleChange} className="form-control" placeholder="Enter Password"/>
                <p className="text-danger">{err.psw? err.psw[0]:''}</p>
                
                <label>Repeat Password</label>
                <input type="password" name="psw_repeat" value={inputs.psw_repeat || '' } onChange={handleChange} className="form-control" placeholder="Re-entry Password"/>
                <p className="text-danger">{err.psw_repeat? err.psw_repeat[0]:''}</p>
                
                <br/>
                <button type="submit" onClick={submitForm} className="btn btn-primary">Sign Up</button>
                <p>Already registered <Link to="/signin">sign in?</Link></p>

        </div>
    )
}
export default SignupUser;