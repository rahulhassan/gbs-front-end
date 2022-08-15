import "../CSS/adminDashboard.css";
// import Items from "./Items";

const LeftBar=()=>{
    return (
        <div class="side-menu">
            <div class="brand-name">
                <h1>GBS</h1>
            </div>
            <ul>
                <li><span><a href={"/Admin/Dashboard"}>DASHBOARD</a></span></li>
                <li><span><a href={"/Admin/Statement"}>STATEMENT</a></span></li>
                <li><span><a href={"/Admin/Coupon"}>COUPON</a></span></li>
                <li><span><a href={"/Admin/Buyer"}>BUYER</a></span></li>
                <li><span><a href={"/Admin/Seller"}>SELLER</a></span></li>
                <li><span><a href={"/Admin/Employee"}>EMPLOYEE</a></span></li>
                <li><span><a href={"/Admin/Profile"}>PROFILE</a></span></li>
                {/* <Items url="/Admin/CreateBuyer" title="CreateBuyer"/> */}
                
            </ul>
        </div>

    )
}
export default LeftBar;