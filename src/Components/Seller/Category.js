import {useState,useEffect} from 'react';
import axiosConfig from '../axiosConfig';
import swal from 'sweetalert';
import NavBar from './NavBar/NavBar';
const Category=()=>{
    document.title = "Category";
    const [loading, setLoading] =useState(true);
    const [categoryItem ,setCategoryItem] = useState([]);
    const [CategoryName ,setCategoryName] = useState("");
    const [err ,setErr] = useState("");
    const [msg ,setMsg] = useState("");
    useEffect(()=>{
        axiosConfig.get("/products/category").then((res)=>{
            setCategoryItem(res.data);
            setLoading(false);
        });
    },[]);

    const Submit=(event)=>{
        event.preventDefault();
        const add = document.getElementById("ct_Add");
        add.innerHTML= "Adding";

        var data={category_name:CategoryName};
        axiosConfig.post("/add/category",data)
        .then((rsp)=>{
            setErr("");
            if (rsp.data.status === 422) {
                setErr(rsp.data.errors)
                add.innerHTML= "Add";

            }
            setMsg(rsp.data.message); 
            add.innerHTML= "Add";
            if(rsp.data.message){
                window.location.href="/seller/post";
            }
            
        });

    }


    const DeleteCategory = (e, id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";
        axiosConfig.get(`/delete/category/${id}`)
            .then((rsp)=>{
                if(rsp.data.status === 200){
                    swal("Success", rsp.data.message, "success");
                    thisClicked.closest("tr").remove();
                }
                else if(rsp.data.status === 404){
                    swal("Success", rsp.data.message, "success")
                    thisClicked.innerText = "Delete";
                }
            },(err)=>{
                debugger;
            });
        }
    if(loading){
        return (
            <div>
                <NavBar/>
                <h4 style={{textAlign:"center", marginTop:"150px"}}>Loading...</h4>
            </div>
        )
    }
    
   
    return(
        <div>
        <NavBar/><br/>
            <center>
            <form onSubmit={Submit}>
                <div style={{width:"300px"}}>
                    <span className="text-danger">{err.category_name? err.category_name[0]:''}</span>
                    <input type="text" className="form-control mb-2" placeholder="Category name" style={{width:"300px"}}  onChange={(e)=>setCategoryName(e.target.value)} value={CategoryName}/>
                    
                    <button type="submit" id="ct_Add" className="form-control btn btn-primary mb-4">Add</button>
            
                </div>
            </form>
            
                <table className="table table-striped" style={{borderRadious:"10px", width:"500px"}}>
                        <tbody>
                            <tr className="table-dark" align="center"><td colSpan={2}><h5> Categories</h5></td></tr>
                        {
                            categoryItem.map((c)=>(
                                <tr key={c.id}>
                                    <td>{c.category_name}</td>
                                    <td align='right'>
                                        <button onClick={ (e) => DeleteCategory(e, c.id) } type="button" className="btn btn-danger">Delete</button> 
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
            </center>
        </div>                      
    )
}
export default Category;