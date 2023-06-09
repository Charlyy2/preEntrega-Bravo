import React from 'react'
import './CartWidget.css'
import cart from './assets/cartwidget.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
//import { Cart } from '../Cart/Cart'


export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <img src={cart} alt='cart-widget' className='cartImg' />
      {totalQuantity}
    </Link>   
  )
}


export default CartWidget
