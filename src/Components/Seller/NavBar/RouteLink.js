import {BrowserRouter,Route,Routes} from 'react-router-dom';
import EditProduct from '../EditProduct';
import PostProduct from '../PostProduct';

import ProductsList from "../ProductsList";
import SellerProfile from '../SellerProfile';
import NavBar from "./NavBar";

const RouteLink=()=>{
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/seller/dashboard" element={<ProductsList/>}></Route>
                    <Route path="/seller/post" element={<PostProduct/>}></Route>
                    <Route path="/seller/profile" element={<SellerProfile/>}></Route>
                    {/*<Route path="/seller/orders" element={<SellerOrder/>}></Route>
                    <Route path="/seller/statement" element={<SellerStatement/>}></Route> */}
                    <Route path="/product/edit/:id" element={<EditProduct/>}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RouteLink;