import React, { useState } from 'react'
import UseFetch from './UseFetch'
import {Link} from 'react-router-dom'
import AddProducts from './AddProducts'
import { Puff } from  'react-loader-spinner'


function AdminPage() 
{
  let {data:products,pending,error}=UseFetch("http://localhost:4000/products")
  let handleDelete=(id)=>
  {
    fetch(`http://localhost:4000/products/${id}` , {method:"DELETE"})
    .then(()=>
    {
      alert("Item has been deleted")
      window.location.reload()
    })
  }
  return (
    <div>
        <h1>Admin Page</h1>
        <hr />
         {pending && <Puff height="180" width="180" radisu={1} color="#4fa94d" visible={true}/>}

        {products?
        <table border="1px" width="450px" cellPadding="10px" cellSpacing="5px">
          <thead>
            <th>Sl No</th>
            <th>Product</th>
            <th>Product type</th>
            <th colSpan={2}>Action</th>
          </thead>
          <tbody>
            {
              products?.map((item,index)=>
              {
                return <tr>
                  <td>{index+1}</td>
                  <td><img src={item.productPic} width="100px" height="100px"/></td>
                  <td>{item.productType}</td>
                  <td><button>Edit</button></td>
                  <td><button onClick={()=>handleDelete(item.id)}>Delete</button></td>
                </tr>
              })
            }
          </tbody>
        </table>:""}
        <Link to="/addproduct">
        <button id="addnewprod">Add new Product</button>
        </Link>
    </div>
  )
}

export default AdminPage