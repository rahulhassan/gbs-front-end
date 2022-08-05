
import axiosConfig from '../../axiosConfig';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

const Dashboard=()=>{

    const [products,setProducts] = useState([]);
    const [product,setProduct] = useState({});

    useEffect(()=>{
        axiosConfig.get("/dashboard")
        .then((rsp)=>{
            setProducts(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    
    return(
        <div>


            <hr/>
            <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>Choose Your Product </h4>
            <hr/> 
            <div class="container">
                <div class="row">
                    <div class="col-sm-3 ">
                
                    

                    </div>
                    <div class="col-sm-6">
                       
                
                            {
                                products.map((product)=>(
                                    <table className="table table-striped bg-dark text-light">
                                            <tr key={product.p_title}>
                                                <td rowSpan={3}>
                                                <Link to={`/productDetails/${product.p_title}`}><img src={`http://localhost:8000/images/${product.image_path}`}></img></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                               
                                                <td>{product.p_title}</td>
                                                
                                            </tr>
                                            <tr>
                                                <td>
                                                    <td>{product.p_price}</td>
                                                </td>
                                            </tr>
                                        </table>
                                ))
                            }
                       


                    </div>
                    <div class="col-sm-3">
                    
                    


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;