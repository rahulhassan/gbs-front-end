import TopMenu from '../Main/TopMenu';
import axiosConfig from '../../axiosConfig';
import {Link, useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import swal from 'sweetalert';
import axios from 'axios';

const Wishlist=()=>{

  

        const {id} = useParams();
        const [wishlist,setWishList] = useState([]);
        //const [product,setProduct] = useState({});
    
        useEffect(()=>{
            axiosConfig.get(`/wishlist/${localStorage.getItem("user_id")}`)
            .then((rsp)=>{
                setWishList(rsp.data);
                console.log(rsp.data);
            },(err)=>{
    
            }) 
        },[]);

//____________________________________________________________________________


const DeleteProductFromWishList = (e, id)=>{
    e.preventDefault();
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";
    swal({
            title: "Are you sure?",
            text: "You want to delete this product from your wishlist !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
            if (willDelete) {
                axiosConfig.delete(`/deleteProductFromWishList/delete/${localStorage.getItem("user_id")}/${id}`)
                .then((rsp)=>{
                    if(rsp.data.status === 200){
                        swal("Success", rsp.data.message, "success");
                        thisClicked.closest("table").remove();
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

    //____________________________________________________________________________________________



    return(
        <div>
             <TopMenu/>
             <hr/>
            <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>My WishList</h4>
            <hr/> 

            <div class="alert alert-success" role="alert">
                    {/* <b>{orderDeleted}</b> */}
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-sm-2">
                
                    

                    </div>
                    <div class="col-sm-8">
                   
                    
                            {
                               
                               wishlist.map((wishlist)=>(
                                <table className="table table-striped bg-dark text-light" style={{width:"500px"}}>
                                            <tr key={wishlist.p_title}>
                                                <td rowSpan={3}>
                                                    <img src={`http://localhost:8000/images/${wishlist.product.image_path}`} height="200px" width="200px"></img>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Title: {wishlist.product.p_title}</td> 
                                            </tr>
                                            <tr>
                                                <td>Price: {wishlist.product.p_price}</td>   
                                              
                                            </tr>    
                                             <tr>
                                                <td>
                                                     <button type="button" onClick={(e)=>DeleteProductFromWishList(e,wishlist.w_id)} class="btn btn-danger">Delete From WishList</button>
                    
                                                    <Link to={`/orderDetails/${wishlist.product.p_title}`}><button type="button" class="btn btn-success" style={{marginRight:"20px",float:"left"}}>Buy Now</button></Link>
                                                </td>
                                             </tr>
                                          
                                    </table>  

                                    
                                            // {orderDeleted}
                                       
                                ))
                            }
                             
                       
                             

                    </div>
                    <div class="col-sm-2">
                    
                    


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Wishlist;