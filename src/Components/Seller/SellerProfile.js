import {useState,useEffect} from 'react';
import axios from 'axios';
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
   
    return(
        <div>
            <div className="w-75">
                {
                    products.map((p)=>(
                        <div  key={p.p_id}>
                        <table border={1} className="table table-striped">
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
                                        <button type="button" className="btn btn-warning">Edit</button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ProductsList;