import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosConfig from '../axiosConfig';
import NavBar from './NavBar/NavBar';
const EmployeeProfile = () => {
    
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        axiosConfig.get(`/employee/empprofile`).then((res) => {
            setProfile(res.data);
            console.log(res.data);
            
        });
    }, []);




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
export default EmployeeProfile;