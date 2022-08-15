import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Statement from '../Statement';
import Profile from '../Profile';

import Coupon from '../Coupon';
import CreateCoupon from '../CreateCoupon';

import Buyer from '../Buyer';
import CreateBuyer from '../CreateBuyer';
import EditBuyer from '../EditBuyer';

import Seller from '../Seller';
import CreateSeller from '../CreateSeller';
import EditSeller from '../EditSeller';

import Employee from '../Employee';
import CreateEmployee from '../CreateEmployee';
import EditEmployee from '../EditEmployee';

// import LeftBar from "./LeftBar";
// import TopBar from "./TopBar";

const RouteLink=()=>{
    return (
        <div>
            <BrowserRouter>
                {/* <LeftBar/>
                <TopBar/> */}
                <Routes>
                    <Route path="/" element={<Dashboard/>}></Route>
                    <Route path="/Admin/Dashboard" element={<Dashboard/>}></Route>
                    <Route path="/Admin/Statement" element={<Statement/>}></Route>
                    <Route path="/Admin/Profile" element={<Profile/>}></Route>

                    <Route path="/Admin/Coupon" element={<Coupon/>}></Route>
                    <Route path="/Admin/CreateCoupon" element={<CreateCoupon/>}></Route>

                    <Route path="/Admin/Buyer" element={<Buyer/>}></Route>
                    <Route path="/Admin/CreateBuyer" element={<CreateBuyer/>}></Route>
                    <Route path="/Admin/EditBuyer/:id" element={<EditBuyer/>}></Route>

                    <Route path="/Admin/Seller" element={<Seller/>}></Route>
                    <Route path="/Admin/CreateSeller" element={<CreateSeller/>}></Route>
                    <Route path="/Admin/EditSeller/:id" element={<EditSeller/>}></Route>

                    <Route path="/Admin/Employee" element={<Employee/>}></Route>
                    <Route path="/Admin/CreateEmployee" element={<CreateEmployee/>}></Route>
                    <Route path="/Admin/EditEmployee/:id" element={<EditEmployee/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RouteLink;