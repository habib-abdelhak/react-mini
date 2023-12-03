import React, { useContext } from 'react'
import { cart_icon } from '../assets'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom';

function Hero() {

  const {cart,setCart} = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <section className='Hero'>
        <nav className='navbar'>
            <p className='logo'>habib</p>
            <ul className='navbar-items'>
                <li className='navbar-item'>Home</li>
                <li className='navbar-item'>Contact</li>
            </ul>
            <div className='cart-icon' onClick={()=>navigate("/Cart")}>
                <img src={cart_icon} alt="" />
                <div className='cart-icon-objects'>{cart.length}</div>
            </div>
        </nav>
    </section>
  )
}

export default Hero