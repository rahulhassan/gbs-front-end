import TopMenu from '../Main/TopMenu';
import axiosConfig from '../../axiosConfig';
import {Link, useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import swal from 'sweetalert';
import axios from 'axios';

const Checkout=()=>{
    const {id} = useParams();
    const [products,setProducts] = useState([]);
    const [sub_total,setSubTotal] = useState("");
    const [cpn_name,setCoupon] = useState("");
    const [discount,setDiscount] = useState("");
    const [total,setTotal] = useState("");

    var dis="";
    var tot="";
    var tot_amount="";

   
 
    useEffect(()=>{
        axiosConfig.get("/productDetails/cart/checkout/orderDetails")
        .then((rsp)=>{
            setProducts(rsp.data.cart);
            setSubTotal(rsp.data.sub_total);
            setCoupon(localStorage.getItem('cpn'));
            setDiscount(localStorage.getItem('dis'));


            if(localStorage.getItem("dis"))
            {
                 dis=localStorage.getItem("dis");
                 tot=rsp.data.sub_total*dis/100;
                 tot_amount=rsp.data.sub_total-tot;
            }
            else
            {
                tot_amount=rsp.data.sub_total;
            }


            setTotal(tot_amount);
            console.log(rsp.data.total);
        },(err)=>{

        }) 
    },[]);


//______________________________________________________________________________

    const[b_name,setName]=useState("");
    const[b_phn,setPhone]=useState("");
    const[b_add,setAddress]=useState("");
    const[payment_type,setPayment]=useState("");
    const[msg,setMsg]=useState("");
    const[err,setErr]=useState("");

    const handleForm=(event)=>
    {
        event.preventDefault();
        var data={b_name:b_name,b_phn:b_phn,b_add:b_add,payment_type:payment_type,sub_total:sub_total,discount:discount,total:total}
        axiosConfig.post("/placeOrder",data)
        .then((rsp)=>{
            setMsg(rsp.data.msg);
            setErr(rsp.data);
            setCoupon(localStorage.removeItem('cpn'));
            setDiscount(localStorage.removeItem('dis'));
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

//______________________________________________________________________________________________


    const[message,setMessage]=useState("");
    const deleteCoupon=(event)=>{
        event.preventDefault();
        axiosConfig.post("/coupon/destroy")
        .then((rsp)=>{
            localStorage.removeItem('cpn');
            localStorage.removeItem('dis');
            setMessage("Coupon has been removed");
            //setMsg(rsp.data.msg);
        
            
        },(err)=>{
            //setErr(rsp.data.err);
        })
    }


//_________________________________________________________________________


    return(
        <div>
            
            <TopMenu/>

                    <hr/>
                    <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>Order Overview</h4>
                    <hr/>

                    {/* @if(session('orderPlaced'))
                            <div class="alert alert-warning" role="alert">
                                <b>{{session('orderPlaced')}}</b>
                                
                            </div>
                    @endif



                            @error('total')
                            <div class="alert alert-danger" role="alert">
                                <b>{{$message}}</b>
                            </div>
                            @enderror */}
                        



                        <div class="alert alert-danger" role="alert">
                            <span>{err.total? err.total[0]:''}</span>
                        </div>

                        <div class="alert alert-success" role="alert">
                                <b>{msg}</b>
                        </div>

                        <div class="alert alert-danger" role="alert">
                            <span>{message}</span>
                        </div>




                    <div class="container" style={{padding: "30px 0"}}>
                    <form onSubmit={handleForm}>
                       
                            <div class="row">
                        
                                    <div class="col-sm-5">
                                        <h5>Product Review</h5>



                                            <div class="product"  >

                                                <table class="table  table-striped bg-dark text-white" style={{width:"380px"}}>
                                                    <tr>
                                                        <td></td>
                                                        <td>Your Order</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Products</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    {
                                                          products.map((cart)=>(
                                                    <tr key={cart.product.p_title}>
                                                        <td> 
                                                            {cart.product.p_title}({cart.p_quantity})
                                                        
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            {cart.p_price * cart.p_quantity}
                                                        </td>
                                                    </tr>
                                                          ))
                                                    }
                                                    </table>

                                            </div>






                                        <div className="cart_total">
                                            {localStorage.getItem("cpn")?   
                                            <table class="table  table-striped bg-dark text-white" style={{width:"380px"}}>
                                                <tr>
                                                    <td>Cart Total</td>
                                                    <td></td>
                                                    <td>
                                                    
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Sub Total</td>
                                                    <td>:</td>
                                                    <td>
                                                    {sub_total}
                                                    <input type="hidden" name="sub_total" value={sub_total} onChange={(e)=>{setSubTotal(e.target.value)}}></input>
                                                    </td>
                                                </tr>
                                                {/* <tr>

                                                    <td> Coupon</td>
                                                    <td>:</td>
                                                    <td>
                                                            
                                                        {cpn_name}
                                                          
                                                    </td>
                                                </tr> */}
                                                <tr>
                                                    <td>Discount</td>
                                                    <td>:</td>
                                                    <td>
                                                        {discount}%({(sub_total*discount)/100})
                                                                                                       
                                                        <input type="hidden" name="discount" value={discount} onChange={(e)=>{setDiscount(e.target.value)}}></input>   

                                                         <button type="button" onClick={deleteCoupon} style={{float:"right"}} class="btn-close btn-close-white" aria-label="Close" ></button>        
                                                                
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Total</td>
                                                    <td>:</td>
                                                    <td>
                                                        {sub_total-(sub_total*discount)/100}   
                                                        <input type="hidden" name="total" value={tot_amount}   onChange={(e)=>{setTotal(e.target.value)}} ></input>
                                                        
                                                    </td>
                                                </tr>
                                            </table>

                                            :

                                            <table class="table  table-striped bg-dark text-white" style={{width:"300px"}}>
                                                <tr>
                                                    <td>Cart Total</td>
                                                    <td></td>
                                                    <td>
                                                   
                                                    </td>
                                                </tr>
                                                 <tr>
                                                    <td>Total</td>
                                                    <td>:</td>
                                                    <td>
                                                        {sub_total}  
                                                    <input type="hidden" name="sub_total" value= {sub_total} onChange={(e)=>{setSubTotal(e.target.value)}}></input>
                                                    <input type="hidden" name="total" value={tot_amount} onChange={(e)=>{setTotal(e.target.value)}}></input>
                                                    
                                                    </td>
                                                </tr>
                                            </table>  
                                            
                                            }



{/* <input type="text"></input>
<input type="text" name="sub_total" value= {sub_total} onChange={(e)=>{setSubTotal(e.target.value)}}></input>
<input type="text" name="total" value={sub_total} onChange={(e)=>{setTotal(e.target.value)}}></input> */}




                                        </div>








                                        
                                    </div>
                                
                                            <div class="col-sm-4">
                                            <h5>Shipping Information</h5>
                                            <table  class="table table-striped  table-responsive-sm" style={{width:"300px", height:"320px"}}>
                                            <tr>
                                                <td><b>Name</b></td>
                                                <td><b>:</b></td>
                                                <td>
                                                    <input type="text" name="b_name" value={b_name} onChange={(e)=>{setName(e.target.value)}}></input><br></br>
                                                    <span>{err.b_name? err.b_name[0]:''}</span>
                                                                    
                                                </td>
                                            </tr>



                                            <tr>
                                                <td><b>Phone</b></td>
                                                <td><b>:</b></td>
                                                <td>
                                                    <input type="text" name="b_phn" value={b_phn} onChange={(e)=>{setPhone(e.target.value)}}></input><br></br>
                                                    <span>{err.b_phn? err.b_phn[0]:''}</span>
                                                </td>
                                            </tr>



                                            <tr>
                                                <td><b>Address</b></td>
                                                <td><b>:</b></td>
                                                <td>
                                                    <input type="text" name="b_add" value={b_add} onChange={(e)=>{setAddress(e.target.value)}}></input><br></br>
                                                    <span>{err.b_add? err.b_add[0]:''}</span>
                                                </td>
                                            </tr>



                                        </table>
                                                    
                                            </div>
                                            <div class="col-sm-3">
                                            <h5>Payment Methods</h5>


                                            <div class="payment-method">
                                                    <table  class="table table-striped bg-dark text-white table-responsive-sm" style={{width:"260px", height:"200px"}}>
                                                            <tr>
                                                                    <td>
                                                                            <div class="input-radio">
                                                                                <input type="radio" name="payment_type" value="Cash" onChange={(e)=>{setPayment(e.target.value)}}></input>
                                                                                    
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
                                                                            <input type="radio" name="payment_type"   value="Bkash" onChange={(e)=>{setPayment(e.target.value)}}></input>
                                                                            
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
                                                                            <input type="radio" name="payment_type"   value="Nogod" onChange={(e)=>{setPayment(e.target.value)}}></input>
                                                                                    
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
                                                                            <input type="radio" name="payment_type"   value="Rocket" onChange={(e)=>{setPayment(e.target.value)}}></input>
                                                                            
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
                                
                            <button type="Submit"  class="btn btn-success" style={{width:"100% "}}>PLACE ORDER</button>
                        </form>
                    
            </div>
        </div>
    )
}
export default Checkout;