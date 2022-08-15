import "./CSS/adminDashboard.css";
import {useState,useEffect} from 'react';
import axios from 'axios';
import LeftBar from "./Bar/LeftBar";
// import { Link } from "react-router-dom";

const Coupon =()=>{
    const [coupon,setCoupon] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/admin/files/coupon")
        .then((rsp)=>{
            setCoupon(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);

    const deleteCoupon = (e, id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.get(`http://localhost:8000/api/admin/files/deleteCoupon/${id}`)
        .then((rsp)=>{
            thisClicked.closest("tr").remove();
            
        },(err)=>{
            debugger;
        });
            
        
    }

    return (
        <div>
            <LeftBar />
            <div class="container">
                <div class="content">
                    <div class="cards">
                        <div class="card">
                            <div class="box">
                                <h3>Running Coupon</h3>
                            </div>
                        </div>
                    </div>
                    <div class="content-2">
                        <div class="recent-payments">
                            <div class="title">
                                <h2>COUPON DETAILS</h2>

                                {/* <Link to={"/Admin/CreateBuyer"}>ADD A BUYER</Link> */}

                                <a href={"/Admin/CreateCoupon"} class="btn">Add A COUPON</a>
                            </div>
                            <table>
                                <tr>
                                    <th>COUPON Id</th>
                                    <th>COUPON Name</th>
                                    <th>DISCOUNT</th>
                                    <th>Options</th>
                                </tr>
                                {
                                    coupon.map((cupall)=>(
                                        <tr>
                                            <td>{cupall.cpn_id}</td>
                                            <td>{cupall.cpn_name}</td>
                                            <td>{cupall.discount}</td>
                                            <td><button onClick={ (e) => deleteCoupon(e, cupall.cpn_id) }>Delete</button></td>
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
export default Coupon;