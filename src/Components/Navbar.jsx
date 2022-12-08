import React from 'react'
import logo from "../images/Flipkart.png"
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom'

function Navbar() 
{
  return (
    <div>
        <nav className='navbar'>
            <ul id="headlist">
              <img src={logo} height="50px" width="100px"/>
              <input id="searchinput" type="text" placeholder='Search for products,brands and more'/><a href=""><FaSearch/></a>
              <button>LogIn</button>
              <Link to="./admin">Become a seller</Link>
              {/* <a href="./Cart.jsx">Cart</a> */}
            </ul>
        </nav>
        <div id="navbar2">
            <a href="/">
              <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" height="85px" width="70px" alt="no image"/>
              <small>Top offers</small>
            </a>
            <a>
              <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" height="85px" width="70px" alt="" />
              <small>Groceries</small>
            </a>
            <a>
              <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" height="85px" width="70px" alt="" />
              <small>Mobiles</small>
            </a>
            <a>
              <img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" height="85px" width="70px" alt="" />
              <small>Fashion</small>
            </a>
            <a>
              <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" height="85px" width="70px" alt="" />
              <small>Electronics</small>
            </a>
            <a href="../Components/Home.jsx">
              <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" height="85px" width="70px" alt="" />
              <small>Home</small>
            </a>
            <a>
              <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" height="85px" width="70px" alt="" />
              <small>Appliances</small>
            </a>
            <a>
              <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" height="85px" width="70px" alt="" />
              <small>Toys</small>
            </a>
            <a>
              <img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" height="85px" width="70px" alt="" />
              <small>Travels</small>
            </a>
            <a>
              <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" height="85px" width="70px" alt="" />
              <small>Two wheelers</small>
            </a>
        </div>
        <div id="slidingimg">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/12593d7344d8e761.jpg?q=50" />
        </div>
    </div>
  )
}

export default Navbar