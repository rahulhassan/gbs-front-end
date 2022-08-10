import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import EditProduct from './Seller/EditProduct';
import EditSellerProfile from './Seller/EditSellerProfile';
import PostProduct from './Seller/PostProduct';
import ProductsList from './Seller/ProductsList';
import SellerProfile from './Seller/SellerProfile';
import SignupUser from './SignupUser';

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



{/* -------------------------------------------------------------------------------------*/}





                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default MainRoute;