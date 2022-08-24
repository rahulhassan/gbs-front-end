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

    const deleteBuyer = (e, id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axiosConfig.get(`/employee/deletebuyer/${id}`)
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
               <h3>Buyer's Profile</h3>
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
                            <td><button href='employee/buyerlist' onClick={ (e) => deleteBuyer(e, emp.b_id) }>Delete</button></td>
                            {/* <td> <a className='btn btn-warning' href={`/employee/addebuyer`}>Add A Employee</a> </td> */}


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