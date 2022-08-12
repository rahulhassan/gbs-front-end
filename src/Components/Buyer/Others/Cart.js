import {Link, useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axiosConfig from '../../axiosConfig';

const Cart=()=>{

    const {id} = useParams();
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        axiosConfig.get("/cart")
        .then((rsp)=>{
            setProducts(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);


    return(
        <div>


                <hr/>
                <h3 style={{textAlign:"center",fontFamily: "myFirstFont"}}>Shopping Cart </h3>
                <hr/> 



                            {/* @if(session('cartDeleted'))
                    <div class="alert alert-danger" role="alert">
                        <b>{{session('cartDeleted')}}</b>
                        
                    </div>
                    @endif

                    @if(session('cartQuantityUpdated'))
                            <div class="alert alert-warning" role="alert">
                                <b>{{session('cartQuantityUpdated')}}</b>
                                
                            </div>
                    @endif */}


                <div class="container">
                    <div class="row">
                            <div class="col-sm-1 ">
                            
                                

                            </div>

                            <div class="col-sm-10">
                        
                                    <table className="table  table-striped bg-dark text-white" >
                                            <tr>
                                                <th>Products</th>
                                                <th>Price</th>      
                                                <th>Quantity</th>
                                                <th></th>
                                                <th>Total</th>
                                                <th> </th>
                                            </tr>
                                            {
                                                  products.map((cart)=>(
                                           
                                                    <tr key={cart.p_title}>
                                                    <td>
                                                            <img src={`http://localhost:8000/images/${cart.image_path}`}  height="80px" width="80px" alt=""></img>
                                                           {/* {cart.product.p_title} */}
                                                           {cart.p_title}
                                                    </td>
                                                    
                                            
                                                    
                                                        <td >
                                                           {cart.p_price}
                                                        </td>
                                                        
                                            
                                                        <td>
                                                        
                                                                                            
                                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                        
                                                                        
                                                                        
                                                                            <button className="btn btn-link px-2"
                                                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                                            <i class="fas fa-minus"></i>
                                                                            </button>
                                                                            <button class="btn btn-link px-2"
                                                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                                            <i class="fas fa-plus "></i>
                                                                            </button>
                                                                                    
                                                                            {/* <form action="{{url('cart/quantity/update/'.$c->c_id)}}" method="post"> */}
                                                                             {/* @csrf */}
                                                                            
                                                                                    <input id="form1" min="1" name="quantity" style={{width:"50px"}} value={cart.p_quantity} type="number"
                                                                                    class="form-control form-control-sm" /> 

                                                                                    
                                                                        

                                                                    </div>       
                                                            
                                                        </td>
                                                        <td>
                                                            <button type="Submit" class="btn btn-success">Update</button>
                                                            {/* </form> */}
                                                        
                                                        </td>
                                                        <td>
                                                                {cart.p_price * cart.p_quantity}   
                                                        </td>
                                                            <td>
                                                            {/* <a href="{{url('cart/destroy/'.$c->c_id)}}"><button type="button" class="btn-close btn-close-white" aria-label="Close"></button></a> */}
                                                            </td>
                                                    
                                                    </tr>
                                                
                                        
                                                ))
                                            }
                            

                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                
                                            </tr>
                                  
                                            
                                    </table>
                            
                                            <Link to={"/dashboard"}><button type="button" class="btn btn-success">Continue Shopping</button></Link>
                                    <br/><br/>
                                    


        {/* 
                                    @if(session('validCoupon'))
                                        <div class="alert alert-success" role="alert">
                                            <b>{{session('validCoupon')}}</b>
                                            
                                        </div>
                                    @endif

                                    @if(session('invalidCoupon'))
                                        <div class="alert alert-danger" role="alert">
                                            <b>{{session('invalidCoupon')}}</b>
                                            
                                        </div>
                                    @endif


                                    @if(session('destroyCoupon'))
                                        <div class="alert alert-danger" role="alert">
                                            <b>{{session('destroyCoupon')}}</b>
                                            
                                        </div>
                                    @endif */}





                                    {/* <div class="coupon" >
                                        <form action="{{url('coupon/apply')}}" method="post">
                                            @csrf
                                            <input type="text" name="coupon" placeholder="Enter you coupon code">
                                            <button type="Submit" class="btn btn-warning">Apply Coupon</button>
                                        </form>
                                    </div> */}


                                    <div className="cart_total" style={{float:"right"}}>

                                                <table class="table  table-striped bg-dark text-white" style={{width:"300px"}}>
                                                    <tr>
                                                        <td>Cart Total</td>
                                                        <td></td>
                                                        <td>
                                                        {/* @if(Session::has('coupon')) */}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sub Total</td>
                                                        <td>:</td>
                                                        <td>
                                                                {/* {{$sub_total}} */}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                
                                                        <td> Coupon</td>
                                                        <td>:</td>
                                                        <td>
        {/*                                                         
                                                                {{session()->get('coupon')['cpn_name']}}
                                                                <a href="{{url('coupon/destroy')}}"><button type="button" style="float:right" class="btn-close btn-close-white" aria-label="Close"></button></a> */}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discount</td>
                                                        <td>:</td>
                                                        <td>
        {/*                                                             
                                                                                {{session()->get('coupon')['discount']}}%
                                                        
                                                                    ({{$discount=$sub_total * session()->get('coupon')['discount'] /100}}) */}
                                                                    
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Total</td>
                                                        <td>:</td>
                                                        <td>
                                                                    {/* {{$sub_total-$discount}}
                                                                    @else
                                                                                {{$sub_total}}
                                                                    @endif */}
                                                        </td>
                                                    </tr>
                                                </table>
                                        
                                        
                                        
                                    </div>
                                

                            </div>
                            <Link to={"/productDetails/cart/checkout/orderDetails"}><button type="button"  style={{width:"100%"}} class="btn btn-success">PROCEED TO CHECKOUT</button></Link>
                            <hr/>
                            <div class="col-sm-1">
                            
                            


                            </div>
                    </div>
                </div>

        </div>
    )
}
export default Cart;