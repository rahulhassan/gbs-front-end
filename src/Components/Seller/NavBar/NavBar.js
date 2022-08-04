import MenuItems from "./MenuItems";

const NavBar=()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <MenuItems url="/seller/dashboard" title="Dashboard"/>
                    <MenuItems url="/seller/profile" title="Profile"/>
                    <MenuItems url="/seller/post" title="Post Product"/>
                    <MenuItems url="/seller/orders" title="Orders"/>
                    <MenuItems url="/seller/statement" title="Statement"/>
                </div>
                <h5 className="nav-item" style={{marginLeft: "20px"}}>Welcome</h5>
            </div>
        </nav>
    )
}
export default NavBar;