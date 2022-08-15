import "./CSS/adminDashboard.css";
import {useState,useEffect} from 'react';
import axios from 'axios';
import LeftBar from "./Bar/LeftBar";
// import { Link } from "react-router-dom";

const Seller =()=>{
    const [seller,setSeller] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/admin/files/seller")
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

        axios.get(`http://localhost:8000/api/admin/files/deleteSeller/${id}`)
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
                                <h3>Total Seller</h3>
                            </div>
                        </div>
                    </div>
                    <div class="content-2">
                        <div class="recent-payments">
                            <div class="title">
                                <h2>SELLER DETAILS</h2>


                                <a href={"/Admin/CreateSeller"} class="btn">Add A SELLER</a>
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
                                            <td><a href={`/Admin/EditSeller/${sellall.s_id}`}>Edit</a></td>
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