import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

const NavBar=()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <MenuItems url="/seller/dashboard" title="Dashboard"/>
                    <MenuItems url="/seller/profile" title="Profile"/>
                    <MenuItems url="/seller/post" title="Post Product"/>
                    <MenuItems url="/seller/orders" title="Orders"/>
                    <MenuItems url="/seller/statement" title="Statement"/>
                </div>
                <Link to="/signout" style={{marginLeft:"600px"}}><button type="button" className="btn btn-outline-primary">Sign Out</button></Link>
                <h5 className="nav-item" style={{marginLeft: "20px"}}>Welcome, {localStorage.getItem("user_name")}</h5>
                <Link to="/seller/profile"><img src= {`http://127.0.0.1:8000/images/seller/${localStorage.getItem("user_img")}`} alt="Avatar" style={{marginLeft:"20px", width:"45px", height:"45px", borderRadius:"50%"}}></img></Link> 
            </div>
        </nav>
    )
}
export default NavBar;