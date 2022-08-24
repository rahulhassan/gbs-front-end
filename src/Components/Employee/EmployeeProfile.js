import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosConfig from '../axiosConfig';
import NavBar from './NavBar/NavBar';
const Employee = () => {
    
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        axiosConfig.get('/employee/empprofile').then((res) => {
            setProfile(res.data);
            console.log(res.data);
            
        });
    }, []);

    const deleteEmployee = (e, id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axiosConfig.get(`/employee/delete/${id}`)
        .then((rsp)=>{
            thisClicked.closest("tr").remove();
            
        },(err)=>{
            debugger;
        });
            
        
    }




    return (
        <div>
            <NavBar />
            <div className="container">
               <h3>Employee Profile</h3>
                <table className="table">

                    <thead>
                        <tr>
                            <td >Employee Name</td>
                            <td >Employee Phone</td>
                            <td >Employee Email</td>
                            <td >Employee Address</td>
                        </tr>
                    </thead>
                     <tbody>   
                        { 
                            profile.map((emp)=> (
                        <tr key={emp.e_id}>
                            <td>{emp.e_name}</td>
                            <td>{emp.e_phn}</td>
                            <td>{emp.e_mail}</td>
                            <td>{emp.e_add}</td>
                            <td>

                            <Link to={`/EditEmployeeProfile/${emp.e_id}`} className = "btn btn-warning">Edit</Link>
                            <button onClick={ (e) => deleteEmployee(e, emp.e_id) }>Delete</button>
                            {/* <Link to={`/addemployee/${emp.e_id}`} className = "btn btn-warning">Add Employee</Link> */}
                        

                            </td>
                        </tr>
                        ))
                    }
                    </tbody> 
                    
                </table>
            </div>
        </div>
    )
}
export default Employee;