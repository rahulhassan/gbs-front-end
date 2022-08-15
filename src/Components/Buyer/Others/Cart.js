import TopMenu from '../Main/TopMenu';
import axiosConfig from '../../axiosConfig';
import {Link, useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import swal from 'sweetalert';
import axios from 'axios';

const Cart=()=>{

    const {id} = useParams();
    const [products,setProducts] = useState([]);
    const [p_quantity,setQuantity] = useState(0);
    const [sub_total,setSubTotal] = useState("");

    useEffect(()=>{
        axiosConfig.get("/cart")
        .then((rsp)=>{
            setProducts(rsp.data.cart);
            setSubTotal(rsp.data.sub_total);
            setQuantity(rsp.data.p_quantity);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);

    //____________________________________________________________________


    const DeleteOrder = (e, c_id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";
        swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this product!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                if (willDelete) {
                    axiosConfig.delete(`/cart/destroy/${c_id}`)
                    .then((rsp)=>{
                        if(rsp.data.status === 200){
                            swal("Success", rsp.data.message, "success");
                            thisClicked.closest("tr").remove();
                        }
                        else if(rsp.data.status === 404){
                            swal("Success", rsp.data.message, "success")
                            thisClicked.innerText = "Delete";
                        }
                    },(err)=>{
                        debugger;
                    });
                    // thisClicked.closest("div").remove();
                } else {
                    swal("Canceled!");
                    thisClicked.innerText = "Delete";
                }
            });

        }

    //_______________________________________________________________________

        const [cpn_name,setCoupon] = useState("");
        const [discount,setDiscount] = useState("");
        const[msg,setMsg]=useState("");
        const[err,setErr] = useState("");
        var cpn="";
        var dis="";

        
        const couponApply=(event)=>{
            event.preventDefault();
            var data={cpn_name:cpn_name}
            axiosConfig.post("/coupon/apply",data)
            .then((rsp)=>{

                if(rsp.data.cpn_name && rsp.data.discount )
                {
                    localStorage.setItem('cpn',rsp.data.cpn_name);
                    localStorage.setItem('dis',rsp.data.discount);
                }
                else
                {
                    
                    localStorage.setItem('cpn',"none");
                    localStorage.setItem('dis',0);
                }
               

                if(localStorage.getItem('cpn') && localStorage.getItem('dis') )
                {
                    cpn=localStorage.getItem('cpn');
                    dis=localStorage.getItem('dis');
                }
                else
                {
                    cpn="no coupon";
                    dis="no discount";
                }
                
                setCoupon(cpn);
                setDiscount(dis);
                setMsg(rsp.data.msg);
                // setCoupon(rsp.data.cpn_name);
                // setDiscount(rsp.data.discount);
                console.log(rsp);
                console.log(cpn);
                console.log(dis);
            },(err)=>{
                //setErr(rsp.data.err);
            })
        }
        



    //________________________________________________________________________



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


    //________________________________________________________________________________

    const handleDereament=(cart_id)=>{

        setProducts(cart=>
            cart.map((item)=>
            cart_id === item.c_id? {...item,p_quantity:item.p_quantity - 1}: item
                )
            );
            updateCartQuantity(cart_id,"dec");
    }
    
    //_________________________________________________________________________________

    const handleIncreament=(cart_id)=>{

        setProducts(cart=>
            cart.map((item)=>
            cart_id === item.c_id? {...item,p_quantity:item.p_quantity + 1 }: item
                )
            );
            updateCartQuantity(cart_id,"inc");

    }

    //_____________________________________________________________________________________________

    function updateCartQuantity(cart_id,scope)
    {
        axiosConfig.put(`/updateCartQuantity/${cart_id}/${scope}`).then(rsp=>{
            if(rsp.data.status===200)
            {
                // swal("Success",rsp.data.message,"success");
            }
        });
    }

    //____________________________________________________________________________________

    return(
        <div>
            <TopMenu/>

                <hr/>
                <h3 style={{textAlign:"center",fontFamily: "myFirstFont"}}>Shopping Cart </h3>
                <hr/> 



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
                                                        <img src={`http://localhost:8000/images/${cart.product.image_path}`}  height="80px" width="80px" alt=""></img>
                                                        {cart.product.p_title}
                                                           
                                                    </td>
                                                    
                                            
                                                    
                                                        <td >
                                                           {cart.p_price}
                                                        </td>
                                                        
                                            
                                                        <td>
                                                        
                                                                                            
                                                                    <div className="input-group">
                                                        
                                                                        
                                                                        <button type='text' onClick={()=> handleDereament(cart.c_id)} className='input-group-text'>-</button>
                                                                        <div className='form-control text-center'>{cart.p_quantity}</div>
                                                                        <button type='text' onClick={()=> handleIncreament(cart.c_id)} className='input-group-text'>+</button> 

                                                                        {/* <input   name="p_quantity" style={{width:"50px"}} value={cart.p_quantity} type="number"
                                                                        onChange={(e)=>{setQuantity(e.target.value)}}  />  */}

                                                                           
                                                                        

                                                                    </div>       
                                                            
                                                        </td>
                                                        <td>
                                                            {/* <button type="Submit" class="btn btn-success">Update</button> */}
                                                            {/* </form> */}
                                                        
                                                        </td>
                                                        <td>
                                                                {cart.p_price * cart.p_quantity}   
                                                        </td>
                                                            <td>
                                                            <button type="button" onClick={(e)=>DeleteOrder(e,cart.c_id)} class="btn btn-danger">Delete</button>
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
                                    




                                <div class="alert alert-success" role="alert">
                                        <b>{msg}</b>
                                </div>

                                <div class="alert alert-danger" role="alert">
                                        <b>{message}</b>
                                </div>

                                    <div>
                                       
                                            <input type="text" name="cpn_name"  onChange={(e)=>{setCoupon(e.target.value)}} placeholder="Enter your coupon code"></input>
                                            <span>{err.cpn_name? err.cpn_name[0]:''}</span>
                                            <button type="Submit" onClick={couponApply} class="btn btn-warning">Apply Coupon</button>
                                       
                                    </div>


                                    {/* <div className="cart_total bg-dark text-white" style={{float:"right",width:"200px"}}>
                                        <hr></hr>
                                        <h3>Cart Total</h3>
                                        {localStorage.getItem("cpn")==cpn_name? 
                                        <div>
                                                {sub_total}<br></br>
                                                {cpn_name}<br></br>
                                                {discount}<br></br>
                                                {sub_total-(sub_total*discount)/100}
                                        </div>: 
                                        <div>
                                            Total    :{sub_total}
                                        </div>}
                                       
                                                 
                                    </div><br></br> */}


                                        <div className="cart_total" style={{float:"right"}}>
                                            {localStorage.getItem("cpn")?   
                                            <table class="table  table-striped bg-dark text-white" style={{width:"300px"}}>
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
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td> Coupon</td>
                                                    <td>:</td>
                                                    <td>
                                                            
                                                        {cpn_name}
                                                        <button type="button" onClick={deleteCoupon} style={{float:"right"}} class="btn-close btn-close-white" aria-label="Close" ></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Discount</td>
                                                    <td>:</td>
                                                    <td>
                                                        {discount} % ({(sub_total*discount)/100})
                                            {/*                                                             
                                                                            {{session()->get('coupon')['discount']}}%
                                                    
                                                                ({{$discount=$sub_total * session()->get('coupon')['discount'] /100}}) */}
                                                                
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Total</td>
                                                    <td>:</td>
                                                    <td>
                                                        {sub_total-(sub_total*discount)/100}   
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
                                                    </td>
                                                </tr>
                                            </table>  
                                            
                                            }



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