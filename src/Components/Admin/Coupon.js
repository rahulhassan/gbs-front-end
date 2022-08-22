import "./CSS/adminDashboard.css";
import {useState,useEffect} from 'react';
import axiosConfig from '../axiosConfig';
import LeftBar from "./Bar/LeftBar";
import TopBar from "./Bar/TopBar";
// import { Link } from "react-router-dom";

const Coupon =()=>{
    const [coupon,setCoupon] = useState([]);
    useEffect(()=>{
        axiosConfig.get("/admin/files/coupon")
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

        axiosConfig.get(`/admin/files/deleteCoupon/${id}`)
        .then((rsp)=>{
            thisClicked.closest("tr").remove();
            
        },(err)=>{
            debugger;
        });
            
        
    }

    return (
        <div>
            <LeftBar />
            <TopBar />
            <div class="ad-container">
                <div class="ad-content">
                    <div class="ad-cards">
                        <div class="ad-card">
                            <div class="ad-box">
                                <h1>{coupon.length}</h1>
                                <h3>Running Coupon</h3>
                            </div>
                        </div>
                    </div>
                    <div class="ad-content-2">
                        <div class="ad-recent-payments">
                            <div class="ad-title">
                                <h2>COUPON DETAILS</h2>

                                {/* <Link to={"/Admin/CreateBuyer"}>ADD A BUYER</Link> */}

                                <div class="ad-btn"><a href={"/Admin/CreateCoupon"} class="btn">Add A COUPON</a></div>
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