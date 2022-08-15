import "./CSS/adminDashboard.css";
import {useState,useEffect} from 'react';
import axios from 'axios';
import LeftBar from "./Bar/LeftBar";
// import { Link } from "react-router-dom";

const Employee =()=>{
    const [employee,setEmployee] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/admin/files/employee")
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

        axios.get(`http://localhost:8000/api/admin/files/delete/${id}`)
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
                                <h3>Total Employee</h3>
                            </div>
                        </div>
                    </div>
                    <div class="content-2">
                        <div class="recent-payments">
                            <div class="title">
                                <h2>EMPLOYEE DETAILS</h2>

                                <a href={"/Admin/CreateEmployee"} class="btn">Add A Employee</a>
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
                                            <td><a href={`/Admin/EditEmployee/${empall.e_id}`}>Edit</a></td>
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