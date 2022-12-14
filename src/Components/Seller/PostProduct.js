import { useEffect, useState } from "react";
import axiosConfig from '../axiosConfig';
import swal from 'sweetalert';
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar/NavBar";


const PostProduct=()=> {
    document.title = "Post Product";
    const navigate = useNavigate();
    const[categoryItem,setCategoryItem] = useState([]);
    const[loading,setLoading] = useState(true);
    const[p_title,setP_title] = useState("");
    const[p_brand,setP_brand] = useState("");
    const[p_price,setP_price] = useState("");
    const[Category,setCategory] = useState("");
    const[p_description,setP_description] = useState("");
    const[p_quantity,setP_quantity] = useState("");
    const[image,setImage] = useState("");

    const[err,setErr] = useState("");

    const initialText = 'Post';
    const [buttonText, setButtonText] = useState(initialText);
    function handleClick() {
        setButtonText('Posting...');
    }

    const s_id = localStorage.getItem("user_id");

    useEffect(()=>{
        axiosConfig.get("/products/category").then((res)=>{
            setCategoryItem(res.data);
            setLoading(false);
        });
    },[]);
    
    const handleForm=(event)=>{
        event.preventDefault();
        const fData = new FormData();
        fData.append("image", image);
        fData.append("s_id", s_id);
        fData.append("p_title", p_title);
        fData.append("p_brand", p_brand);
        fData.append("p_price", p_price);
        fData.append("Category", Category);
        fData.append("p_description", p_description);
        fData.append("p_quantity", p_quantity);

        axiosConfig.post("/seller/post",fData)
        .then((rsp)=>{
            if (rsp.data.status === 200) {
                navigate('/seller/dashboard');
                swal('Success', rsp.data.msg, 'success')
            } else if (rsp.data.status === 422) {
                setErr(rsp.data.errors)
                setButtonText(initialText);
            }
        })
    }
    if(loading){
        return (
            <div>
                <NavBar/>
                <h4 style={{textAlign:"center", marginTop:"150px"}}>Loading...</h4>
            </div>
        )
    }

    return (
        <div><NavBar></NavBar>
        <hr/>
            <h4 style={{textAlign:"center", fontFamily: "myFirstFont"}}>Post Product</h4>
        <hr/>
        <section className="vh-200">
        <div className="container py-3 h-200">
            <div className="d-flex justify-content-center align-items-center h-200">
            <div className="col col-lg-6 mb-4 mb-lg-0">            
                <form onSubmit={handleForm}>
                
                    <div className="card p-4">
                        
                        <label>Product Title</label>
                        <input type="text" name="p_title" className="form-control mb-2"
                                value={p_title} 
                                onChange={(e)=>{setP_title(e.target.value)}}
                            />
                        <p className="text-danger">{err.p_title? err.p_title[0]:''}</p>

                        <label>Product Brand</label>
                        <input type="text" name="p_brand" className="form-control mb-2"
                            value={p_brand}
                            onChange={(e)=>{setP_brand(e.target.value)}}
                        />
                        <p className="text-danger">{err.p_brand? err.p_brand[0]:''}</p>

                        <label>Product Price</label>
                        <input type="text" name="p_price" className="form-control mb-2"
                            value={p_price}
                            onChange={(e)=>{setP_price(e.target.value)}}
                        />
                        <p className="text-danger">{err.p_price? err.p_price[0]:''}</p>
                        
                        <label>Category</label>
                        <select className="form-control mb-2" value={Category} onChange={(e)=>{setCategory(e.target.value)}}>
                            {
                                categoryItem.map((ct)=>(
                                    <option key={ct.id} value={ct.category_name}>{ct.category_name}</option>
                                ))
                            }
                        </select>
                        <Link to="/category" style={{width:"160px"}} className="btn btn-info mb-4">Add Category</Link> 
                        

                        <label>Description</label>
                        <textarea type="text" name="p_description" className="form-control mb-2"
                            value={p_description}
                            onChange={(e)=>{setP_description(e.target.value)}}
                        />
                        <p className="text-danger">{err.p_description? err.p_description[0]:''}</p>

                        <label>Quantity</label>
                        <input type="number" name="p_quantity" className="form-control mb-2"
                            value={p_quantity}
                            onChange={(e)=>{setP_quantity(e.target.value)}}
                        />
                        <p className="text-danger">{err.p_quantity? err.p_quantity[0]:''}</p>

                        <label>Photo</label>
                        <input type="file" name="image" className="form-control mb-2"
                            onChange = {(e)=>{setImage(e.target.files[0])}}
                        />
                        <p className="text-danger">{err.image? err.image[0]:''}</p>

                        <input type="submit" onClick={handleClick} className="btn btn-success mt-2" value={buttonText}/>
                        
                    </div>
               
                </form>
            </div>
        </div>
        </div>
       
        </section>
        </div>
    )
}

export default PostProduct;