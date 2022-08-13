import "../CSS/adminDashboard.css";
import Items from "./Items";

const LeftBar=()=>{
    return (
        <div class="side-menu">
            <div class="brand-name">
                <h1>GBS</h1>
            </div>
            <ul>
                <li><Items url="/Admin/Dashboard" title="Dashboard" /></li>
                <li><Items url="/Admin/Statement" title="Statement" /></li>
                <li><Items url="/Admin/Buyer" title="Buyer" /></li>
                <li><Items url="/Admin/Seller" title="Seller"/></li>
                <li><Items url="/Admin/Employee" title="Employee"/></li>
                <li><Items url="/Admin/Profile" title="Profile"/></li>
                {/* <Items url="/Admin/CreateBuyer" title="CreateBuyer"/> */}
            </ul>
                
        </div>
    )
}
export default LeftBar;