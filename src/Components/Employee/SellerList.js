import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosConfig from '../axiosConfig';
import NavBar from './NavBar/NavBar';
const Sellerlist = () => {
    
    const [seller, setSeller] = useState([]);
    useEffect(() => {
        axiosConfig.get('/employee/sellerlist').then((res) => {
            setSeller(res.data);
            console.log(res.data);
            
        });
    }, []);

    const deleteBuyer = (e, id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axiosConfig.get(`/employee/deleteseller/${id}`)
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
               <h3>Seller Profile</h3>
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
                            seller.map((emp)=> (
                        <tr key={emp.s_id}>
                            <td>{emp.s_name}</td>
                            <td>{emp.s_phn}</td>
                            <td>{emp.s_mail}</td>
                            <td>{emp.s_add}</td>
                            <td>

                            <Link to={`/EditSellerList/${emp.s_id}`} className = "btn btn-warning">Edit</Link>
                            <td><button href='employee/sellerlist' onClick={ (e) => deleteBuyer(e, emp.b_id) }>Delete</button></td>
                            {/* <td> <a className='btn btn-warning' href={`employee/addseller`}>Add A Buyer</a> </td> */}


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
export default Sellerlist;