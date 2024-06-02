import React, { useState } from 'react'
import productService from '../service/product.service';


const AddProduct = () => {
    
   const[product,setProduct]= useState({
    productName:"",
    description:"",
    status:"",
    price:""
   
   }
);
const[msg,setMsg]=useState("");
   const handleChange=(e)=>{
      const value=e.target.value;
      setProduct({...product,[e.target.name]:value})
   };

   const ProductRegister=(e)=>{
    e.preventDefault();
    console.log(product);
    productService
    .saveProduct(product)
    .then((res)=>{
        console.log("product added succesfully");
        setMsg("product added succesfully");
        setProduct({
            productName:"",
            description:"",
            status:"",
            price:""
           
           })

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
                <div className='card-header fs-3 text-centre table-font '>
                    Add product
                </div>
                {msg &&  <p className="fs-4 text-centre text-success">{msg}</p>}
                <div className='card-body table-font'>
                    <form onSubmit={(e)=> ProductRegister(e) }>
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
                        <button className="btn btn-primary col-md-12">Submit</button>
                    </form>
                    

                </div>
            </div>
        </div>
     </div>
   </div>   
   </>
  )
}

export default AddProduct