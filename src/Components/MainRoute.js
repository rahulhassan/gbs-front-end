import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Login from './Login';
import Logout from './Logout';
import EditProduct from './Seller/EditProduct';
import EditSellerProfile from './Seller/EditSellerProfile';
import PostProduct from './Seller/PostProduct';
import ProductsList from './Seller/ProductsList';
import SellerOrder from './Seller/SellerOrder';
import SellerProfile from './Seller/SellerProfile';
import SellerStatement from './Seller/SellerStatement';
import SignupUser from './SignupUser';
//____________________________Buyer___________________________________

import Dashboard from './Buyer/Others/Dashboard';
import ProductDetails from './Buyer/Others/ProductDetails';
import OrderDetails from './Buyer/Others/OrderDetails';
import OrderCompleted from './Buyer/Others/OrderCompleted';
import Profile from './Buyer/Others/Profile';
import UpdateProfile from './Buyer/Others/UpdateProfile';
import Cart from './Buyer/Others/Cart';
import Checkout from './Buyer/Others/Checkout';
import Orders from './Buyer/Others/Orders';
import Wishlist from './Buyer/Others/WishList';

//____________________________ADMIN___________________________________

import ADashboard from './Admin/Dashboard';
import Statement from './Admin/Statement';
import AProfile from './Admin/Profile';

import Coupon from './Admin/Coupon';
import CreateCoupon from './Admin/CreateCoupon';

import Buyer from './Admin/Buyer';
import CreateBuyer from './Admin/CreateBuyer';
import EditBuyer from './Admin/EditBuyer';

import Seller from './Admin/Seller';
import CreateSeller from './Admin/CreateSeller';
import EditSeller from './Admin/EditSeller';

import Employee from './Admin/Employee';
import CreateEmployee from './Admin/CreateEmployee';
import EditEmployee from './Admin/EditEmployee';


//____________________________Employee___________________________________
import EmployeeProfile from './Employee/EmployeeProfile';
import EditEmployeeProfile from './Employee/editemployeeprofile';
import Buyerlist from './Employee/BuyerList';
import EditBuyerList from './Employee/editbuyerlist';
import Sellerlist from './Employee/SellerList';
import EditSellerList from './Employee/editsellerlist';
import Category from './Seller/Category';




const MainRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route path="/signup" element={<SignupUser />}></Route>
                    <Route path="/signin" element={<Login />}></Route>
                    <Route path="/signout" element={<Logout />}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/logout" element={<Logout/>}></Route>
                    <Route path="/" element={<Navigate replace to="/logout" />}></Route>

{/* -----------------------------------seller-Route---------------------------------- */}

                    <Route path="/seller/dashboard" element={<ProductsList/>}></Route>

                    <Route path="/seller/post" element={<PostProduct/>}></Route>

                    <Route path="/seller/profile" element={<SellerProfile/>}></Route>

                    <Route path="/seller/orders" element={<SellerOrder/>}></Route>

                    <Route path="/seller/statement" element={<SellerStatement/>}></Route>

                    <Route path="/product/edit/:id" element={<EditProduct/>}> </Route>

                    <Route path="/seller/edit/:id" element={<EditSellerProfile/>}> </Route>

                    <Route path="/category" element={<Category/>}> </Route>



{/* -------------------------------------------------------------------------------------*/}



{/*----------------------------------Buyer-Route---------------------------------------------*/}

                    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/productDetails/:title" element={<ProductDetails></ProductDetails>}> </Route>
                    <Route path="/orderDetails/:title" element={<OrderDetails></OrderDetails>}> </Route>
                    <Route path="/orderCompleted" element={<OrderCompleted></OrderCompleted>}> </Route>
                    <Route path="/profile" element={<Profile></Profile>}> </Route>
                    <Route path="/updateProfile" element={<UpdateProfile></UpdateProfile>}> </Route>
                    <Route path="/cart" element={<Cart></Cart>}> </Route>
                    <Route path="/productDetails/cart/checkout/orderDetails" element={<Checkout></Checkout>}> </Route>
                    <Route path="/orders" element={<Orders></Orders>}> </Route>
                    <Route path="/wishlist" element={<Wishlist></Wishlist>}> </Route>


{/* ---------------------------------Employee-Route-------------------------------------------*/}
                    <Route path="/EmployeeProfile" element={<EmployeeProfile/>}> </Route>
                    <Route path="/EditEmployeeProfile/:id" element={<EditEmployeeProfile/>}> </Route>
                    <Route path="/Buyerlist" element={<Buyerlist />}> </Route>
                    <Route path="/EditBuyerList/:id" element={<EditBuyerList/>}> </Route>
                    <Route path="/Sellerlist" element={<Sellerlist/>}> </Route>
                    <Route path="/EditSellerList/:id" element={<EditSellerList/>}> </Route>





{/* -------------------------------------ADMIN------------------------------------------------*/}

                    <Route path="/Admin/Dashboard" element={<ADashboard/>}></Route>
                    <Route path="/Admin/Statement" element={<Statement/>}></Route>
                    <Route path="/Admin/Profile" element={<AProfile/>}></Route>

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


{/* --------------------------------------------------------------------------------- */}



                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default MainRoute;