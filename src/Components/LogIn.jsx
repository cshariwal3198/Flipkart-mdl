import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'

function LogIn() 
{
  useEffect(()=>
  {
    document.body.style.backgroundColor="cream"
  })

  return (
    <div className='loginpage'>
        <Link to="/user"><button>User</button></Link>
        <Link to="/admin"><button>Admin</button></Link>
    </div>
  )
}

export default LogIn