import TopMenu from '../Main/TopMenu';
import {Link, useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axiosConfig from '../../axiosConfig';

const ProductDetails=()=>{
    const {title} = useParams();
    const [product,setProduct] = useState({});
    const [total,setTotal] = useState("");
    const [quantity,setQuantity] = useState("");

    useEffect(()=>{
        axiosConfig.get(`/productDetails/${title}`)
        .then((rsp)=>{
            setProduct(rsp.data.products);
            setProductId(rsp.data.products.p_id);
            setProductPrice(rsp.data.products.p_price);
            setSellerId(rsp.data.products.s_id);
            setTotal(rsp.data.total);
            setQuantity(rsp.data.quantity);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);

//__________________________________________________________________________________________
    
    const[p_id,setProductId]=useState("");
    const[p_price,setProductPrice]=useState("");
    const[s_id,setSellerId]=useState("");
    const[msg,setMsg]=useState("");
    const[err,setErr]=useState("");


    const handleForm=(event)=>
    {
        event.preventDefault();
        var data={p_id:p_id,p_price:p_price,s_id:s_id}
        axiosConfig.post("/cart",data)
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

//________________________________________________________________________________________________


    return(
        <div>
           
           <TopMenu/>

                    <hr/>
                    <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>{product.p_title} </h4>
                    <hr/>
                
                    <div class="alert alert-success" role="alert">
                    <b>{msg}</b>
                    </div>

                    <div class="alert alert-dark" role="alert" style={{float:"right",marginRight:"120px"}}>
                    <span><b>Total: {total}</b> </span> 
                    <span style={{marginRight:"10px"}}><b>Quantity: {quantity}</b> </span> 
                    <span><Link to={"/cart"} style={{textDecoration:"none"}}><b>Cart <i class="fa fa-shopping-cart" style={{fontSize:"48px"}}></i></b></Link></span>
                    </div>
                    <br/><br/><br/>


                    <div class="container" style={{padding: "30px 0"}}>
                            <div class="row">
                        
                                    <div class="col-sm-4 ">
                                    <img src={`http://localhost:8000/images/${product.image_path}`} height="180px" width="200px"></img>
                                    </div>

                                    <div class="col-sm-8">


                                                <table className="table table-striped  table-hover bg-dark text-light" style={{height:"100px"}}>
                                                    
                                                    <tr>
                                                
                                                        <th>Title</th>
                                                        <th>Brand</th>
                                                        <th>Description</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>



                                                    </tr>
                                                    
                                                    <tr>
                                                
                                                        <td>{product.p_title}</td>
                                                        <td>{product.p_brand}</td>
                                                        <td>{product.p_description}</td>
                                                        <td>{product.p_price}</td>
                                                        <td>{product.p_quantity}</td>
                                                    
                            
                                                    </tr>

                                                </table>

                                               
                                                  
                                                 <input type="hidden" name="p_id"   value={p_id}  onChange={(e)=>{setProductId(e.target.value)}}></input><br></br>
                                                    <span>{err.p_id? err.p_id[0]:''}</span>
                                                    <input type="hidden" name="p_price"  value={p_price}  onChange={(e)=>{setProductPrice(e.target.value)}}></input><br></br>
                                                    <span>{err.p_price? err.p_price[0]:''}</span>
                                                    <input type="hidden" name="s_id"     value={s_id}   onChange={(e)=>{setSellerId(e.target.value)}}></input><br></br>
                                                    <span>{err.s_id? err.s_id[0]:''}</span>
                                                    <button type="Submit" onClick={handleForm} class="btn btn-warning" style={{marginRight: "20px", float:"left"}}>Add to Cart</button> 
                                              
{/* 
                                                    <input type="text" name="p_id"    onChange={(e)=>{setProductId(e.target.value)}}></input><br></br>
                                                    <span>{err.p_id? err.p_id[0]:''}</span>
                                                    <input type="text" name="p_price"    onChange={(e)=>{setProductPrice(e.target.value)}}></input><br></br>
                                                    <span>{err.p_price? err.p_price[0]:''}</span>
                                                    <input type="text" name="s_id"      onChange={(e)=>{setSellerId(e.target.value)}}></input><br></br>
                                                    <span>{err.s_id? err.s_id[0]:''}</span>
                                                    <button type="Submit" onClick={handleForm} class="btn btn-warning" style={{marginRight: "20px", float:"left"}}>Add to Cart</button>
                                               */}

                                                               
                                                <Link to={`/orderDetails/${product.p_title}`}><button type="button" class="btn btn-success" style={{marginRight:"20px",float:"left"}}>Buy Now</button></Link>


                                                <Link to={"/dashboard"}><button type="button" class="btn btn-info">Continue Shopping</button></Link>
                                                

                                </div>
                               
                            </div>
                    </div>


        </div>
    )
}
export default ProductDetails;