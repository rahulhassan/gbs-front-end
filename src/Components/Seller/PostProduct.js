import { useState } from "react";
import axiosConfig from '../axiosConfig';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar/NavBar";


const PostProduct=()=> {
    const navigate = useNavigate();
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

    return (
        <div><NavBar></NavBar>
        <section className="vh-200">
        <div className="container py-5 h-200">
            <div className="row d-flex justify-content-center align-items-center h-200">
            <div className="col col-lg-10 mb-4 mb-lg-0">
            <h3>Post Product</h3>
            
            <form onSubmit={handleForm}>
            <div className="row">
                <div  className="col-sm-6">
                
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
                            <option value="TV" >TV</option>
                            <option value="Computer">Computer</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Camera">Camera</option>
                            <option value="Fridge">Fridge</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                        <p className="text-danger"></p>

                        <label>Description</label>
                        <textarea type="text" name="p_description" className="form-control mb-2"
                            value={p_description}
                            onChange={(e)=>{setP_description(e.target.value)}}
                        />
                        <p className="text-danger">{err.p_description? err.p_description[0]:''}</p>

                        <label>Quantity</label>
                        <input type="text" name="p_quantity" className="form-control mb-2"
                            value={p_quantity}
                            onChange={(e)=>{setP_quantity(e.target.value)}}
                        />
                        <p className="text-danger">{err.p_quantity? err.p_quantity[0]:''}</p>

                        <label>Photo</label>
                        <input type="file" name="image" className="form-control mb-2"
                            onChange = {(e)=>{setImage(e.target.files[0])}}
                        />
                        <p className="text-danger">{err.image? err.image[0]:''}</p>

                        <button type="submit" onClick={handleClick} className="btn btn-info mt-2">{buttonText}</button>
                        
                    </div>
                </div>
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