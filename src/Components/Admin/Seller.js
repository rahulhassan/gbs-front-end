import "./CSS/adminDashboard.css";
import {useState,useEffect} from 'react';
import axiosConfig from '../axiosConfig';
import LeftBar from "./Bar/LeftBar";
// import { Link } from "react-router-dom";

const Seller =()=>{
    const [seller,setSeller] = useState([]);
    useEffect(()=>{
        axiosConfig.get("/admin/files/seller")
        .then((rsp)=>{
            setSeller(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);

    const DeleteSeller = (e, id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axiosConfig.get(`/admin/files/deleteSeller/${id}`)
        .then((rsp)=>{
            thisClicked.closest("tr").remove();
            
        },(err)=>{
            debugger;
        });
            
        
    }

    return (
        <div>
            <LeftBar />
            <div class="ad-container">
                <div class="ad-content">
                    <div class="ad-cards">
                        <div class="ad-card">
                            <div class="ad-box">
                                <h3>Total Seller</h3>
                            </div>
                        </div>
                    </div>
                    <div class="ad-content-2">
                        <div class="ad-recent-payments">
                            <div class="ad-title">
                                <h2>SELLER DETAILS</h2>


                                <div class="ad-btn"><a href={"/Admin/CreateSeller"} class="btn">Add A SELLER</a></div>
                            </div>
                            <table>
                                <tr>
                                    <th>SELLER Id</th>
                                    <th>SELLER Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Options</th>
                                </tr>
                                {
                                    seller.map((sellall)=>(
                                        <tr>
                                            <td>{sellall.s_id}</td>
                                            <td>{sellall.s_name}</td>
                                            <td>{sellall.s_phn}</td>
                                            <td>{sellall.s_mail}</td>
                                            <td>{sellall.s_add}</td>
                                            <td><div class="ad-btn"><a href={`/Admin/EditSeller/${sellall.s_id}`}>Edit</a></div></td>
                                            <td><button onClick={ (e) => DeleteSeller(e, sellall.s_id) }>Delete</button></td>
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
export default Seller;