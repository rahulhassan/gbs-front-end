import {useState,useEffect} from 'react';
import axiosConfig from '../axiosConfig';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
const ProductsList=()=>{
    document.title = "Dashboard";
    const [loading, setLoading] =useState(true);
    const [products ,setProducts] = useState([]);
    const [search,setSearch] = useState("");
    const[Category,setCategory] = useState("");
    
    const[categoryItem,setCategoryItem] = useState([]);

    useEffect(()=>{
        
        axiosConfig.get(`/seller/products/${localStorage.getItem("user_id")}`)
        .then((rsp)=>{
            setProducts(rsp.data);
        },(err)=>{

        });
        axiosConfig.get("/products/category").then((res)=>{
            setCategoryItem(res.data);
            setLoading(false);
        }); 
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
                axiosConfig.delete(`/seller/delete/${id}`)
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
                
            } else {
                swal("Cancled!");
                thisClicked.innerText = "Delete";
            }
        });
    }
    if(loading){
        return (
            <div>
                <NavBar/>
                <h4 style={{textAlign:"center", marginTop:"150px"}}>Post loading...</h4>
            </div>
        )
    }
   
    return(
        <div>
        <NavBar/><br/>

        <input className="form-control" name="search" style={{width:"630px", height:"40px", borderColor:"green", margin:"auto"}} onChange={(e)=>{setSearch(e.target.value)}}  type="search"  placeholder="Write product title..."></input>
        <br/>
        <center>
            <button type="button" style={{borderRadius: "40px", margin:"5px"}} className="btn btn-outline-secondary" onClick={(e)=>{setCategory("")}}>ALL</button>
            {
                categoryItem.map((ct)=>(
                    <input key={ct.id} type="button" style={{borderRadius: "40px", margin:"5px"}} className="btn btn-outline-secondary" onClick={(e)=>{setCategory(ct.category_name)}} value={ct.category_name}/>
                ))
            }
            {/* <button type="button" style={{borderRadius: "40px", margin:"5px"}} className="btn btn-outline-secondary" onClick={(e)=>{setCategory("")}}>ALL</button>
            <button type="button" style={{borderRadius: "40px", margin:"5px"}} className="btn btn-outline-secondary" onClick={(e)=>{setCategory("TV")}}>TV</button>
            <button type="button" style={{borderRadius: "40px", margin:"5px"}} className="btn btn-outline-secondary" onClick={(e)=>{setCategory("Computer")}}>Computer</button>
            <button type="button" style={{borderRadius: "40px", margin:"5px"}} className="btn btn-outline-secondary" onClick={(e)=>{setCategory("Mobile")}}>Mobile & Tablet</button>
            <button type="button" style={{borderRadius: "40px", margin:"5px"}} className="btn btn-outline-secondary" onClick={(e)=>{setCategory("Camera")}}>Camera</button>
            <button type="button" style={{borderRadius: "40px", margin:"5px"}} className="btn btn-outline-secondary" onClick={(e)=>{setCategory("Fridge")}}>Fridge</button>
            <button type="button" style={{borderRadius: "40px", margin:"5px"}} className="btn btn-outline-secondary" onClick={(e)=>{setCategory("Accessories")}}>Accessories</button>  */}
        
        <div className="container py-5 h-150">
            <div className="w-75 row d-flex justify-content-center align-items-center">
                {
                    products.filter((p)=>{
                                        
                    if(search==="" && Category==="")
                    {
                        return p;

                    }else if(Category=== "" && p.p_title.toLowerCase().includes(search.toLowerCase()))
                    {
                        return p;

                    }else if(search==="" && p.Category.toLowerCase().includes(Category.toLowerCase()))
                    {
                        return p;

                    }else if(p.p_title.toLowerCase().includes(search.toLowerCase()) && p.Category.toLowerCase().includes(Category.toLowerCase()))
                    {
                        return p;
                    }
                    
                    }).map((p)=>(
                        <div key={p.p_id} >
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
                                                <td colSpan={2}><b>Description:</b> {p.p_description}</td>
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
        </center>
        </div>
    )
}
export default ProductsList;