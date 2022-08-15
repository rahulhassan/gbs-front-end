import TopMenu from '../Main/TopMenu';
import axiosConfig from '../../axiosConfig';
import {Link, useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import swal from 'sweetalert';
import axios from 'axios';

const Orders=()=>{

    const {id} = useParams();
    const [orders,setOrders] = useState([]);
    //const [product,setProduct] = useState({});

    useEffect(()=>{
        axiosConfig.get("/my_orders")
        .then((rsp)=>{
            setOrders(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    
//__________________________________________________________________________________________

    // const DeleteOrder=()=>{
    //     axiosConfig.post(`/my_orders/delete/${id}`)
    //     .then((rsp)=>{
            
    //     },(err)=>{

    //     })
    // }

    const DeleteOrder = (e, id)=>{
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
                    axiosConfig.delete(`/my_orders/delete/${id}`)
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

        //___________________________________________________________

    function deleteOrder(id)
    {
        fetch(`/my_orders/delete/${id}`,{
            method: 'DELETE'
        }).then((result)=>{
          result.json().then((rsp)=>{
            console.warn(rsp);
          })
                
  
        })
        alert(id)
    }

//_________________________________________________________________________________________________

    return(
        <div>

        <TopMenu/>

            <hr/>
            <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>My Order List</h4>
            <hr/> 

            <div class="alert alert-success" role="alert">
                    {/* <b>{orderDeleted}</b> */}
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-sm-2">
                
                    

                    </div>
                    <div class="col-sm-8">
                    <table className="table table-striped bg-dark text-light">
                        <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Product Quantity</th>
                        <th>Price</th>
                        <th>Status</th>
                        </tr>
                            {
                               
                                orders.map((order)=>(
                                
                                            <tr key={order.p_title}>
                                                <td >
                                                <img src={`http://localhost:8000/images/${order.product.image_path}`} height="80px" width="80px"></img>
                                                </td>
                                              
                                                <td>{order.product.p_title}</td>   
                                                <td>{order.p_quantity}</td>                   
                                                 <td>{order.product.p_price*order.p_quantity}</td>
                                                 <td>{order.payment_status}</td>

                                                 <td><button type="button" onClick={(e)=>DeleteOrder(e,order.order_id)} class="btn btn-danger">Delete</button></td>
                                                 {/* <td><button type="button" onClick={()=>{ deleteOrder(order.order_id)}} class="btn btn-danger">Delete</button></td> */}
                                             
                                            </tr>
                                           
                                            // {orderDeleted}
                                       
                                ))
                            }
                             
                       
                       </table>

                    </div>
                    <div class="col-sm-2">
                    
                    


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Orders;