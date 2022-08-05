import {Link, useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axiosConfig from '../../axiosConfig';

const ProductDetails=()=>{
    const {title} = useParams();
    const [product,setProduct] = useState({});

    useEffect(()=>{
        axiosConfig.get(`/productDetails/${title}`)
        .then((rsp)=>{
            setProduct(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    return(
        <div>
                
                    <hr/>
                    <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>{product.p_title} </h4>
                    <hr/>
                

                    <div class="alert alert-dark" role="alert" style={{float:"right",marginRight:"70px"}}>
                    <span><b>Total: </b> </span> 
                    <span style={{marginRight:"10px"}}><b>Quantity: </b> </span> 
                    <span><Link to={"/cart"} style={{textDecoration:"none"}}><b>Cart <i class="fa fa-shopping-cart" style={{fontSize:"48px"}}></i></b></Link></span>
                    </div>
                    <br/><br/><br/>


                    <div class="container" style={{padding: "30px 0"}}>
                            <div class="row">
                        
                                    <div class="col-sm-4 ">
                                    <img src={`http://localhost:8000/images/${product.image_path}`} height="180px" width="200px"></img>
                                    </div>

                                    <div class="col-sm-8">


                                                <table class="table table-striped  table-hover bg-dark text-light" style={{height:"100px"}}>
                                                    
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

                                                {/* <form action="" method="post">
                                                  
                                                    <input type="hidden" name="p_id" value="{{$products->p_id}}">
                                                    <input type="hidden" name="p_price" value="{{$products->p_price}}">
                                                    <input type="hidden" name="s_id" value="{{$products->s_id}}">
                                                    <button type="Submit" id="addToCart" onclick="myFunction()" class="btn btn-warning" style="margin-right:20px; float:left">Add to Cart</button>
                                                </form> */}

                                            

                                                               
                                                <Link to={`/orderDetails/${product.p_title}`}><button type="button" class="btn btn-success" style={{marginRight:"20px",float:"left"}}>Buy Now</button></Link>


                                                <Link to={"/dashboard"}><button type="button" class="btn btn-info">Continue Shopping</button></Link>
                                                

                                </div>
                            </div>
                    </div>


        </div>
    )
}
export default ProductDetails;