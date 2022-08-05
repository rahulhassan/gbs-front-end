import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axiosConfig from '../axiosConfig';
const PostProduct=()=>{
    const navigate = useNavigate;
    const [inputs,setInputs] = useState({});
    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = (e) =>{
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Posting";
        console.log(inputs);
        axiosConfig.put("/seller/post",inputs)
        .then((rsp)=>{
            navigate('/seller/dashboard');
            swal("Success", "Product posted successfully!", "success");
            //setMsg(rsp.data.msg);
        },(er)=>{
            console.log(er.response.data);
            if(er.response.status==422) //for data validation
            {
                setErr(er.response.data);
            }else{
                setMsg("Server Error Occured");
            }
        })
          
    }
    return(
        <div>
            <h3 >Post Product</h3>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <label>Product Title</label>
                        <input type="text" name="p_title" className="form-control mb-2"
                                value={inputs.p_title || ''}
                                onChange={handleChange}
                            />
                        <span>{err.p_title? err.p_title[0]:''}</span>

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
                            value={inputs.p_quantity || ''}
                            onChange={handleChange}
                        />

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Post</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default PostProduct;