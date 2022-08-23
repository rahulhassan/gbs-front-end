import "./CSS/adminDashboard.css";
import {useState,useEffect} from 'react';
import axiosConfig from '../axiosConfig';
import LeftBar from "./Bar/LeftBar";
import TopBar from "./Bar/TopBar";
import { CSVLink } from "react-csv";
// import { Link } from "react-router-dom";

const Employee =()=>{
    const [employee,setEmployee] = useState([]);
    useEffect(()=>{
        axiosConfig.get("/admin/files/employee")
        .then((rsp)=>{
            setEmployee(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);

    const deleteEmployee = (e, id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axiosConfig.get(`/admin/files/delete/${id}`)
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
                                <h1>{employee.length}</h1>
                                <h3>Total Employee</h3>
                            </div>
                        </div>
                    </div>
                    <div class="ad-content-2">
                        <div class="ad-recent-payments">
                            <div class="ad-title">
                                <h2>EMPLOYEE DETAILS</h2>

                                <div class="ad-btn3"><CSVLink data={employee} filename="EMPLOYEE LIST">EXPORT EMPLOYEE LIST</CSVLink></div>


                                
                                <div class="ad-btn"><a href={"/Admin/CreateEmployee"} class="btn">Add A Employee</a></div>
                            </div>
                            <table>
                                <tr>
                                    <th>Employee Id</th>
                                    <th>Employee Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Options</th>
                                </tr>
                                {
                                    employee.map((empall)=>(
                                        <tr>
                                            <td>{empall.e_id}</td>
                                            <td>{empall.e_name}</td>
                                            <td>{empall.e_phn}</td>
                                            <td>{empall.e_mail}</td>
                                            <td>{empall.e_add}</td>
                                            <td><div class="ad-btn"><a href={`/Admin/EditEmployee/${empall.e_id}`}>Edit</a></div></td>
                                            <td><button onClick={ (e) => deleteEmployee(e, empall.e_id) }>Delete</button></td>
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
export default Employee;