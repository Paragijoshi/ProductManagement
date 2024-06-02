
import { useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import productService from '../service/product.service';

const EditProduct = () => {
  const[product,setProduct]= useState({
    id:"",
    productName:"",
    description:"",
    status:"",
    price:""
   
   }
);
const navigate=useNavigate()

const{id} =useParams();
console.log(id);

const[msg,setMsg]=useState("");

useEffect(()=>{
productService
.getProductById(id)
.then((res)=>{
  setProduct(res.data);
}).catch((error)=>{
  console.log(error);
})
},[]);

   const handleChange=(e)=>{
      const value=e.target.value;
      setProduct({...product,[e.target.name]:value})
   };

   const ProductUpdate=(e)=>{
    e.preventDefault();
    console.log(product);
    productService
    .editProduct(product)
    .then((res)=>{
        navigate("/");

    }).catch((error)=>{
        console.log(error);
    })
    // console.log(product);
   };

  return (
   <>
   <div className='container mt-3'>
    <div className='row'>
        <div className='col-md-6 offset-md-3'>
            <div className='card'>
                <div className='card-header fs-3 text-centre table-font'>
                    Edit product
                </div>
                {
                msg && 
                <p className="fs-4 text-centre text-success">{msg}</p>
                }
                <div className='card-body table-font'>
                    <form onSubmit={(e)=> ProductUpdate(e) }>
                        <div className='mb-3'>
                            <label> Enter Product Name: </label>
                            <input 
                            type="text" 
                            name="productName" 
                            className="form-control"  
                            onChange={(e)=>handleChange(e)}
                            value={product.productName}
                            />
                        </div>

                        <div className='mb-3'>
                            <label> Enter Product description: </label>
                            <input type="text" 
                            name="description" 
                            className="form-control"  
                            onChange={(e)=>handleChange(e)}
                            value={product.description}
                            />
                        </div>

                        <div className='mb-3'>
                            <label> Enter Product price: </label>
                            <input type="text" 
                            name="price" 
                            className="form-control" 
                            onChange={(e)=>handleChange(e)}
                            value={product.price}
                            />
                        </div>

                        <div className='mb-3'>
                            <label> Enter Product status: </label>
                            <input type="text" 
                            name="status" 
                            className="form-control"
                            onChange={(e)=>handleChange(e)} 
                            value={product.status}/>
                        </div>
                        <button className="btn btn-primary col-md-12">Update</button>
                    </form>
                    

                </div>
            </div>
        </div>
     </div>
   </div>   
   </>
  )
}

export default EditProduct