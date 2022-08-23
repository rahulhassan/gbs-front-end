import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosConfig from '../axiosConfig';
import swal from 'sweetalert';
import NavBar from "./NavBar/NavBar";

const EditBuyerList=()=>{
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const {id} = useParams();
    const[err,setErr] = useState("");




    useEffect(()=>{
        axiosConfig.get(`/employee/editbuyer/${id}`).then((res)=>{
            setInputs({
                b_id:res.data.b_id,
                name:res.data.b_name,
                email:res.data.b_mail,
                phone:res.data.b_phn,
                address:res.data.b_add,
                
            });
            
        });
    },[id]);

    // const handleImage=(file)=>{
    //     setImage(file[0]);
    // }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = (e) =>{
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Updating";

        const fData = new FormData();
        fData.append("b_id", inputs.b_id);
        fData.append("name", inputs.name);
        fData.append("email", inputs.email);
        fData.append("phone", inputs.phone);
        fData.append("address", inputs.address);

        swal("Do you want to update?", {
            buttons: ["No", "Yes"],
        })
        .then((willUpdate) => {
            if (willUpdate) {
                axiosConfig.post("/employee/editbuyer",fData)
                .then((rsp)=>{
                    console.log(rsp.data)
                    if (rsp.data.status === 200) {
                        navigate('/employee/editbuyer');
                        swal('Success', rsp.data.msg, 'success')
                    } else if (rsp.data.status === 422) {
                        setErr(rsp.data.errors)
                        thisClicked.innerText = "Update";
                    }
                })
                
            } else {
                swal("Profile is not Updated");
                thisClicked.innerText = "Update";
                
            }
        });
    }

    // if(loading){
    //     return (
    //         <div>
    //             <NavBar/>
    //             <h4>Loading...</h4>
    //         </div>
    //     )
    // }



    return(
        <div><NavBar/>
            <div className="container py-5 h-150">
                <div className="row d-flex justify-content-center align-items-center h-150">
                    <div className="row">
                    <h3>Update Buyer Profile</h3>
                    <div className="col-sm-6">
                    <div className="card p-4">
        
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter Your Name" value={inputs.name ||'' } onChange={handleChange} />
                    <p className="text-danger">{err.name? err.name[0]:''}</p>
            
                    <label>Email</label>
                    <input type="text" name="email" value={inputs.email ||'' } className="form-control" placeholder="Enter Your Email" onChange={handleChange}/>
                    <p className="text-danger">{err.email? err.email[0]:''}</p>

                    <label>Phone</label>
                    <input type="text" name="phone" value={inputs.phone ||'' }  className="form-control" placeholder="Enter your phone number" onChange={handleChange}/>
                    <p className="text-danger">{err.phone? err.phone[0]:''}</p>
                
                    <label>Address</label>
                    <input type="text" name="address" value={inputs.address ||'' }  className="form-control" placeholder="Enter your present address" onChange={handleChange}/>
                    <p className="text-danger">{err.address? err.address[0]:''}</p>
                
                    <button type="submit" className="btn btn-primary" onClick={submitForm}>Update</button>
                
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default EditBuyerList;