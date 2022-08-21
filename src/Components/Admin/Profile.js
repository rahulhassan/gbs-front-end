import "./CSS/adminDashboard.css";
import EditAdmin from "./EditAdmin";
import EditPic from "./EditPic";

const Profile=()=>{


    // const[mfile,setFile] = useState(null);
    const [admin,setAdmin] = useState({});
    const navigate = useNavigate();
    const[imageses,setInputImage] = useState({});


    useEffect(()=>{
        axios.get("http://localhost:8000/api/admin/files/profile")
        .then((rsp)=>{
            setAdmin(rsp.data);
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
            <div class="ad-btn2"><a href="/Admin/Dashboard">GO BACK!</a></div>                             
            <EditPic />
            <EditAdmin />
        </div>
    )
}
export default Profile;