import MenuItem from "./MenuItem";

const TopMenu=()=>{
    return (
        <div>
            <MenuItem url="/" title="Home"/>
            <MenuItem url="/dashboard" title="Dashboard"/>
            <MenuItem url="/pruductDetails" title="ProductDetails"/>
           
        </div>
    )
}
export default TopMenu;