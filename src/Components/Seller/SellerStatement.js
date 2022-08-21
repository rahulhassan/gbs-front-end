import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import NavBar from "./NavBar/NavBar";
import {useState,useEffect} from 'react';
import axiosConfig from '../axiosConfig';

const SellerStatement=()=>{
    const [statement, setStatement] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axiosConfig.get(`/seller/statement`).then((res)=>{
            setStatement(res.data);
            console.log(res.data);
            setLoading(false);
        });
    },[]);
    const data = [
        {
            "name": "January",
            "Sales": statement[0],
            
        },
        {
            "name": "February",
            "Sales": statement[1],
            
        },
        {
            "name": "March",
            "Sales": statement[2],
           
        },
        {
            "name": "April",
            "Sales": statement[3],
            
        },
        {
            "name": "May",
            "Sales": statement[4],
            
        },
        {
            "name": "Jun",
            "Sales": statement[5],
            
        },
        {
            "name": "July",
            "Sales": statement[6],
            
        },
        {
            "name": "August",
            "Sales": statement[7],
            
        }
        ]

        if(loading){
            return (
                <div>
                    <NavBar/>
                    <h4>Loading...</h4>
                </div>
            )
        }



    return(
        <div>
        <NavBar/>
        <hr/>
        <h4 style={{textAlign:"center", fontFamily: "myFirstFont"}}>Seller Statement</h4>
        <hr/>
                
                                    
        <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sales" fill="#8884d8" />
        </BarChart>

        <div className="w-75 p-3 justify-content-center">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Total Selling Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>BDT {statement[8]}</b></td>
                    </tr>   
                
                </tbody>
            </table>
            <br/><br/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Selled Products</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Date & Time</th>
                    </tr>
                </thead>
                <tbody>
                {
                    statement[9].map((or)=>(
                        
                    <tr key={or.id}>
    
                        <td>{or.product.p_title}</td>
                        <td>{or.buyer.b_name}</td>
                        <td>{or.p_quantity}</td>
                        <td>{or.updated_at}</td>
                    </tr> 
                    ))

                }   
                      
                </tbody>
            </table>
        
        </div>
        </div>
    )
}
export default SellerStatement;