import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';
const ProductsList=()=>{
    const [products ,setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/seller/products")
        .then((rsp)=>{
            setProducts(rsp.data);
            console.log(rsp.data);
        },(err)=>{

        }) 
    },[]);
    const DeleteProduct = (e, id)=>{
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
                    axios.delete(`http://localhost:8000/api/seller/delete/${id}`)
                    .then((rsp)=>{
                        if(rsp.data.status === 200){
                            swal("Success", rsp.data.message, "success");
                            thisClicked.closest("div").remove();
                        }
                        else if(rsp.data.status === 404){
                            swal("Success", rsp.data.message, "success")
                            thisClicked.innerText = "Delete";
                        }
                    },(err)=>{
                        debugger;
                    });
                    thisClicked.closest("div").remove();
                } else {
                    swal("Cancled!");
                    thisClicked.innerText = "Delete";
                }
            });

        // axios.delete(`http://localhost:8000/api/seller/delete/${id}`).then((rsp)=>{
        //     console.log(rsp.data);
        //     if(rsp.data.status === 200){
        //         swal("Success", rsp.data.message, "success");
        //         thisClicked.closest("div").remove();
        //         //console.log(rsp.data);
        //     }
        //     else if(rsp.data.status === 404){
        //         //console.log(rsp.data);
        //         swal("Success", rsp.data.message, "success")
        //         thisClicked.innerText = "Delete";
        //     }
        // },(err)=>{
        //     debugger;
        // });
    }
   
    return(
        <div>
            <div className="w-75">
                {
                    products.map((p)=>(
                        <div key={p.p_id} className="row">
                            <div className="col-sm-10">
                                <div className="card p-4">  
                                    <table className="table table-striped">
                                        <tbody>
                                            <tr>
                                                <td rowSpan ={4}><img src= {`http://127.0.0.1:8000/images/${p.image_path}`} width="300px" alt=''></img></td>
                                            </tr>
                                            <tr>
                                                <td><b>{p.p_title}</b></td>
                                            </tr>
                                            <tr>
                                                <td><b>Brand:</b> {p.p_brand}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Price:</b> {p.p_price}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Description: {p.p_description}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to={`/product/edit/${p.p_id}`} className="btn btn-warning">Edit</Link>
                                                </td>
                                                <td>
                                                    <button onClick={ (e) => DeleteProduct(e, p.p_id) } type="button" className="btn btn-danger">Delete</button> 
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </div> 
                        </div>
                        
                    ))
                }
            </div>
        </div>
    )
}
export default ProductsList;