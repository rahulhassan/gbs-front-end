import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosConfig from '../axiosConfig';
import NavBar from './NavBar/NavBar';
const Buyerlist = () => {
    
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        axiosConfig.get('/employee/sellerlist').then((res) => {
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
                            <td >Seller Name</td>
                            <td >Seller Phone</td>
                            <td >Seller Email</td>
                            <td >Seller Address</td>
                        </tr>
                    </thead>
                     <tbody>   
                        { 
                            profile.map((emp)=> (
                        <tr key={emp.s_id}>
                            <td>{emp.s_name}</td>
                            <td>{emp.s_phn}</td>
                            <td>{emp.s_mail}</td>
                            <td>{emp.s_add}</td>
                            <td>

                            <Link to={`/EditSellerList/${emp.s_id}`} className = "btn btn-warning">Edit</Link>


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