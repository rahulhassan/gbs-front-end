import axios from "axios";
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

const Dashboard=()=>{

    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/dashboard")
        .then((rsp)=>{
            setProducts(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    
    return(
        <div>
            <table>
        
            {
                    products.map((product)=>(
                        <tr>
                            <td><Link to={`/productDetails/${product.p_title}`}>{product.p_title}</Link></td>
                            <td>{product.p_title}</td>
                            <td>{product.p_price}</td>
                        </tr>
                    ))
            }
            </table>
        </div>
    )
}
export default Dashboard;