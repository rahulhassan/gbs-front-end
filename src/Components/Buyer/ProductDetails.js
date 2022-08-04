import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';

const ProductDetails=()=>{
    const {title} = useParams();
    const [product,setProduct] = useState({});

    return(
        <div>
            {title}
        </div>
    )
}
export default ProductDetails;