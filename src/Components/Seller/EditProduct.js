import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosConfig from '../axiosConfig';
import swal from 'sweetalert';
import NavBar from "./NavBar/NavBar";


const EditProduct=(props)=> {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const {id} = useParams();
    const[err,setErr] = useState("");
    const[image,setImage]= useState({});
    const [loading, setLoading] =useState(true);



    useEffect(()=>{
        axiosConfig.get(`/seller/edit/${id}`).then((res)=>{
            setInputs({
                image:res.data.image_path,
                p_title:res.data.p_title,
                p_brand:res.data.p_brand,
                p_price:res.data.p_price,
                Category:res.data.Category,
                p_description:res.data.p_description,
                p_quantity:res.data.p_quantity,
                
            });
            setLoading(false);
        });
    },[id]);

    // const handleImage=(file)=>{
    //     setImage(file[0]);
    // }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = (e) =>{
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Updating";

        const fData = new FormData();
        fData.append("image", image);
        fData.append("p_title", inputs.p_title);
        fData.append("p_brand", inputs.p_brand);
        fData.append("p_price", inputs.p_price);
        fData.append("Category", inputs.Category);
        fData.append("p_description", inputs.p_description);
        fData.append("p_quantity", inputs.p_quantity);

        swal("Do you want to update?", {
            buttons: ["No", "Yes"],
        })
        .then((willUpdate) => {
            if (willUpdate) {
                axiosConfig.post(`/seller/update/${id}`,fData)
                .then((rsp)=>{
                    if (rsp.data.status === 200) {
                        navigate('/seller/dashboard');
                        swal('Success', rsp.data.msg, 'success')
                    } else if (rsp.data.status === 422) {
                        setErr(rsp.data.errors)
                        thisClicked.innerText = "Update";
                    }
                })
                
            } else {
                swal("Product is not Updated");
                thisClicked.innerText = "Update";
                
            }
        });
    }

    if(loading){
        return (
            <div>
                <NavBar/>
                <h4>Loading...</h4>
            </div>
        )
    }

    return (
        <div><NavBar/>
        <section className="vh-150">
            <div className="container py-5 h-150">
                <div className="row d-flex justify-content-center align-items-center h-150">
                    <div className="row">
                        <h3>Update Product Information</h3>
                        <div className="col-sm-6">
                            <div className="card p-4">
                                <img src={`http://127.0.0.1:8000/images/${inputs.image}`} width="300px" alt=''></img>

                                <label>Photo</label>
                                <input type="file" name="image" className="form-control mb-2"
                                onChange = {(e)=>{setImage(e.target.files[0])}}
                                /> 
                                <p className="text-danger">{err.image? err.image[0]:''}</p>

                                <label>Product Title</label>
                                <input type="text" name="p_title" className="form-control mb-2" value={inputs.p_title || '' } onChange={handleChange} />
                                <p className="text-danger">{err.p_title? err.p_title[0]:''}</p>
                                
                                <label>Product Brand</label>
                                <input type="text" name="p_brand" className="form-control mb-2" value={inputs.p_brand || '' } onChange={handleChange} />
                                <p className="text-danger">{err.p_brand? err.p_brand[0]:''}</p>

                                <label>Product Price</label>
                                <input type="text" name="p_price" className="form-control mb-2" value={inputs.p_price || '' } onChange={handleChange} />
                                <p className="text-danger">{err.p_price? err.p_price[0]:''}</p>

                                <label>Category</label>
                                <select className="form-control mb-2" name="Category" value={inputs.Category || '' } onChange={handleChange}>
                                    <option value="TV">TV</option>
                                    <option value="Computer">Computer</option>
                                    <option value="Mobile">Mobile</option>
                                    <option value="Camera">Camera</option>
                                    <option value="Fridge">Fridge</option>
                                    <option value="Accessories">Accessories</option>
                                </select>

                                <label>Description</label>
                                <textarea type="text" name="p_description" className="form-control mb-2" value={inputs.p_description || '' } onChange={handleChange} />
                                <p className="text-danger">{err.p_description? err.p_description[0]:''}</p>

                                <label>Quantity</label>
                                <input type="text" name="p_quantity" className="form-control mb-2" defaultValue={inputs.p_quantity || '' } onChange={handleChange} />
                                <p className="text-danger">{err.p_quantity? err.p_quantity[0]:''}</p>

                                <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default EditProduct;