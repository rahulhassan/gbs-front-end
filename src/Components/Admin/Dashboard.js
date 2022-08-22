import "./CSS/adminDashboard.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import LeftBar from "./Bar/LeftBar";
import TopBar from "./Bar/TopBar";
import { CSVLink } from "react-csv";

const Dashboard=()=>{

    const [order,setOrder] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [buyer,setBuyer] = useState([]);
    const [seller,setSeller] = useState([]);
    const [coupon,setCoupon] = useState([]);
    let x=0;
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/admin/adminDashboard")
        .then((rsp)=>{
            setOrder(rsp.data[0]);
            setEmployee(rsp.data[1]);
            setBuyer(rsp.data[2]);
            setSeller(rsp.data[3]);
            setCoupon(rsp.data[4]);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);


    order.forEach(element => {
        x += parseInt(element.total);        
    });
    

    return (
        <div>
            <LeftBar />
            <TopBar />
            <div class="ad-container">
            <div class="ad-content">
                <div class="ad-cards">
                    <div class="ad-card">
                        <div class="ad-box">
                            <h1>{employee.length}</h1>
                            <h3>EMPLOYEE</h3>
                        </div>
                    </div>
                    <div class="ad-card">
                        <div class="ad-box">
                            <h1>{buyer.length}</h1>
                            <h3>BUYER</h3>
                        </div>
                    </div>
                    <div class="ad-card">
                        <div class="ad-box">
                            <h1>{seller.length}</h1>
                            <h3>SELLER</h3>
                        </div>
                    </div>
                    <div class="ad-card">
                        <div class="ad-box">
                            <h1>{order.length}</h1>
                            <h3>ORDER</h3>
                        </div>
                    </div>
                    <div class="ad-card">
                        <div class="ad-box">
                            <h1>{coupon.length}</h1>
                            <h3>RUNNING OFFERS</h3>
                        </div>
                    </div>
                    <div class="ad-card">
                        <div class="ad-box">
                            <h1>{x}</h1>
                            <h3>TOTAL EARN</h3>
                        </div>
                    </div>
                </div>
                <div class="ad-content-2">
                    <div class="ad-recent-payments">
                        <div class="ad-title">
                            <h2>Payment History</h2>
                            <div class="ad-btn3"><CSVLink data={order} filename="PAYMENT HISTORY">EXPORT PAYMENT HISTORY</CSVLink></div>

                        </div>
                                                
                            <table>
                            <tr>
                                <th>PAYMENT ID</th>
                                <th>BUYER ID</th>
                                <th>PAYMENT TYPE</th>
                                <th>SUB TOTAL</th>
                                <th>DISCOUNT</th>
                                <th>TOTAL</th>
                            </tr>
                            {
                                order.map((orderall)=>(
                                    <tr>
                                        <td>{orderall.id}</td>
                                        <td>{orderall.buyer_id}</td>
                                        <td>{orderall.payment_type}</td>
                                        <td>{orderall.sub_total}</td>
                                        <td>{orderall.discount}</td>
                                        <td>{orderall.total}</td>
                                    </tr>
                                ))
                            }
                            
                        </table>
                    </div>
                    <div class="new-students">
                        <div class="ad-title">
                            <h2>Employees</h2>
                            <div class="ad-btn2"><a href="/Admin/Employee">VIEW ALL</a></div>
                        </div>
                        <table>
                            <tr>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                            </tr>
                            
                            
                            {
                                employee.map((empl)=>(
                                    <tr>
                                        <td>{empl.e_id}</td>
                                        <td>{empl.e_name}</td>
                                    </tr>
                                ))
                            }

                        </table>
                    </div>
                </div>
            </div>
            </div>
            
        </div>

    )
}
export default Dashboard;