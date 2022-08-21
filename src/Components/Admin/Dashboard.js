import "./CSS/adminDashboard.css";
import {useState, useEffect} from 'react';
import axiosConfig from '../axiosConfig';
import LeftBar from "./Bar/LeftBar";
import TopBar from "./Bar/TopBar";

const Dashboard=()=>{

    const [order,setOrder] = useState([]);
    // const [employee,setEmployee] = useState([]);
    
    useEffect(()=>{
        axiosConfig.get("/admin/adminDashboard")
        .then((rsp)=>{
            setOrder(rsp.data);
            // setEmployee(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);

    return (
        <div>
            <LeftBar />
            <TopBar />
            <div class="ad-container">
            <div class="ad-content">
                <div class="ad-cards">
                    <div class="ad-card">
                        <div class="ad-box">
                            <h1>5</h1>
                            <h3>EMPLOYEE</h3>
                        </div>
                    </div>
                    <div class="ad-card">
                        <div class="ad-box">
                            <h1>30</h1>
                            <h3>BUYER</h3>
                        </div>
                    </div>
                    <div class="ad-card">
                        <div class="ad-box">
                            <h1>5</h1>
                            <h3>SELLER</h3>
                        </div>
                    </div>
                    <div class="ad-card">
                        <div class="ad-box">
                            <h1>20</h1>
                            <h3>ORDER</h3>
                        </div>
                    </div>
                    <div class="ad-card">
                        <div class="ad-box">
                            <h1>2</h1>
                            <h3>RUNNING OFFERS</h3>
                        </div>
                    </div>
                    <div class="ad-card">
                        <div class="ad-box">
                            <h1>50000</h1>
                            <h3>TOTAL EARN</h3>
                        </div>
                    </div>
                </div>
                <div class="ad-content-2">
                    <div class="ad-recent-payments">
                        <div class="ad-title">
                            <h2>Payment History</h2>
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
                            
                            
                            {/* {
                                employee.map((empl)=>(
                                    <tr>
                                        <td>{empl.e_id}</td>
                                        <td>{empl.e_name}</td>
                                    </tr>
                                ))
                            } */}

                        </table>
                    </div>
                </div>
            </div>
            </div>
            
        </div>

    )
}
export default Dashboard;