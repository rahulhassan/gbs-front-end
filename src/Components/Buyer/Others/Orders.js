
import axiosConfig from '../../axiosConfig';
import {Link, useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';

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
    


    // const deleteOrder=()=>{
    //     axiosConfig.post(`/my_orders/delete/${id}`)
    //     .then((rsp)=>{
            
    //     },(err)=>{

    //     })
    // }

    function deleteOrder(id)
    {
        // fetch(`/my_orders/delete/${id}`,{
        //     method: 'DELETE'
        // }).then((result)=>{
          
        //         console.log(result);
  
        // })
        alert(id)
    }
    return(
        <div>


            <hr/>
            <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>My Order List</h4>
            <hr/> 

            <div class="alert alert-warning" role="alert">
                    {/* <b>{orderDeleted}</b> */}
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-sm-3 ">
                
                    

                    </div>
                    <div class="col-sm-6">
                    <table className="table table-striped bg-dark text-light">
                                <th></th>
                        <th>Product Name</th>
                        <th>Product Quantity</th>
                        <th>Price</th>
                        <th>Status</th>
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
                                                 {/* <form onSubmit={deleteOrder}> */}
                                                 <td><button type="button" onClick={()=>{deleteOrder(order.id)}} class="btn btn-danger">Delete</button></td>
                                                 {/* </form> */}
                                            </tr>
                                            // {orderDeleted}
                                       
                                ))
                            }
                       
                       </table>

                    </div>
                    <div class="col-sm-3">
                    
                    


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Orders;