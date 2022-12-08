import React from 'react'

function CustomProducts({products}) 
{
  return (
    <div className='homemaindiv'>
        {  products?.map((product) => {
                return (<div className='homediv' key={product.id}>
                    <img src={product.productPic} alt="no image"/> <br />
                    <hr />
                    <big>{product.brand}</big>
                    <p>{product.description}</p>
                    <font>{product.discountPrise}</font> <br />
                    <small>{product.mrp}</small>
                </div>)
            })
        }
    </div>
  )
}

export default CustomProducts