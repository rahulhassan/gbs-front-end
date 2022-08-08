import axiosConfig from '../../axiosConfig';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

const UpdateProfile=()=>{

    const [buyer,setBuyer] = useState({});

    useEffect(()=>{
        axiosConfig.get("/updateProfile")
        .then((rsp)=>{
            setBuyer(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);





    return(
        <div>
            
                                
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



                    <div>
                        <div class="container" style={{padding: "30px 0"}}>
                        {/* <form action="" method="post" enctype="multipart/form-data"> */}
                        {/* {{@csrf_field()}} */}
                            <div class="row">
                        
                                    <div class="col-sm-4">
                                        
                                    {/* @if($buyer->b_image==null) */}
                                        
                                    <img src="http://localhost:8000/dummy/download.png" width="300px" alt=""></img>
                                        
                                        {/* @else */}
                                        
                                            {/* <img src="{{asset('buyerImages/'.$buyer->b_image)}}" width="300px" height="300px" alt=""> */}
                                        
                                        {/* @endif */}


                                    <br></br>
                                        <input type="file" name="pro_pic"></input><br></br>
                                                {/* @error('pro_pic')
                                                        <span class="text-danger">{{$message}}</span><br><br>
                                                @enderror */}
                                       
                                    </div>
                                    <div class="col-sm-8">
                                        <table  class="table table-striped bg-dark text-light table-responsive-sm" style={{width:"500px", height:"300px"}}>
                                            <tr>
                                                <td><b>Name</b></td>
                                                <td><b>:</b></td>
                                                <td><b><input type="text" class="form-control" name="name" value={buyer.b_name}></input></b>
                                                {/* @error('name')
                                                        <span class="text-danger">{{$message}}</span>
                                                @enderror */}
                                                </td>
                                            </tr>



                                            <tr>
                                                <td><b>Email</b></td>
                                                <td><b>:</b></td>
                                                <td><b><input type="text" class="form-control " name="email" value={buyer.b_mail} disabled></input></b>
                                                {/* @error('email')
                                                        <span class="text-danger">{{$message}}</span>
                                                @enderror */}
                                                </td>
                                            </tr>



                                            <tr>
                                                <td><b>Phone</b></td>
                                                <td><b>:</b></td>
                                                <td><b><input type="text" class="form-control" name="phone" value={buyer.b_phn}></input></b>

                                                {/* @error('phone')
                                                        <span class="text-danger">{{$message}}</span>
                                                @enderror */}
                                                </td>
                                            </tr>



                                            <tr>
                                                <td><b>Address</b></td>
                                                <td><b>:</b></td>
                                                <td><b><input type="text" class="form-control" name="address" value={buyer.b_add}></input></b>

                                                {/* @error('address')
                                                        <span class="text-danger">{{$message}}</span>
                                                @enderror */}
                                                </td>
                                            </tr>



                                        </table>
                                        <button type="Submit" class="btn btn-success">Update</button>
                                    </div>
                        
                                    

                            
                            </div>
                        {/* </form> */}
                        </div>
                    </div>
        </div>
    )
}
export default UpdateProfile;