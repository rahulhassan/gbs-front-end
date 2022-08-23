import { NavLink } from 'react-router-dom';
const MenuItems =({url,title})=>{
    return (
        <NavLink to={url} className="nav-item nav-link">{title}</NavLink>
    )   
}
export default MenuItems;