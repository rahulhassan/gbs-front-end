import TopMenu from '../Main/TopMenu';
import axiosConfig from '../../axiosConfig';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

const Profile=()=>{

    const [buyer,setBuyer] = useState({});

    useEffect(()=>{
        axiosConfig.get("/profile")
        .then((rsp)=>{
            setBuyer(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);

    //_________________________________________________________________________________________________


    return(
        <div>

            <TopMenu/>

                <hr/>
                <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>Profile</h4>
                <hr/>


                    <div class="alert alert-success" role="alert">
                                        {/* <b>{msg}</b> */}
                                        
                         </div>



                <div>
                    <div class="container" style={{padding: "30px 0"}}>
                        <div class="row">
                                             
                                <div class="col-sm-4 ">
                                {buyer.b_image==null? <img src="http://localhost:8000/dummy/download.png" width="300px" alt=""></img>:
                                      <img src={`http://localhost:8000/buyerImages/${buyer.b_image}`} width="300px" height="300px" alt=""></img> }
                                        
                                    


                                   
                                </div>
                                <div class="col-sm-8">
                                    <table  class="table table-striped bg-dark text-light table-responsive-sm" style={{width:"500px", height:"300px"}}>
                                        <tr>
                                            <td><b>Name</b></td>
                                            <td><b>:</b></td>
                                            <td>{buyer.b_name}</td>
                                            
                                            {/* <td><b>{{$buyer->b_name}}</b></td> */}
                                        </tr>
                                        <tr>
                                            <td><b>Email</b></td>
                                            <td><b>:</b></td>
                                            <td>{buyer.b_mail}</td>
                                            {/* <td><b>{{$buyer->b_mail}}</b></td> */}
                                        </tr>
                                        <tr>
                                            <td><b>Phone</b></td>
                                            <td><b>:</b></td>
                                            <td>{buyer.b_phn}</td>
                                            {/* <td><b>{{$buyer->b_phn}}</b></td> */}
                                        </tr>
                                        <tr>
                                            <td><b>Address</b></td>
                                            <td><b>:</b></td>
                                            <td>{buyer.b_add}</td>
                                            {/* <td><b>{{$buyer->b_add}}</b></td> */}
                                        </tr>
                                    </table>
                                   <Link to={"/updateProfile"}><button type="button" class="btn btn-success">Update Profile</button></Link>

                                </div>
                    
                            

                        
                        </div>
                    </div>
                </div>

      </div>
    )
}
export default Profile;