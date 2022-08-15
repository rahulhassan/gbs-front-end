import TopMenu from '../Main/TopMenu';
import axiosConfig from '../../axiosConfig';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";


const UpdateProfile=()=>{

    const [buyer,setBuyer] = useState({});

    useEffect(()=>{
        axiosConfig.get("/updateProfile")
        .then((rsp)=>{
            setBuyer(rsp.data);
            setImage(rsp.data.b_image);
            setName(rsp.data.b_name);
            setMail(rsp.data.b_mail);
            setPhone(rsp.data.b_phn);
            setAddress(rsp.data.b_add);
           
            //console.log(rsp);
        },(err)=>{

        }) 
    },[]);

    
    const navigate = useNavigate();
    const[b_image,setImage] = useState("");
    const[b_name,setName] = useState("");
    const[b_mail,setMail] = useState("");
    const[b_phn,setPhone] = useState("");
    const[b_add,setAddress] = useState("");
    const[msg,setMsg]=useState("");

   //________________________________________________________________________________________________

    const[err,setErr] = useState("");

    const handleForm = (e) =>{
        e.preventDefault();
        var fData = new FormData();
        fData.append("b_image", b_image);
        fData.append("b_name", b_name);
        fData.append("b_mail", b_mail);
        fData.append("b_phn", b_phn);
        fData.append("b_add", b_add);



        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Updating";
        swal("Do you want to update?", {
            buttons: ["No", "Yes"],
        })
        .then((willUpdate) => {
            if (willUpdate) {
                // console.log(b_image);
                // console.log(b_name);
                // console.log(b_mail);
                // console.log(b_phn);
                // console.log(b_add);
                axiosConfig.post("/updateProfile",fData)
                .then((rsp)=>{
                    if (rsp.data.status === 200) {
                        //navigate('/seller/dashboard');
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



//_______________________________________________________________________________________________


    // const handleForm=(event)=>{
    //     event.preventDefault();
    //     var fData = new FormData();
    //     fData.append("b_image",b_image.name);
    //     fData.append("b_name", b_name.name);
    //     fData.append("b_mail", b_mail);
    //     fData.append("b_phn", b_phn);
    //     fData.append("b_add", b_add);
    
    //     //var data = { p_title:p_title,p_brand:p_brand, p_price:p_price, Category:Category, p_description:p_description, p_quantity:p_quantity, image:image};
    //     console.log(fData)
    //     axiosConfig.put("/updateProfile",fData)
    //      .then((rsp)=>{
    //     setMsg(rsp.data.msg);
    //     setErr(rsp.data);
    //     //debugger;
    // },(er)=>{
    //     if(er.response.status==422)
    //     {
    //         setErr(err.response.data);
    //     }
    //     else
    //     {
    //         setMsg("Server Error Occured");
    //     }
    //     //debugger;
    // })
    // }

//_____________________________________________________________________________________________________


    return(
        <div>
            
            <TopMenu/>
                                
                    <hr/>
                    <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>Update Profile</h4>
                    <hr/>

{/* 
                    @if(session('profileUpdated'))
                                    <div class="alert alert-success" role="alert">
                                        <b>{{session('profileUpdated')}}</b>
                                        
                                    </div>
                    @endif
                    @if(session('profileNotUpdated'))
                                    <div class="alert alert-danger" role="alert">
                                        <b>{{session('profileNotUpdated')}}</b>
                                        
                                    </div>
                    @endif */}


                            <div class="alert alert-success" role="alert">
                                        {/* <b>{msg}</b> */}
                                        
                         </div>


                    <div>
                        <div class="container" style={{padding: "30px 0"}}>
                        {/* <form onSubmit={handleForm}> */}

                            <div class="row">
                        
                                    <div class="col-sm-4">
                                        
                                    {buyer.b_image==null? <img src="http://localhost:8000/dummy/download.png" width="300px" alt=""></img>:
                                      <img src={`http://localhost:8000/buyerImages/${buyer.b_image}`} width="300px" height="300px" alt=""></img> }
                                        
                                   
                                        
                                      
                                        
                                          
                                        
    


                                    <br></br>
                                        <input type="file" name="b_image"  onChange={(e)=>{setImage(e.target.files[0])}} ></input><br></br>
                                        <span>{err.b_image? err.b_image[0]:''}</span>
                                       
                                    </div>
                                    <div class="col-sm-8">
                                        <table  class="table table-striped bg-dark text-light table-responsive-sm" style={{width:"500px", height:"300px"}}>
                                            <tr>
                                                <td><b>Name</b></td>
                                                <td><b>:</b></td>
                                                <td><b><input type="text" class="form-control" name="b_name" value={b_name}  onChange={(e)=>{setName(e.target.value)}}></input></b>
                                                <span>{err.b_name? err.b_name[0]:''}</span>
                                                </td>
                                            </tr>



                                            <tr>
                                                <td><b>Email</b></td>
                                                <td><b>:</b></td>
                                                <td><b><input type="text" class="form-control " name="b_mail" value={b_mail}  onChange={(e)=>{setMail(e.target.value)}}disabled></input></b>
                                                <span>{err.b_mail? err.b_mail[0]:''}</span>
                                                </td>
                                            </tr>



                                            <tr>
                                                <td><b>Phone</b></td>
                                                <td><b>:</b></td>
                                                <td><b><input type="text" class="form-control" name="b_phn" value={b_phn}  onChange={(e)=>{setPhone(e.target.value)}}></input></b>

                                                <span>{err.b_phn? err.b_phn[0]:''}</span>
                                                </td>
                                            </tr>



                                            <tr>
                                                <td><b>Address</b></td>
                                                <td><b>:</b></td>
                                                <td><b><input type="text" class="form-control" name="b_add" value={b_add}  onChange={(e)=>{setAddress(e.target.value)}}></input></b>

                                                <span>{err.b_add? err.b_add[0]:''}</span>
                                                </td>
                                            </tr>



                                        </table>
                                        <button type="Submit" onClick={handleForm} class="btn btn-success">Update</button>
                                    </div>
                        
                                    

                            
                            </div>
                        {/* </form> */}
                        </div>
                    </div>
        </div>
    )
}
export default UpdateProfile;