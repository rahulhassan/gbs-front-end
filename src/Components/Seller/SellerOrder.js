import {useState,useEffect} from 'react';
import axiosConfig from '../axiosConfig';
import NavBar from './NavBar/NavBar';
import swal from 'sweetalert';
const SellerOrder=()=>{
    document.title = "Orders";
    const [loading, setLoading] =useState(true);
    const [order, setOrder] = useState([]);

    useEffect(()=>{
        axiosConfig.get(`/seller/orders/${localStorage.getItem("user_id")}`).then((res)=>{
            setOrder(res.data);
            console.log(res.data);
            setLoading(false);
        });
    },[]);

    const ShiftProduct = (e, id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Order Shifting...";
        swal({
            text: "Are you sure want to give product for shipping?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                axiosConfig.get(`/seller/shipping/${id}`)
                .then((rsp)=>{
                    if(rsp.data.status === 200){
                        swal("Success", rsp.data.msg, "success");
                        thisClicked.closest("tr").remove();
                    }
                },(err)=>{
                    debugger;
                });
                
            } else {
                swal("Cancled!");
                thisClicked.innerText = "Order Shift";
            }
        });
    }

    if(loading){
        return (
            <div>
                <NavBar/>
                <h4 style={{textAlign:"center", marginTop:"150px"}}>Please Wait...</h4>
            </div>
        )
    }

    var OrderTable = "";
    if(order.length === 0){
        OrderTable = 
        <h5 style={{textAlign:"center"}}>You have no orders yet!</h5>
        
    }else{
        
        OrderTable =
        <table className="table table-striped">
            <thead>
                <tr className="table-dark">
                <th scope="col">Product Title</th>
                <th scope="col">Quantity</th>
                <th scope="col">Amount</th>
                <th scope="col">Shipping Address</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            {
                order.map((or)=>(
                    
                <tr key={or.id}>
                    
                    <td>{or.product.p_title}</td>
                    <td>{or.p_quantity}</td>
                    <td>{or.product.p_price}</td>
                    <td>{or.buyer.b_add}, {or.buyer.b_phn}</td>
                    <td>
                        <button onClick={ (e) => ShiftProduct(e, or.id) } type="button" className="btn btn-success">Order Shift</button>
                    </td>
                </tr>  
                ))
            } 
            </tbody>
        </table>
    }

   
    return(
        <div>
            <NavBar/>
            <hr/>
            <h4 style={{textAlign:"center", fontFamily: "myFirstFont"}}>Seller Order</h4>
            <hr/>
            <center>
            <div className="w-75 p-3 justify-content-center">
                {OrderTable}
            </div>
            </center>
        
        </div>
    )
}
export default SellerOrder;