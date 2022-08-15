import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import EditProduct from './Seller/EditProduct';
import EditSellerProfile from './Seller/EditSellerProfile';
import PostProduct from './Seller/PostProduct';
import ProductsList from './Seller/ProductsList';
import SellerProfile from './Seller/SellerProfile';
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

const MainRoute=()=>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<SignupUser/>}></Route>
                    <Route path="/signin" element={<Login/>}></Route>
                    <Route path="/signout" element={<Logout/>}></Route>
                    
{/* -----------------------------------seller-Route---------------------------------- */}

                    <Route path="/seller/dashboard" element={<ProductsList/>}></Route>
                    <Route path="/seller/post" element={<PostProduct/>}></Route>
                    <Route path="/seller/profile" element={<SellerProfile/>}></Route>
                    {/*<Route path="/seller/orders" element={<SellerOrder/>}></Route>
                    <Route path="/seller/statement" element={<SellerStatement/>}></Route> */}
                    <Route path="/product/edit/:id" element={<EditProduct/>}> </Route>
                    <Route path="/seller/edit/:id" element={<EditSellerProfile/>}> </Route>



{/* -------------------------------------Buyer-Route------------------------------------------------*/}

                    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/productDetails/:title" element={<ProductDetails></ProductDetails>}> </Route>
                    <Route path="/orderDetails/:title" element={<OrderDetails></OrderDetails>}> </Route>
                    {/* <Route path="/placeOrder/:title" element={<OrderDetails></OrderDetails>}> </Route> */}
                    <Route path="/orderCompleted" element={<OrderCompleted></OrderCompleted>}> </Route>
                    <Route path="/profile" element={<Profile></Profile>}> </Route>
                    <Route path="/updateProfile" element={<UpdateProfile></UpdateProfile>}> </Route>
                    <Route path="/cart" element={<Cart></Cart>}> </Route>
                    <Route path="/productDetails/cart/checkout/orderDetails" element={<Checkout></Checkout>}> </Route>
                    <Route path="/orders" element={<Orders></Orders>}> </Route>

{/* ----------------------------------------------------------------------------------------------------------- */}

                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default MainRoute;