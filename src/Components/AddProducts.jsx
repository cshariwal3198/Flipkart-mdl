import React , { useRef } from 'react'
import { useHistory } from 'react-router-dom'

function AddProducts() 
{
  let h=useHistory()
 
 
  let pic=useRef("")
  let brand=useRef("")
  let desc=useRef("")
  let discount=useRef("")
  let mrp=useRef("")
  let color=useRef("")
  let fabric=useRef("")
  let type=useRef("")
  let rate=useRef("")

  let newProduct={}

  let handleSubmit=(e)=>{
    e.preventDefault();

  newProduct=
  {
    productPic : pic.current.value ,
    brand : brand.current.value,
    description : desc.current.value,
    discountPrice : discount.current.value,
    mrp : mrp.current.value,
    color: color.current.value,
    fabric : fabric.current.value,
    productType : type.current.value,
    usage : "",
    rating: rate.current.value,
    size : []
  }
  }

  let genderOptions=document.getElementsByName("gender")
  genderOptions.forEach((inp)=>
  {
    if(inp.checked)
    {
      newProduct.usage=inp.value;
    }
  })

  let sizeOptions=document.getElementsByName("size")
  let sizeAvailable=[]
  sizeOptions.forEach((inp)=>
  {
    if(inp.checked)
    {
      sizeAvailable.push(inp.value)
    }
  })
  newProduct.size=sizeAvailable;

  fetch(`http://localhost:4000/products`,{method :"POST", headers : {"Content-Type":"application/json"} , body:JSON.stringify(newProduct)})
  .then(()=>
  {
    alert("A new product has been added")
    h.push("/user")
  })

  return (
    <div>
        <label id="adminheader">Add products</label> <br />
        <hr/>
        <br/>
        <form id="adminform" onSubmit={handleSubmit}>
                <label>Id  : </label><input type="text"/>
                <label>ProductPic : </label><input type="text" ref={pic}/>
                <label>Brand : </label> <input type="text" ref={brand}/>
                <label>Description : </label><input type="text" ref={desc}/>
                <label>Discountprice : </label><input type="text" ref={discount}/>
                <label>MRP : </label><input type="text" ref={mrp}/>
                <label>Color : </label><input type="text" ref={color}/>
                <label>Fabric : </label><input type="text" ref={fabric}/>
                <label>ProdcutType : </label><input type="text" ref={type}/>
                <label>Usage : </label>
                            <div>
                              <input type="radio" value="male" name='gender'/> <label htmlFor="">Male</label>
                              <input type="radio" value="female" name='gender' /> <label htmlFor="">Female</label>
                            </div>
                <label>Rating : </label><input type="number" step="0.1" min="1" max="5" ref={rate}/>
                <label>Size : </label>
                              <div>
                                  <input type="checkbox" value="s"/> <label htmlFor="">S</label>
                                  <input type="checkbox" value="m"/> <label htmlFor="">M</label>
                                  <input type="checkbox" value="l" /> <label htmlFor="">L</label>
                                  <input type="checkbox" value='xl'/> <label htmlFor="">XL</label>
                              </div>
                              <button>Submit</button>
        </form>
    </div>
  )
}

export default AddProducts