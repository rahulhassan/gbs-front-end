import "./CSS/adminDashboard.css";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import LeftBar from "./Bar/LeftBar";

const Profile=()=>{

    // const[mfile,setFile] = useState(null);
    const [admin,setAdmin] = useState({});
    const navigate = useNavigate();
    const[a_image,setImage] = useState("");
    const[imageses,setInputImage] = useState({});


    useEffect(()=>{
        axios.get("http://localhost:8000/api/admin/files/profile")
        .then((rsp)=>{
            setAdmin(rsp.data);
            setImage(rsp.data.a_image);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);

    const handleForm = (e) =>{
        e.preventDefault();
        var fData = new FormData();
        fData.append("file", imageses);

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Updating";

        axios.post("http://localhost:8000/api/admin/files/upload", fData)
        .then((rsp)=>{
            navigate('/Admin/Profile');
            thisClicked.innerText = "Update";
            
        })
                
    }

    return(
        <div>
            {<img src={`http://localhost:8000/images/${admin.a_image}`} width="300px" height="300px" alt=""></img> }

            <form>
                <input type="file" name="image" onChange = {(e)=>{setInputImage(e.target.files[0])}}/> <br></br>
                <button type="Submit" onClick={handleForm}>Upload</button>
            </form>


        </div>
    )
}
export default Profile;