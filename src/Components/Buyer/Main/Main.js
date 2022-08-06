import Dashboard from "../Others/Dashboard";
import ProductDetails from "../Others/ProductDetails";
import Profile from "../Others/Profile";
import TopMenu from "./TopMenu";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Cart from "../Others/Cart";
import Checkout from "../Others/Checkout";
import UpdateProfile from "../Others/UpdateProfile";
import OrderDetails from "../Others/OrderDetails";
import OrderCompleted from "../Others/OrderCompleted";
import Orders from "../Others/Orders";


const Main=()=>{
    return(
        <div>
              
                <BrowserRouter>
                    <TopMenu/>
                    <br></br>
                    <Routes>
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


                    
                    </Routes>
            </BrowserRouter>
                
        </div>
    )
}
export default Main;