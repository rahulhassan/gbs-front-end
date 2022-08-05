import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosConfig from '../axiosConfig';
import swal from 'sweetalert';


const EditProduct=(props)=> {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axiosConfig.get(`/seller/edit/${id}`).then((res)=>{
            setInputs({
                p_title:res.data.p_title,
                p_brand:res.data.p_brand,
                p_price:res.data.p_price,
                p_description:res.data.p_description,
                p_quantity:res.data.p_quantity,
            });
        });
    },[id]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = (e) =>{
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Updating";
        swal("Do you want to update?", {
            buttons: ["No", "Yes"],
        })
        .then((willUpdate) => {
            if (willUpdate) {
                axiosConfig.put(`/seller/update/${id}`,inputs)
                .then((res)=>{
                    navigate('/seller/dashboard');
                })
            } else {
                swal("Product is not Updated");
                thisClicked.innerText = "Update";
                
            }
        });
    }
    return (
        <div>
            <h3>Update Product Information</h3>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <label>Product Title</label>
                        <input type="text" name="p_title" className="form-control mb-2"
                                value={inputs.p_title || ''}
                                onChange={handleChange}
                            />

                        <label>Product Brand</label>
                        <input type="text" name="p_brand" className="form-control mb-2"
                            value={inputs.p_brand || ''}
                            onChange={handleChange}
                        />

                        <label>Product Price</label>
                        <input type="text" name="p_price" className="form-control mb-2"
                            value={inputs.p_price || ''}
                            onChange={handleChange}
                        />

                        <label>Description</label>
                        <input type="text" name="p_description" className="form-control mb-2"
                            value={inputs.p_description || ''}
                            onChange={handleChange}
                        />

                        <label>Quantity</label>
                        <input type="text" name="p_quantity" className="form-control mb-2"
                            defaultValue={inputs.p_quantity || ''}
                            onChange={handleChange}
                        />

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EditProduct;