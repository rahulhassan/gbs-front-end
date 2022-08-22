import "./CSS/adminDashboard.css";
import EditAdmin from "./EditAdmin";
import EditPic from "./EditPic";

const Profile=()=>{
    return(
        <div>   
            <div class="ad-btn2"><a href="/Admin/Dashboard">GO BACK!</a></div>                             
            <EditPic />
            <EditAdmin />
        </div>
    )
}
export default Profile;