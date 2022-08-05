import {Link, useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axiosConfig from '../../axiosConfig';

const OrderDetails=()=>{

    const {title} = useParams();
    const [product,setProduct] = useState({});

    useEffect(()=>{
        axiosConfig.get(`/orderDetails/${title}`)
        .then((rsp)=>{
            setProduct(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);


    const[b_name,setName]=useState("");
    const[b_phn,setPhone]=useState("");
    const[b_add,setAddress]=useState("");
    const[payment_type,setPayment]=useState("");
    const[msg,setMsg]=useState("");
    const[err,setErr]=useState("");

    const handleForm=(event)=>
    {
        event.preventDefault();
        var data={b_name:b_name,b_phn:b_phn,b_add:b_add,payment_type:payment_type}
        axiosConfig.post(`/orderDetails/${title}`,data)
        .then((rsp)=>{
            setMsg(rsp.data.msg);
            setErr(rsp.data);
            //debugger;
        },(er)=>{
            if(er.response.status==422)
            {
                setErr(err.response.data);
            }
            else
            {
                setMsg("Server Error Occured");
            }
            //debugger;
        })
    }



    return(

        <div>

            <hr/>
            <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>Order Overview</h4>
            <hr/>

            {/* @if(session('orderPlaced'))
                    <div class="alert alert-warning" role="alert">
                        <b>{{session('orderPlaced')}}</b>
                        
                    </div>
            @endif */}


            <div class="container" style={{padding: "30px 0"}}>

           <form onSubmit={handleForm}>

            

                    {/* @csrf */}
                    <div class="row">
                
                            <div class="col-sm-4 ">
                                <h5>Product Review</h5>
                                <img src={`http://localhost:8000/images/${product.image_path}`} height="180px" width="200px"></img><br/><br/>
                                <b>Title: {product.p_title}</b><br/>
                                <b>Price: {product.p_price}</b><br/>
                                {/* <!-- <b>Quantity: {product.p_quantity}</b><br> -->

                                <!-- <b>Your Quantity:<input type="text" class="form-control " name="quantity" value="{{old('quantity')}}" style="width:50px"></b>
                                        @error('quantity')
                                                <span class="text-danger">{{$message}}</span>
                                        @enderror --> */}
                            </div>
                        
                            <div class="col-sm-4">
                                    <h5>Shipping Information</h5>
                                    <table  class="table table-striped table-responsive-sm" style={{width:"300px",height:"320px"}}>
                                    <tr>
                                        <td><b>Name</b></td>
                                        <td><b>:</b></td>
                                        <td>
                                        <input type="text" value={b_name} onChange={(e)=>{setName(e.target.value)}}></input>
                                        <span>{err.b_name? err.b_name[0]:''}</span>
                                        </td>
                                    </tr>



                                    <tr>
                                        <td><b>Phone</b></td>
                                        <td><b>:</b></td>
                                        <td>
                                        <input type="text" value={b_phn} onChange={(e)=>{setPhone(e.target.value)}}></input>
                                        <span>{err.b_phn? err.b_phn[0]:''}</span>
                                        </td>
                                    </tr>



                                    <tr>
                                        <td><b>Address</b></td>
                                        <td><b>:</b></td>
                                        <td>
                                        <input type="text" value={b_add} onChange={(e)=>{setAddress(e.target.value)}}></input>
                                        <span>{err.b_add? err.b_add[0]:''}</span>
                                        </td>
                                    </tr>



                                </table>
                                    
                            </div>
                                    <div class="col-sm-4">
                                    <h5>Payment Methods</h5>


                                    <div class="payment-method">
                                            <table  class="table table-striped bg-dark text-light table-responsive-sm" style={{width: "300px", height:"200px"}}>
                                                    <tr>
                                                            <td>
                                                                    <div class="input-radio">
                                                                    <input type="radio" name={payment_type} value={payment_type} onChange={(e)=>{setAddress(e.target.value)}}></input>
                                                                            
                                                                            <label for="payment-1">
                                                                                    <span></span>
                                                                                    Cash on Delivery
                                                                            </label>
                                                                            <div class="caption">
                                                                                    <p>You can select cash on delivery.</p>
                                                                            </div>
                                                                    </div>
                                                            </td>

                                                    </tr>
                                                    <tr>
                                                            <td>
                                                                    <div class="input-radio">
                                                                    <input type="radio" name={payment_type}  value={b_add} onChange={(e)=>{setAddress(e.target.value)}}></input>
                                                                    
                                                                            <label for="payment-2">
                                                                                    Bkash
                                                                            </label>
                                                                            <div class="caption">
                                                                            <p> Bkash No: 01723654987</p>
                                                                                    
                                                                            </div>
                                                                    </div>
                                                            </td>

                                                    </tr>
                                                    <tr>
                                                            <td>
                                                                    <div class="input-radio">
                                                                    <input type="radio" name={payment_type} value={b_add} onChange={(e)=>{setAddress(e.target.value)}}></input>
                                                                            
                                                                            <label for="payment-3">
                                                                                    Nogod
                                                                            </label>
                                                                            <div class="caption">
                                                                            <p> Nogod No: 01723654987</p>
                                                                                    
                                                                            </div>
                                                                    </div>
                                                            </td>

                                                    </tr>
                                                    <tr>
                                                            <td>
                                                                    <div class="input-radio">
                                                                    <input type="radio" name={payment_type} value={b_add} onChange={(e)=>{setAddress(e.target.value)}}></input>
                                                                    
                                                                            <label for="payment-4">
                                                                                    Rocket
                                                                            </label>
                                                                            <div class="caption">
                                                                            <p>  Rocket No: 01723654987</p>
                                                                            
                                                                            </div>
                                                                    </div>
                                                            </td>
                                                    </tr>


                                                
                                            </table>
                                            <span>{err.payment_type? err.payment_type[0]:''}</span>
                                                    <br/><br/>
                                    </div>
</div>
                    </div>
                    <button type="Submit" class="btn btn-success" >PLACE ORDER</button>
                    {/* <Link to={"/orderCompleted"} ><button type="Submit" class="btn btn-success" >PLACE ORDER</button></Link> */}
                </form>
            </div>

            </div>
    

    )
}
export default OrderDetails;