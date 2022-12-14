import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

const NavBar=()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <MenuItems url="/EmployeeProfile" title="Employee Profile"/>
                    <MenuItems url="/Buyerlist" title="Buyer List"/>
                    <MenuItems url="/Sellerlist" title="Seller List"/>
                    <MenuItems url="/addemployee" title="Add Employee"/>

                </div>
                <Link to="/signout" style={{marginLeft:"600px"}}><button type="button" className="btn btn-outline-primary">Sign Out</button></Link>
                
            </div>
        </nav>
    )
}
export default NavBar;