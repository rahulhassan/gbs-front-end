import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axiosConfig from '../axiosConfig';
import NavBar from './NavBar/NavBar';
const SellerProfile=()=>{
    const [loading, setLoading] =useState(true);
    const [profile ,setProfile] = useState({});
    useEffect(()=>{
        axiosConfig.get(`/seller/profile/${localStorage.getItem("user_id")}`).then((res)=>{
            setProfile(res.data);
            setLoading(false);
        });
    },[]);

    if(loading){
        return (
            <div>
                <NavBar/>
                <h4>Loading...</h4>
            </div>
        )
    }

   
    return(
        <div>
        <NavBar/>
        <section className="vh-100" style={{backgroundColor: "#f4f5f7"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-10 mb-4 mb-lg-0">
                    <div className="card mb-3" style={{borderRadius: ".5rem"}}>
                    <div className="row g-0">
                        <div className="col-md-4 text-center text-white" style={{borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem", backgroundColor:"rgba(253, 160, 133, 1)"}}>
                        <img src={`http://127.0.0.1:8000/images/seller/${profile.s_image}`} alt="Avatar" className="img-fluid my-5" style={{width: "200px", borderRadius: "50%"}} />
                        <h5>{profile.s_name}</h5>
                        <p style={{marginBottom:"80px"}}>Best Seller</p>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body p-4">
                            <h6>Profile</h6>
                            <hr className="mt-0 mb-4" />
                            <div className="row pt-1">
                                <div className="col-6 mb-3">
                                    <h6>Phone</h6>
                                    <p className="text-muted">{profile.s_phn}</p>
                                </div>
                                <div className="col-6 mb-3">
                                    <h6>Address</h6>
                                    <p className="text-muted">{profile.s_add}</p>
                                </div>
                            </div>
                            <h6>Email</h6>
                            <p className="text-muted">{profile.s_mail}</p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Link to={`/seller/edit/${profile.s_id}`} className="btn btn-warning">Edit</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </div>
    )
}
export default SellerProfile;