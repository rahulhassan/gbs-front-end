import "./CSS/adminDashboard.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import TopBar from "./Bar/TopBar";
import {Pie, PieChart, Cell} from 'recharts';

const Statement=()=>{
    const [employee, setEmployee] = useState([]);
    const [buyer,setBuyer] = useState([]);
    const [seller,setSeller] = useState([]);
 
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/admin/files/statement")
        .then((rsp)=>{
            setEmployee(rsp.data[0]);
            setBuyer(rsp.data[1]);
            setSeller(rsp.data[2]);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);

    const ab = [
        {
            "name":"BUYER",
            value:buyer.length,
        },
        {
            "name":"EMPLOYEE",
            value:employee.length,
        },
        {
            "name":"SELLER",
            value:seller.length,
        }
    ]
    const colors = ['#FF8042', '#00C49F', '#0088FE' ];
    

    return (
        <div>
            <div class="ad-btn2"><a href="/Admin/Dashboard">GO BACK!</a></div>                             
            <TopBar />
            <div className="ad-piechart">
                <h3>USERS</h3>
                <PieChart width={1030} height={350}>
                <Pie data={ab} cx="50%" cy="50%" outerRadius={80} label>
                  {
                    ab.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index]}/>
                    ))
                  }
                </Pie>
                </PieChart>
                <p>BUYER: {buyer.length}  ||| EMPLOYEE: {employee.length} ||| SELLER: {seller.length}</p>
                
            </div>
                
            
        </div>

    )
}
export default Statement;