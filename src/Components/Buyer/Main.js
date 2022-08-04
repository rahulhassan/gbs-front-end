import Dashboard from "./Dashboard";
import ProductDetails from "./ProductDetails";
import TopMenu from "./TopMenu";
import {BrowserRouter,Route,Routes} from 'react-router-dom';

const Main=()=>{
    return(
        <div>
            <BrowserRouter>
                <TopMenu/>
                <Routes>
              
                    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/productDetails/:title" element={<ProductDetails></ProductDetails>}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Main;