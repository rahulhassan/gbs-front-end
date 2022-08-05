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
            {/* <form action="{{route('buyer.other.placeOrderSubmit',['title'=>$products->p_title])}}" method="post"> */}

            

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
                                    <table  class="table table-striped bg-dark text-light table-responsive-sm" style={{width:"300px",height:"320px"}}>
                                    <tr>
                                        <td><b>Name</b></td>
                                        <td><b>:</b></td>
                                        <td>
                                            {/* <b><input type="text" class="form-control" name="name" value="{{old('name')}}"></b>
                                        @error('name')
                                                <span class="text-danger">{{$message}}</span>
                                        @enderror */}
                                        </td>
                                    </tr>



                                    <tr>
                                        <td><b>Phone</b></td>
                                        <td><b>:</b></td>
                                        <td>
                                            {/* <b><input type="text" class="form-control " name="phone" value="{{old('phone')}}"></b>
                                        @error('phone')
                                                <span class="text-danger">{{$message}}</span>
                                        @enderror */}
                                        </td>
                                    </tr>



                                    <tr>
                                        <td><b>Address</b></td>
                                        <td><b>:</b></td>
                                        <td>
                                            {/* <b><input type="text" class="form-control" name="address" value="{{old('address')}}"></b>

                                        @error('address')
                                                <span class="text-danger">{{$message}}</span>
                                        @enderror */}
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
                                                                            {/* <input type="radio" name="payment" id="payment-1" value="Cash"> */}
                                                                            
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
                                                                            {/* <input type="radio" name="payment" id="payment-2" value="Bkash"> */}
                                                                    
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
                                                                                    {/* <input type="radio" name="payment" id="payment-3" value="Nogod"> */}
                                                                            
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
                                                                                    {/* <input type="radio" name="payment" id="payment-4" value="Rocket"> */}
                                                                    
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
                                                    {/* @error('payment')
                                                    <span class="text-danger"><b>{{$message}}</b></span>
                                                    @enderror */}

                                                    <br/><br/>
                                    </div>

                    </div>
                    {/* <button type="Submit" class="btn btn-success" >PLACE ORDER</button> */}
                    <Link to={"/orderCompleted"} ><button type="Submit" class="btn btn-success" >PLACE ORDER</button></Link>
                {/* </form> */}
            </div>

            </div>
        </div>
    )
}
export default OrderDetails;