import {Link} from 'react-router-dom';
const Items =({url,title})=>{
    return (
        <Link to={url}>{title}</Link>
    )   
}
export default Items;