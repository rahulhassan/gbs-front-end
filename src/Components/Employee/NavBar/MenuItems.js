import {Link} from 'react-router-dom';
const MenuItems =({url,title})=>{
    return (
        <Link to={url} className="nav-item nav-link">{title}</Link>
    )   
}
export default MenuItems;