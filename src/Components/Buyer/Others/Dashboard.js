import TopMenu from '../Main/TopMenu';
import axiosConfig from '../../axiosConfig';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

const Dashboard=()=>{
  
    const [products,setProducts] = useState([]);
    const [search,setSearch] = useState("");
    const[Category,setCategory] = useState("");

    useEffect(()=>{
        axiosConfig.get("/dashboard")
        .then((rsp)=>{
            setProducts(rsp.data);
            //setBuyerId(rsp.data.b_id);
            //setProductId(rsp.data.p_id);
            console.log(rsp.data);
            console.log(rsp.data[2].Category);
            
        },(err)=>{

        }) 
    },[]);


    //______________________________________________________________________

    const [coupon,setShowCoupon]=useState({});
    const[msg,setMsg]=useState("");
    const[err,setErr]=useState("");
    const showCoupon=(event)=>
        {
            event.preventDefault();
            axiosConfig.get("/showCoupon")
            .then((rsp)=>{
             
                if(rsp.data.coupon)
                {
                    setShowCoupon(rsp.data.coupon);
                    setMsg(rsp.data.have);
                }
                else
                {
                    setMsg(rsp.data.have);
                }
               
                console.log(rsp.data.coupon);
                //setErr(rsp.data);
                //debugger;
            },(er)=>{
                if(er.response.status==422)
                {
                    setErr(err.response.data);
                }
                else
                {
                    setMsg("Server Error Occured");
                }
                //debugger;
            })
        }

//___________________________________________________________________________________

       
//    const[p_id,setProductId]=useState("");
  
//     const addToWishList=(event)=>
//     {
//         event.preventDefault();
//         var data={}
//         axiosConfig.post("/wishlist",data)
//         .then((rsp)=>{
//             setMsg(rsp.data.msg);
//             setErr(rsp.data);
//             //debugger;
//         },(er)=>{
//             if(er.response.status==422)
//             {
//                 setErr(err.response.data);
//             }
//             else
//             {
//                 setMsg("Server Error Occured");
//             }
//             //debugger;
//         })
//     }



//____________________________________________________________________________________________
    
    return(
        <div>

            <TopMenu/>

            <marquee behavior="alternate" direction="right"><b>|--- Welcome ---|</b></marquee>
            <hr/>
            <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>Choose Your Product </h4>
            <hr/> 

            <div class="alert alert-success" role="alert">
                                        {/* <b>{msg}</b> */}
                                        
            </div>


            <input class="form-control" style={{height:"50px",width: "550px", marginLeft:"400px"}} name="search" onChange={(e)=>{setSearch(e.target.value)}}  type="search"  placeholder="Type here to search..."></input><br></br>
            {/* <button class="btn btn-outline-success"  style={{display:"inline" ,marginLeft:"400px"}}  type="submit">Search</button> */}
  
            <div class="container">
                <div class="row">
                    <div class="col-sm-3 ">
                
                            
                        <label>Category</label>
                        <select className="form-control mb-2" name="Category" value={Category} onChange={(e)=>{setCategory(e.target.value)}}>
                            <option value="">None</option>
                            <option value="Computer">Computer</option>
                            <option value="TV" >TV</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Camera">Camera</option>
                            <option value="Fridge">Fridge</option>
                            <option value="Watch">Watch</option>
                        </select>

                    </div>
                    <div class="col-sm-6">
                       
                
                            {/* {
                                products.map((product)=>(
                                    <table className="table table-striped bg-dark text-light">
                                            <tr key={product.p_title}>
                                                <td rowSpan={3}>
                                                <Link to={`/productDetails/${product.p_title}`}><img src={`http://localhost:8000/images/${product.image_path}`} height="250px" width="250px"></img></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                               
                                                <td>{product.p_title}</td>
                                                
                                            </tr>
                                            <tr>
                                                <td>
                                                    <td>{product.p_price}</td>
                                                </td>
                                            </tr>
                                        </table>
                                ))
                            } */}

                          


                       {
                                products.filter((val)=>{
                                        
                                        if(search=="" && Category== "")
                                        {
                                            return val;
                                        }
                                        // else if(Category== "" )
                                        // {
                                        //     return val;
                                        // }
                                        else if(Category== "" && val.p_title.toLowerCase().includes(search.toLowerCase()))
                                        {
                                            return val;
                                        }
                                        else if(search=="" && val.Category.toLowerCase().includes(Category.toLowerCase()))
                                        {
                                            return val;
                                        }


                                        else if(val.p_title.toLowerCase().includes(search.toLowerCase()) && val.Category.toLowerCase().includes(Category.toLowerCase()))
                                        {
                                            return val;
                                        }
                                })



                                

                                .map((val)=>{
                                    return(
                                        <table className="table table-striped bg-dark text-light">
                                        <tr key={val.p_title}>
                                            <td rowSpan={4}>
                                            <Link to={`/productDetails/${val.p_title}`}><img src={`http://localhost:8000/images/${val.image_path}`} height="250px" width="250px"></img></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                           
                                           <td>Title:  {val.p_title}</td>
                                           
                                       </tr>
                                        <tr>
                                           
                                            <td>Category: {val.Category}</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>
                                                <td>Price: {val.p_price}</td>
                                            </td>
                                        </tr>
                                       <tr>
                                            <td>
                                            {/* <td><button type="button" onClick={addToWishList} class="btn btn-danger">Add to wishlist</button></td> */}

                                                {/* <input type="text" name="b_id" value={val.b_id} onChange={(e)=>{setBuyerId(e.target.value)}}></input><br></br>
                                                <span>{err.b_id? err.b_id[0]:''}</span> */}

                                                {/* <input type="text" name="p_id" value={val.p_id} onChange={(e)=>{setProductId(e.target.value)}}></input><br></br>
                                                <span>{err.p_id? err.p_id[0]:''}</span> */}
                                            </td>
                                       </tr>
                                    </table>
                                    )

                                })
                            }


                    </div>
                    <div class="col-sm-3">
                            <div>
                                 <td><button type="button" onClick={showCoupon} class="btn btn-warning">Click to see your Coupon</button></td><br></br>
                                 <table className="table table-striped bg-light text-dark" border={3} style={{width:"300px"}}>
                                    
                                        <tr>
                                                <td>
                                                    <b>{msg}</b>
                                                    
                                                </td>
                                       </tr>
                                       <tr>
                                           <td>____________________________________</td> 
                                       </tr>
                                        <tr>
                                            <th>Coupon Name</th>
                                            <th>Discount</th>
                                        </tr>
                                                {/* {
                                                    coupon.map((cpn)=>(
                                                                <tr>
                                                                    <td>
                                                                        {cpn.cpn_name}
                                                                    </td>
                                                                    <td>
                                                                        {cpn.discount}
                                                                    </td>
                                                                </tr>
                                                            

                                                    ))
                                                } */}

                                                <tr>
                                                    <td>{coupon.cpn_name}</td>
                                                    <td>{coupon.discount}</td>
                                                </tr>
                                
                                    </table>

                    </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;