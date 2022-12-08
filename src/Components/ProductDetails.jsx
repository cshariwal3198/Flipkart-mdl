import React from 'react'
import { Triangle } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import UseFetch from './UseFetch'

function ProductDetails() 
{
    let {id}=useParams()

    let {data:product,pending,error}=UseFetch(`http://localhost:4000/products/${id}`)

  return (
    <div>
        <Navbar/>
        <h1>Product details</h1>
        <hr />
        {pending ? <Triangle
  height="180"
  width="180"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  visible={true}
/>:""}
        {error && <h2>{error}</h2>}
        {product && 
        <div className='producdetails'>
            <div>
            <img src={product.productPic}/>
            </div>
            <div>
            <h2>{product.brand}</h2>
            <h3>{product.description}</h3>
            <h2>Ourprice : {product.discountPrice}</h2>
            <big>MRP : {product.mrp}</big>
            <hr width="50%"/>
            <h2 color="blue">Procut Type : {product.productType}</h2>
            <h2 color="blue">{product.fabric}</h2>
            <hr width="50%"/>
            <h2>Available sizes are : {product.size + " "}</h2>
            < button id="detailcartbutton">Add to Cart</button>
            </div>
        </div>}
    </div>
  )
}

export default ProductDetails