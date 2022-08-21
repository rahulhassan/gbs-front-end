import "./CSS/adminDashboard.css";
import {useState, useEffect, useRef} from 'react';
import axiosConfig from '../axiosConfig';
import LeftBar from "./Bar/LeftBar";
import TopBar from "./Bar/TopBar";
// import { Link } from "react-router-dom";

const Buyer =()=>{
    const [buyer,setBuyer] = useState([]);
    const count = useRef(0);
    useEffect(()=>{
        axiosConfig.get("/admin/files/buyer")
        .then((rsp)=>{
            setBuyer(rsp.data);
            count.current = count.current + 1;
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);

    const deleteBuyer = (e, id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axiosConfig.get(`/admin/files/deleteBuyer/${id}`)
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
                                <h1>{count.current}</h1>
                                <h3>Total Buyer</h3>
                            </div>
                        </div>
                    </div>
                    <div class="ad-content-2">
                        <div class="ad-recent-payments">
                            <div class="ad-title">
                                <h2>BUYER DETAILS</h2>

                                {/* <Link to={"/Admin/CreateBuyer"}>ADD A BUYER</Link> */}

                                <div class="ad-btn"><a href={"/Admin/CreateBuyer"} class="btn">Add A BUYER</a></div>
                            </div>
                            <table>
                                <tr>
                                    <th>BUYER Id</th>
                                    <th>BUYER Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Options</th>
                                </tr>
                                {
                                    buyer.map((buyall)=>(
                                        <tr>
                                            <td>{buyall.b_id}</td>
                                            <td>{buyall.b_name}</td>
                                            <td>{buyall.b_phn}</td>
                                            <td>{buyall.b_mail}</td>
                                            <td>{buyall.b_add}</td>
                                            <td><div class="ad-btn"><a href={`/Admin/EditBuyer/${buyall.b_id}`}>Edit</a></div></td>
                                            <td><button onClick={ (e) => deleteBuyer(e, buyall.b_id) }>Delete</button></td>
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
export default Buyer;