import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import CustomProducts from './CustomProducts'
import Navbar from './Navbar'
import UseFetch from './UseFetch'
import {Link} from 'react-router-dom'
import { Triangle } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function Home() 
{
    // let [products,setProducts]=useState(null)
    // let [pending ,setPending]=useState(true)

    // useEffect(()=>
    // {
    //    setTimeout(() => {
    //     let mydata=fetch("http://localhost:4000/products")
    //    mydata.then((res)=>res.json()).then((res)=>setProducts(res)); setPending(false).catch((err)=>console.log(err))
    //    }, 3000);
    // },[])

    let {data:products,pending,error}=UseFetch("http://localhost:4000/products")
    

  return (<>
     <Navbar/>
    <div>
        <h1 id="all">. . . . . All Prodcuts . . . . .</h1>
        
      <div className='homemaindiv'>
          { pending?<Triangle
  height="180"
  width="180"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  visible={true}
/>:
            
              products?.map((product) => {
                  return (<div className='homediv' key={product.id}>
                      <Link to={`./productdetails${product.id}`}>
                      <img src={product.productPic} alt="no image"/> <br />
                      <hr />
                      <big>{product.brand}</big>
                      <p>{product.description}</p>
                      <font>{product.discountPrice}</font><br />
                      <small>{product.mrp}</small>
                      </Link>
                  </div>)
              })
          }
      </div>
      <h1>Size M products</h1>
         <CustomProducts products={products?.filter((product)=>{return product.size[1]==="m"})}/>
      </div>
      </>)
}

export default Home