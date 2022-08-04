import {BrowserRouter,Route,Routes} from 'react-router-dom';

import ProductsList from "../ProductsList";
import NavBar from "./NavBar";

const RouteLink=()=>{
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <br></br>
                <Routes>
                    <Route path="/seller/dashboard" element={<ProductsList/>}></Route>
                    {/* <Route path="/seller/profile" element={<SellerProfile/>}></Route>
                    <Route path="/seller/post" element={<PostProduct/>}></Route>
                    <Route path="/seller/orders" element={<SellerOrder/>}></Route>
                    <Route path="/seller/statement" element={<SellerStatement/>}></Route> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RouteLink;