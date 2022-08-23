import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosConfig from '../axiosConfig';
import NavBar from './NavBar/NavBar';
const Buyerlist = () => {
    
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        axiosConfig.get('/employee/buyerlist').then((res) => {
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
                            <td >Buyer Name</td>
                            <td >Buyer Phone</td>
                            <td >Buyer Email</td>
                            <td >Buyer Address</td>
                        </tr>
                    </thead>
                     <tbody>   
                        { 
                            profile.map((emp)=> (
                        <tr key={emp.b_id}>
                            <td>{emp.b_name}</td>
                            <td>{emp.b_phn}</td>
                            <td>{emp.b_mail}</td>
                            <td>{emp.b_add}</td>
                            <td>

                            <Link to={`/EditBuyerList/${emp.b_id}`} className = "btn btn-warning">Edit</Link>


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
export default Buyerlist;