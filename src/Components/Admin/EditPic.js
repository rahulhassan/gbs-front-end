import "./CSS/adminDashboard.css";
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditPic=()=>{
    const [admin,setAdmin] = useState({});
    const navigate = useNavigate();
    const[imageses,setInputImage] = useState({});


    useEffect(()=>{
        axios.get("http://localhost:8000/api/admin/files/profile")
        .then((rsp)=>{
            setAdmin(rsp.data);
            setInputImage(rsp.data.a_image);
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
            thisClicked.innerText = "Update";
            navigate('/Admin/Profile');
            
        })
                
    }

    return(
        <div>

            <div class="ad-img">
                {<img src={`http://localhost:8000/images/${admin.a_image}`} width="300px" height="300px" alt=""></img> } <br />
            

                <form>
                    <input type="file" name="image" onChange = {(e)=>{setInputImage(e.target.files[0])}} /> <br></br>
                    <button type="Submit" onClick={handleForm}>Upload</button>
                </form>
            </div>


        </div>
    )
}
export default EditPic;